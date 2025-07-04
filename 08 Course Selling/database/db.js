const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema(
{
    "username" : 
    {
        type: String,
        required : [true, "Name is Required"],
        trim : true,
    },
    "gmail": 
    {
        type: String,
        required : [true, "Gmail is required"],
        unique : true,
        trim : true,
        lowercase : true,
    },
    "pass" :
    {
        type: String,
        required : [true, "Password Is Required"],
    },

});

const admins = new Schema(
{
    "adminname" : 
    {
        type: String,
        required : [true, "Name is Required"],
        trim : true,
    },
    "gmail": 
    {
        type: String,
        required : [true, "Gmail is required"],
        unique : true,
        trim : true,
        lowercase : true,
    },
    "pass" :
    {
        type: String,
        required : [true, "Password Is Required"],
    },

});

const courses = new Schema(
{
    "courseName" : 
    {
        type: String,
        required : [true, "Name is Required"],
        trim : true,
    },
    "description": 
    {
        type: String,
        required : true,
    },
    "content" :
    {
        type: String,
        required : true,
    },
    "price" :
    {
        type: Number,
    },
    "creatorId":
    {
        type : ObjectId,
    }

});


const purchasedCourses = new Schema(
{
    "courseId" :
    {
        type : ObjectId,
        ref: "Course",
        required : true,
    },
    "userId" : 
    {
        type: ObjectId,
        required : true,
        ref: "User",
        trim : true,
    },

});



const userModule = mongoose.model("User", users);
const adminModule = mongoose.model("Admin", admins);
const coursesModule = mongoose.model("Course", courses);
const purchasedCourseModule = mongoose.model("PurchasedCourses", purchasedCourses);

module.exports = {
    userModule,
    adminModule,
    coursesModule,
    purchasedCourseModule,
};