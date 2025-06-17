const JWT = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

async function user_auth(req,res,next)
{
    const token = req.headers.token;
    if(!token)
    {
        return res.status(400).json(
        {
            Alert: "Token Not Available"
        });
    }
    try
    {
        const decode = JWT.verify(token, JWT_USER_PASSWORD);

        if(!decode)
        {
            return res.status(401).json(
            {
                Alert: "Invalid Token"
            });
        }


        req.userId = decode.id,
        next();
    }
    catch(err)
    {
        console.log("Error Occured",err.message);
        return res.status(500).json(
        {
            msg: "Unable to fetch data from server"
        })
    }

}

module.exports = {
    user_auth
}