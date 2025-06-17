/* Map Function

const arr = [1,2,3,4,5];

function tranform(i)
{
    return 2*i;
}

const ans = arr.map(tranform);
console.log(ans);

*/

/*
Filter


const arr = [1,2,3,4,5,6,7];

function filterLogic(i)
{
    if(i % 2 == 0) return true;
    else false;
}

const newArr = arr.filter(filterLogic);
console.log(newArr);

*/

/*
Arrow Function
*/

function sum(a,b)
{
    const sum = a + b;
    console.log(sum);
}

sum(5,6);



const multiply = (a,b) =>
{
    const mul = a * b;
    console.log(mul);
}

multiply(5,6);