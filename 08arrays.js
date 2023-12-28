// Array in Depth

let names = ["pavan","nithin","ramu"]
// console.log(names)

// console.log(names.length)

// console.log(names[0])

// console.log(names[names.length-1])

// names[0] = "annapavan"
// console.log(names)



// let names = new Array('name 1',"name 2")
// console.log(names)


// push
// -------------------------------
names.push("mango")
// console.log(names)


// slice 
// ----------------------------------
// console.log(names.slice(1,3))  // ending index is exclusive


// splice    // to insert value inside array
// ------------------------------------
let fruit = ["apple","banana","carrot","grape"]
fruit.splice(2,1,"mango","pine") // 2 -> starting inserting from this index , 1 -> from index 2 how many has to be deleted / replaced
// console.log(fruit)  //['apple', 'banana', 'mango', 'pine', 'grape' ]


// concatination
// -------------------------------------------
let a1 = [1,2,3]
let a2 = [4,5,6,10]
// console.log(a1.concat(a2))

let a3 = [7,8,9]
// console.log(a1.concat(a2,a3))


// fill
// -------------------------------------
let a4 = [1,2,3,4,5,6,7,8,9]
a4.fill("pavan",2,4)  // from index 2 to 4(exclusive) values are filled 
// console.log(a4)


// includes  // checks wheter it contains or not
// ----------------------------------------
let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.includes(7,6)) ///true // :-> value , start index
// console.log(num.includes(7,2)) //true
// console.log(num.includes(7,8)) //false


// indexOf()
// -----------------------------------------
let numbers = [10,20,30,40,50,60,70,50]
// console.log(numbers.indexOf(50)) // 4
// console.log(numbers.indexOf(12)) // -1


// isArray()
// --------------------------------------------
let numb = [1,2,3,"pavan",4,5,6]
let numb1 = "pavananna"
// console.log(Array.isArray(numb))  //true
// console.log(Array.isArray(numb1))  //false


// join
// -----------------------------------------------
let arr1 = [1,2,3,4]
// console.log(arr1.join(' pavan ')) // 1 pavan 2 pavan 3 pavan 4
// console.log(arr1.join(' - '))  // 1 - 2 - 3 - 4
// console.log(arr1.join(' ... '))  // 1 ... 2 ... 3 ... 4
let arr2 = arr1.join(' join ')
// console.log(arr2) // 1 join 2 join 3 join 4


// lastIndexOf()
//-----------------------------------------------
let num1 = [10,2,3,10,2,2]
// console.log(num1.lastIndexOf(10)) //3


// map 
// --------------------------------------------
let maths = [1,4,9,16,25]
// console.log(maths.map(Math.sqrt))  // [ 1, 2, 3, 4, 5 ]


// pop
// ----------------------------------------
let num2 = [10,20,30,40,50]
// console.log(num2.pop())
// console.log(num2)


// reverse
// --------------------------------------------
let num3 = [10,20,30,40,50]
// console.log(num3.reverse())


// shift 
// ---------------------------------------------
let num4 = [10,20,30,40,50]
// console.log(num4.shift())  // pick the first item and remove it
// console.log(num4)


// sort
// ------------------------------------------------
let namess = ["pavan","anna","rakesh","nithin"]
// console.log(namess.sort())
// console.log(namess.reverse(namess.sort()))


// unshift     // adding from starting
// -----------------------------------------
let veg = ["tomato","brinjal","mirchi","cucumber"]
veg.unshift("new veg","another veg")
// console.log(veg)


// converting to array 
// ------------------------------------------
let name = "pavan"
let array1 = name.split('')
// console.log(array1)  // [ 'p', 'a', 'v', 'a', 'n' ]


// for of 
// ----------------------------------------------------
// -----------------------------------------------------
let ap = ["banana","mango","apple"]
let upperFruit =[]
for(const f1 of ap){
    upperFruit.push(f1.toUpperCase())
}
// console.log(upperFruit)  // [ 'BANANA', 'MANGO', 'APPLE' ]


// break and continue
// ------------------------------------------
// for(let i=0;i<10;i++)
// {
//     if(i==6)
//     {
//         break;
//     }
//     console.log(i)
// }

// for(let i=0;i<10;i++)
// {
//     if(i==6)
//     {
//         continue;
//     }
//     console.log(i)
// }






