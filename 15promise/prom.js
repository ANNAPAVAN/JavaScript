// promise 
/*
    pending 
    fulfilled
    rejected
*/

// Event Loop
// --------------------------------------------------------/
const userOne = () => {
    console.log('hello One')
}
const userTwo = () => {
    setTimeout(()=>{
        console.log('Hello I am inside')
    },2000)
    console.log('hello Two')
}
const userThree = () => {
    console.log('hello Three')
}
// userOne()
// userTwo()
// userThree()
/*
    hello One
    hello Two
    hello Three
    Hello I am inside
*/


// Promise
// ------------------------------------------------------
// EXAMPLE 1
const one = () => {
    return "I am one"
}
const two = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Credential Corret");
        },3000)
    })
}
const three = () => {
    return "I am three"
}

const callMe = () => {
    let valOne = one()
    console.log(valOne)

    let valTwo = two()
    console.log(valTwo)

    let valThree = three()
    console.log(valThree)
}
// callMe()
/*
I am one
Promise { <pending> }
I am three
*/

// EXAMPLE 2
/*
Certainly! 'async' and 'await' are features in JavaScript
 that allow you to work with asynchronous code in a more synchronous manner, 
 making it easier to write and understand asynchronous code.
*/
const one1 = () => {
    return "Login page"
}
const two2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Credential Corret");
        },3000)
    })
}
const three3 = () => {
    return "Home page"
}

const callMe0 = async () => {  
    let valOne = one1()
    console.log(valOne)

    let valTwo = await two2()   // wait for whom
    console.log(valTwo)

    let valThree = three3()
    console.log(valThree)
}
callMe0()
/*
Login page
Credential Corret
Home page
*/

//EXAMPLE3
// ----------------------------------------------------
/*
const makePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const nams = ["pavan","rahul","raam"]
        if(nams.length>0){
            resolve("FINE")
        }else{
            reject("NOT Fine")
        }
    },2000);
});
makePromise.then((result) => {
    console.log(result)
}).catch((result)=>{
    console.log(result)
})

*/
