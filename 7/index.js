const express = require("express");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");
const {userModel,todoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth.js");
const {z} = require("zod");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Deepanshu954:25148912@cluster0.8wpbjpq.mongodb.net/todo-testing");

app.post("/signUp", async function(req, res) 
{
    const requiredBody = z.object(
    {
        name : z.string().min(3).max(100),
        gmail: z.string().min(5).max(100).email(),
        pass : z.string().min(6).max(100)
    });

    const parseData = requiredBody.safeParse(req.body);
    if(!parseData.success)
    {
        return res.status(400).json({
            msg: "Invalid Credentails"
        })
    }

    const {name, gmail, pass} = req.body;


    if (!name || !gmail || !pass) {
        return res.status(400).json({ msg: "All Fields Required" });
    }
    try
    {
        const hashPass = await bcrypt.hash(pass, 5);

        await userModel.create({
            name: name,
            gmail: gmail,
            pass: hashPass,
        });

        res.status(201).json({
            msg: "You Have Signed Up",
            pass: hashPass,
        })
    }
    catch(e)
    {
        console.error("Signup Error:", e.message);
        res.status(500).json({
            msg: "Error Occurred, Please Retry"
        })
    }
});


app.post("/signIn", async function(req, res) 
{
    const {name,gmail, pass} = req.body;

    if(!gmail || !pass) 
    {
        return res.status(400).json({
            msg: "All Fields Required",
        })
    }

    const existingUser = await userModel.findOne({ gmail });
    if (existingUser) 
    {
        return res.status(409).json({ msg: "Email already registered" });
    }
    try
    {
        const user = await userModel.findOne({gmail});
        if(!user)
        {
            return res.status(404).json({
                msg: "Gmail Not Registered",
            })
        }

        const comparePass = await bcrypt.compare(pass, user.pass);
        if(!comparePass)
        {
            return res.status(401).json({
                msg: "Password Is Incorrect, Please Retry",
            })
        }

        const token = JWT.sign(
            {
                id: user._id.toString(),
            },
            JWT_SECRET,
            {expiresIn : '1h'}
        );
        res.json({
            msg: "SignIn Successful",
            Token: token,
        })
    }
    catch(e)
    {
        console.error("SignIn Failed", e.message);
        res.status(500).json({ msg: "SignIn Failed" });
    }
});



app.post("/todo", auth, async function(req,res)
{
    const userId = req.userId;
    const task = req.body.task;
    const done = req.body.done;

    if (!task) {
        return res.status(400).json({ msg: "Task is required" });
    }

    try {
        await todoModel.create({
            userId,
            task,
            done,
        });
        res.json({ msg: "Todo Successfully Added" });
    } catch (e) {
        res.status(500).json({ msg: "Failed to add todo" });
    }
})

app.get("/todos",auth, async function(req, res) 
{
    const userId = req.userId;
    try {
        const todos = await todoModel.find({
            userId,
        })
        res.json({ todos });
    } catch (e) {
        res.status(500).json({ msg: "Failed to fetch todos" });
    }
});

app.listen(3000);