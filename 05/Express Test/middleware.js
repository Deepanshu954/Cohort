const express = require("express");
const app = express();


app.use(express.json( ));


function ageE(req,res,next)
{
    const age = req.query.age;
    console.log("Methord: " + req.method);
    console.log("URL: " +req.url);
    console.log("HostName: " +req.hostname);
    if(age >= 14) next();

    else
    {
        res.json({
            msg : "Go Home And Watch Pogo",
            msg1: "You are too young to enter this website",
        })
    }
}

app.get("/ride1",ageE, function(req,res)
{
    res.json({
        msg: "Ride 1 Successfull"
    });   
});

app.listen(3000);