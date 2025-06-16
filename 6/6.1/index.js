// https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fa

const express = require("express");
const app = express();

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.use(express.json());

app.post("/signIn", function(req,res)
{
    const username = req.body.username;
    const pass = req.body.pass;

    const user = users.find(user => user.username === username && user.pass === pass);

    if(user)
    {
        const token = generateToken();
        user.token = token;
        res.status(200).json({
            msg: "Sign In Successful",
            token: token,
        });
        console.log("Sign In Successfull");
    }
    else
    {
        res.status(403).send({
            msg: "Invalid Username or Password",
        })
    }
})

// Fix route path and prevent duplicate usernames

app.post("/signUp", (req,res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    // Only check for duplicate username, not username+password
    const userExist = users.find(user => user.username === username);

    if(userExist)
    {
        return res.status(409).json({
            msg: "Username already exists"
        });
    }

    users.push({
        username : username,
        pass: pass,
    })

    res.json({
        msg: "You Have Sign Up Successfully"
    })
})

app.get("/me", (req,res) => {
    let token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).json({ msg: "Authorization header missing" });
    }
    // Remove 'Bearer ' prefix if present
    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }
    const user = users.find(user => user.token === token);

    if(user)
    {
        res.json({
            username: user.username,
        })
    }
    else
    {
        res.status(403).json({
            msg: "Invalid Token",
        })
    }
})

app.listen(3000);