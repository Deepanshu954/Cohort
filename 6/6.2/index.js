const express = require("express");
const cors = require("cors");
const JWT = require("jsonwebtoken");

const app = express();
app.use(cors());
const JWT_SECRET = "Deepanshu95"; // Security Key

const users = []; //Database

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/signUp", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    const user = users.find(user => user.username === username);
    if (user) {
        return res.status(409).json({
            msg: "User Already Exists",
        });
    } else {
        users.push({ username, pass });
        res.json({
            msg: "User Created Successfully",
        });
    }
});

app.post("/signIn", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    const user = users.find(user => user.username === username && user.pass === pass);
    if (user) {
        const token = JWT.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({
            Username: user.username,
            Token: token
        });
    } else {
        return res.status(403).json({ msg: "Username Or Password Is Incorrect" });
    }
});

app.get("/me", (req, res) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "Authorization header missing" });
    }
    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }
    try {
        const decode = JWT.verify(token, JWT_SECRET);
        return res.json({
            Username: decode.username,
        });
    } catch (err) {
        return res.status(403).json({ msg: "Token is Incorrect" });
    }
});

app.get("/todo", (req, res) => {
    res.sendFile(__dirname + "/boilerplate/index.html");
});

app.listen(3000);