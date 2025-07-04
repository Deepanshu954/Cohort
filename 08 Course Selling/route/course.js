const {Router} = require("express");
const courseRouter = Router();
const { z } = require("zod");
const {
  userModule,
  adminModule,
  coursesModule,
  purchasedCourseModule,
} = require("../database/db");

const {user_auth} = require("../middleware/user_auth");
const {admin_auth} = require("../middleware/admin_auth");




// --------------------- View All Courses ---------------------
courseRouter.get("/viewAll", async function (req, res) {
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
courseRouter.get("/viewMyCourse", user_auth, async function (req, res) {
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

module.exports = courseRouter;