const { Router } = require("express");
const userRouter = Router();
const JWT = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const mongoose = require("mongoose");
const {
  userModule,
  adminModule,
  coursesModule,
  purchasedCourseModule,
} = require("../database/db");
const { user_auth } = require("../middleware/user_auth");



// --------------------- Sign Up ---------------------
userRouter.post("/signUp", async function (req, res) {
  const requireBody = z.object({
    username: z.string().min(3).max(10),
    gmail: z.string().min(3).max(100).email(),
    pass: z.string().min(6).max(100),
  });

  const parseData = requireBody.safeParse(req.body);

  if (!parseData.success) {
    return res.status(404).json({
      msg: "Invalid Credentials",
    });
  }

  const { username, gmail, pass } = parseData.data;
  const isGmail = await userModule.findOne({ gmail });
  if (isGmail) {
    return res.status(409).json({
      msg: "Account Already Exist",
    });
  }

  const hexPass = await bcrypt.hash(pass, 10);
  try {
    await userModule.create({
      username,
      gmail,
      pass: hexPass,
    });

    res.json({
      msg: "Account Created Successfully",
    });
  } catch (err) {
    console.log("SignUp Failed", err.message);
    res.status(500).json({
      msg: "SignUp Failed",
    });
  }
});

// --------------------- Sign In ---------------------
userRouter.post("/signIn", async function (req, res) {
  const requireBody = z.object({
    gmail: z.string().min(3).max(100).email(),
    pass: z.string().min(6).max(100),
  });

  const parseData = requireBody.safeParse(req.body);

  if (!parseData.success) {
    return res.status(404).json({
      msg: "Invalid Credentials",
    });
  }

  const { gmail, pass } = parseData.data;

  try {
    const user = await userModule.findOne({ gmail });
    if (!user) {
      return res.status(404).json({
        msg: "Account Doesn't Exist",
      });
    }

    const validPass = await bcrypt.compare(pass, user.pass);
    if (!validPass) {
      return res.status(403).json({
        msg: "Password Is Incorrect",
      });
    }

    const token = JWT.sign({ id: user._id }, JWT_USER_PASSWORD, { expiresIn: "1h" });

    res.json({
      msg: "Signed In Successfully",
      token: token,
    });
  } catch (err) {
    console.log("SignIn Failed", err.message);
    res.status(500).json({
      msg: "SignIn Failed",
    });
  }
});


/*
// --------------------- View All Courses ---------------------
app.get("/viewAllCourse", user_auth, async function (req, res) {
  try {
    const courses = await coursesModule.find(); // Removed invalid {courseName}
    res.json({
      courses,
    });
  } catch (err) {
    console.error("Course not found", err.message);
    return res.status(500).json({
      msg: "Unable to load courses",
    });
  }
});

// --------------------- View My Purchased Courses ---------------------
app.get("/viewMyCourse", user_auth, async function (req, res) {
  const userId = req.userId;
  try {
    const purchases = await purchasedCourseModule.find({ userId }).populate("courseId");
    res.json({
      myCourses: purchases.map((entry) => entry.courseId),
    });
  } catch (err) {
    res.status(500).json({
      msg: "Courses Not Found",
    });
  }
});
*/
// --------------------- Purchase Course ---------------------
userRouter.post("/purchaseCourse", user_auth, async function (req, res) {
  const userId = req.userId;
  const { courseId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return res.status(400).json({ msg: "Invalid Course ID" });
  }

  try {
    const course = await coursesModule.findById(courseId);
    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }
    const alreadyPurchased = await purchasedCourseModule.findOne({
      userId,
    });
    if (alreadyPurchased) {
      return res.status(409).json({ msg: "Course already purchased" });
    }
    const newPurchase = new purchasedCourseModule({
      userId,
      courseId,
    });
    await newPurchase.save();
    res.json({
      msg: "Course purchased successfully",
    });
  } catch (err) {
    console.error("Purchase failed", err.message);
    res.status(500).json({
      msg: "Unable to complete purchase",
    });
  }
});

module.exports = userRouter;