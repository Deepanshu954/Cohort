// Replacing tokens by JWT

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const users = [];

const JWT_SECRET = "supersecret123"; // Replace with env var in production

app.use(express.json());

app.post("/signUp", (req, res) => {
    const { username, pass } = req.body;
    const userExist = users.find(user => user.username === username);

    if (userExist) {
        return res.status(409).json({ msg: "Username already exists" });
    }

    users.push({ username, pass });

    res.json({ msg: "You Have Signed Up Successfully" });
});

app.post("/signIn", (req, res) => {
    const { username, pass } = req.body;
    const user = users.find(user => user.username === username && user.pass === pass);

    if (user) {
        const token1 = jwt.sign({username}, JWT_SECRET, {expiresIn:'1h'});

        res.status(200).json({
            msg: "You have Signed In Successfully",
            token: token,
        });
    } else {
        res.status(403).json({ msg: "Invalid Username or Password" });
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
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ username: decoded.username });
    } catch (err) {
        res.status(403).json({ msg: "Invalid or Expired Token" });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});