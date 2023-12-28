// HOF :-> Higher Order Function 
// CALLBACK
// function is calling a function 


// EX. program 
// -------------------------------------------
const callback1 = (n) => {
    return n**2;
}
// console.log(callback1(20))

function cube(callback1 , n){
    return callback1(n)*n;
}

// console.log(cube(callback1,4))

// For Each 
// forEach() is HOF , " () => {} " inside it as Callback
// -------------------------------------------------------
const arr = ["apple","banana","grape","carrot"]
arr.forEach((fruit)=>{
    // console.log(fruit)
})

// arr.forEach(myfunc)
// function myfunc(val){
//     console.log(val)
// }


// SetTimeOut
// --------------------------------------------------------
// setTimeout(()=>{console.log("Hello pavan")}, 3000)  // after 3 seconds it is being displayed

// function pavan(){
//     console.log("Hello ANNA PAVAN")
// }
// setTimeout(pavan, 3000)


// SetInterval 
// ---------------------------------------------------------
// setInterval(()=>{},)
// setInterval(()=>{console.log("HII")},1000)

/*
Callbacks 
----------------
forEach 
map 
filter 
reduce 
find 
every 
some 
sort 
.............
*/


// map
// -----------------------------------------
const numbers = [1,2,3,4,5,6,7,8,9]
const sq_nums = numbers.map((n)=>n*n)
// console.log(sq_nums)


// filter 
// -----------------------------------------------
const count = ["India","Pak","England","Us","Germanay","Japan","Sri Lanka","Canada","Finland"]
const filtered = count.filter((val)=> val.includes("land"))
// console.log(filtered)


// reduce 
// -------------------------------------------------
const number = [1,2,3,4,5,6,7]
const sum = number.reduce((acc,curr)=> acc+curr, 0) // acc :-> collect everything , curr :-> going to every position , 0:-> initial value of sum
// console.log(sum)


//sort 
// -------------------------------------------------
const names = ["pavan","nithin","rana","bhagath","ramu","ronald"]
// console.log(names.sort())
// console.log(names.sort().reverse())
// console.log(names.reverse())


/// Destructuring and Spread and Rest
// -------------------------------------------------------
const sci = [2.75,2.36,13 ,2.5]
let [a,b,c,d] = sci 
// console.log(a,b,c,d)

const arr1 = [1,2,3]
let [var1, var2] = arr1
// console.log(var1,var2)

const arr2 = [1,2,3,4,5,6,7,8,9]
let [v1,v2,...rest] = arr2
// console.log(v1,v2,rest)


// Spread 
//--------------------------------------------------
function sumone(x,y){   
    return x+y ;
}
let vari = [5,7,10];
// console.log(sumone(...vari)) // 12 // spread
let vari2 = [1]
// console.log(sumone(...vari2)); // NaN

// Rest
// -----------------------------------------------------
function summ(...args){
    let s=0;
    for(const x of args){
        s=s+x
    }
    return s;
}
// console.log(summ(1,2,3,4,5,6,7,8,9,10))


// Try and Catch 
// --------------------------------------------------

//Ex1
// ----------------
// try{
//     console.log(pavan)
// }catch(err){
//     console.log(err.name)  //ReferenceError
// }

// Ex2
// ------------------
// try{
//     fname="pavan"
//     console.log(fname+" "+lname)
// }catch(err){
//     console.log(err.name," Variable name Missing")  //ReferenceError  Variable name Missing
// }

// Ex3
// --------------------
try{

}catch(err){

}finally{
    // console.log("I will always Run")
}

// Types of Erros in Js
/*
    ReferenceError 
    SyntaxError
    TypeError
*/
