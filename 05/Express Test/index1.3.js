const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Sum using query parameters: /sum?num1=5&num2=3
app.get("/sum", function(req, res) {

    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    res.json({
        ans: num1 + num2
    });
});

// Subtract using route parameters: /subtract/10/4
app.get("/subtract/:num1/:num2", function(req, res) {

    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.json({
        ans: num1 - num2
    });
});

// Multiply using POST body: { "num1": 6, "num2": 7 }
app.post("/multiply", function(req, res) {

    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    res.json({
        ans: num1 * num2
    });
});

// Divide using headers: x-num1: 20, x-num2: 4
app.get("/divide", function(req, res) {

    const num1 = parseInt(req.headers["x-num1"]);
    const num2 = parseInt(req.headers["x-num2"]);

    res.json({
        ans: num1 / num2
    });
});

app.listen(3000);