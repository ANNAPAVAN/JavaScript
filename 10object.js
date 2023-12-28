let username = {
    fname : 'pavan',
    lname : "anna",
    role : "student",
    loginid : "100"
}
// console.log(username)  //{ fname: 'pavan', lname: 'anna', role: 'student', loginid: '100' }

// console.log(username['fname'])
// console.log(username.fname)

//update 
username.fname = "nithin"
// console.log(username) 


// for in 
// ---------------------------------------------------
for(let x in username){
    // console.log(x) // will get keys
}

for(let x in username){
    // console.log(username[x]) // will get values
}



// --------------------------------------------------------------------------------------------------
const obj1 = {
    rocket:'agni',
    fuel :2,
    config : {
        name:'mars'
    }
}
obj1.fuel = 200 
obj1['year'] = 2023
// console.log(obj1)

//-------------------------------------------
const obj2 = new Object()
obj2.book = "wings of fire"
obj2.color = "blue"
obj2.year = 2022
// console.log(obj2)

// ----------------------------------------------
const powers = {
    fly : true,
    coordinate : Math.random()
}
const obj3 = Object.create(powers)
// console.log(obj3)   // {}
// console.log(obj3.fly)  // true
// console.log(obj3.coordinate)  // 0.1852703928800754
// console.log(Object.getPrototypeOf(obj3))  // { fly: true, coordinate: 0.4840817850194927 }

//------------------------------------
const obj4 = Object.create({})
// obj4.fname="pavan"
// obj4.lname="annna"
// console.log(obj4)  // { fname: 'pavan', lname: 'annna' }
Object.defineProperty(obj4,'book',{
    get: () => 'bluebook',
    enumerable: true  // if it is false we can loop the object
})
// console.log(obj4)   // {}
// console.log(obj4.book)   // bluebook

for(k in obj4){
    // console.log("value is : ",k)
}

// ---------------------------------------------------
const obj5 = {
    comics : "marvel",
    pen : '',
    printComic: function(){
        this.pen+='bluepen';  // this :-> simply refers to the properties inside our object
        console.log(this)
    },

    printaComic: () => {  //  'this' will not work  in arrow function ************************************************
        console.log(this)  // undefined
    }
}
console.log(obj5.printComic())
console.log(obj5.printaComic())
// console.log(obj5)



