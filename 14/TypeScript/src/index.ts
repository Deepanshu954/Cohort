function greet(user : {
    name : string,
    age : number
})
{
    console.log("Nice to meet you, "+ user.name);
    console.log(`It's been ${user.age} since i know you`);
};

let user = {
    name : "Deepanshu",
    age : 21,
};

greet(user);