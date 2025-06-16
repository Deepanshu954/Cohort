const JWT = require("jsonwebtoken");
const JWT_SECRET = "Deepanshu95";
const express = require("express");
const app = express();

app.use(express.json());

function auth(req,res,next)
{
    const token = req.headers.token;

    try
    {
        const decode = JWT.verify(token, JWT_SECRET);
        if(decode)
        {
            req.userId = decode.id;
            next();
        }
    }
    catch(e)
    {
        console.log("Invalid Token" , e.message);
        return res.status(403).json({
            Alert: "Token Is Incorrect",
        })
    }
}

module.exports =
{
    auth,
    JWT_SECRET,
}