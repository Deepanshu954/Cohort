const express = require('express')

const app = express()


function testing()
{
    return "Jai Shree Ram";
}

app.get('/', (req, res) => {
  res.send(testing())
})

app.listen(3000)