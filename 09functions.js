// Function 
// *--------------------------------------

function sum1(){  // definition of function
    let num1 = 20;
    let num2 = 25;
    console.log("Addition ",(num1+num2))
}
// sum1()  // call of function 


function sum2(num1,num2){
  
    console.log("Addition ",(num1+num2))
}
// sum2(20,20)


// Function with return type 
// ------------------------------------------

function sum3(num1 , num2)
{
    let s = num1+num2;
    return s;
}
// console.log(sum3(10,12))
let add = sum3(100,200)
// console.log(add)


//String 
function url(url,domain)
{
    let con = 'https://';
    let result = con+url+domain;
    return result;
}
let res = url("annapavan",".me")
// console.log(res)


// Variable number of parameters
// ---------------------------------------------------------
function sum4(array){
    let sum = 0
    for(let i=0;i<array.length;i++)
    {
        sum = sum + array[i];
    }
    return sum;
}
let arr = [1,2,3,4,5,6,7,8,9,10,100]
let ressum = sum4(arr)
// console.log(ressum)

// -----------------------------------------------------------------------------------------------
function pavan(){
    // bydefault pavan() function will create a memory for arguments
    let sum = 0 
    for(let i=0;i<arguments.length;i++)
    {
        sum = sum + arguments[i]
    }
    return sum
}
// console.log(pavan(1,2,3,4,5,6,7,8,9,1000))
// ----------------------------------------------------------------------------------------------------------

let sayHello = function (){
    return "hello";
}
// console.log(sayHello)


// Arrow Functions
// --------------------------------------------------
let fun1 = () => {
    console.log("I am God")
}
// fun1()

let fun2 = (num1,num2) => {
    return num1+num2;
}
// console.log(fun2(100,200))













