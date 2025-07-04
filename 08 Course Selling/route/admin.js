const { Router } = require("express");
const adminRouter = Router();
const JWT = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const {
  userModule,
  adminModule,
  coursesModule,
  purchasedCourseModule,
} = require("../database/db");
const { admin_auth } = require("../middleware/admin_auth");

// --------------------- Sign Up ---------------------
adminRouter.post("/signUp", async function (req, res) {
  const requireBody = z.object({
    adminname: z.string().min(3).max(10),
    gmail: z.string().min(3).max(100).email(),
    pass: z.string().min(6).max(100),
  });
/*
{
    "adminname": "Imperials",
    "gmail" : "iamImmortal@gmail.com",
    "pass": "12345678"
}
*/
  const parseData = requireBody.safeParse(req.body);

  if (!parseData.success) {
    return res.status(404).json({
      msg: "Invalid Credentials",
    });
  }

  const { adminname, gmail, pass } = parseData.data;
  const isGmail = await adminModule.findOne({ gmail });
  if (isGmail) {
    return res.status(409).json({
      msg: "Account Already Exist",
    });
  }

  const hexPass = await bcrypt.hash(pass, 10);
  try {
    await adminModule.create({
      adminname,
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
adminRouter.post("/signIn", async function (req, res) {
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
    const user = await adminModule.findOne({ gmail });
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

    const token = JWT.sign({ id: user._id }, JWT_ADMIN_PASSWORD, { expiresIn: "1h" });

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


// ----------------------- Create Courses -----------------------

adminRouter.put("/create", admin_auth , async function(req,res)
{
    const requireBody = z.object(
    {
        courseName : z.string().max(100),
        description : z.string(),
        content : z.string(),
        price : z.number().min(0),
    });
/*
{
  "courseName": "JavaScript Essentials",
  "description": "Foundational JS concepts explained from the ground up.",
  "content": "Variables, loops, functions, arrays, objects, async/await, and DOM manipulation.",
  "price" : 999
}
*/
    const parseCourse = requireBody.safeParse(req.body);
    if(!parseCourse.success)
    {
        return res.status(404).json({
            msg: "Invalid Input",
        })
    }
    const {courseName, description, content,price} = parseCourse.data;
    try
    {
        const course = await coursesModule.create({
            courseName,
            description,
            content,
            price,
            creatorId : req.userId,
        })

        res.json({
            msg: "Course Successfully Added",
            courseId: course._id,
        })
    }
    catch(err)
    {
        res.status(500).json({
            Alert : "Course Creation Failed",
        })
    }
});

// ----------------------- Update Courses -----------------------

adminRouter.put("/update", admin_auth , async function(req,res)
{
    const requireBody = z.object(
    {
        courseId: z.string(),
        courseName : z.string().max(100),
        description : z.string(),
        content : z.string(),
        price : z.number().min(0),
    });
/*
{
  "courseName": "JavaScript Essentials",
  "description": "Foundational JS concepts explained from the ground up.",
  "content": "Variables, loops, functions, arrays, objects, async/await, and DOM manipulation."
}
*/
    const parseCourse = requireBody.safeParse(req.body);
    if(!parseCourse.success)
    {
        return res.status(404).json({
            msg: "Invalid Input",
        })
    }
    const {courseName, description, content, price,courseId} = parseCourse.data;
    try
    {
        const result = await coursesModule.updateOne(
          { _id: courseId, creatorId : req.userId, },
          {
            $set: {
              courseName,
              description,
              content,
              price,
            },
          
        });

        if(result.modifiedCount === 0)
        {
          return res.status(404).json({
            msg: "No Course Updated, Either Not Found Or Not your course.",
          })
        }
        res.json({
            msg: "Course Updated",
            courseId: courseId,
        })
    }
    catch(err)
    {
        res.status(500).json({
            Alert : "Course Updatation Failed",
        })
    }
});

module.exports = adminRouter;