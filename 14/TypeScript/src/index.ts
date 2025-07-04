interface User
{
    firstName : string,
    lastName : string,
    age : number,
};

function isLegel(user : User) : void
{
    if(user.age > 18)
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
}

const user : User = {
    firstName : "Deepanshu",
    lastName : "Chauhan",
    age : 21,
};

isLegel(user);