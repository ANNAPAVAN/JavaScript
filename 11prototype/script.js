let myHeros = ["prabhas","ntr"]
let dcHeros = ["batman","catman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.pavan = function(){  // inject in :-> Browser->console->myHeros ->Array(0) ->Object
    console.log("Pavan is present in all Objects")
}


Array.prototype.heyPavan = function(){        // inject in :-> Browser->console->myHeros ->Array(0)
    console.log(`pavan says Hello all!!!`)
}

myHeros.pavan()  //  we can access pavan() function with myHeros also 
                 // because myHeros also an object , as we declared pavan() as prototype
                 // who ever inherits object their pavan() is available as it is declared as prototype
                 // we can see pavan in prototype in browser console, when we type myHeros


// Inheritance 
const User = {
    name : "pavan",
    email : "a@gmail.com"
}
const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable: false 
}

const TSAssistant = {
    makeAssistant : "js assistant",
    funnTime :true,
    __proto__ : TeachingSupport  // all properties of TeachingSupport will be available in TSAssistant  // go and check in browser->console->TSAssistant
}

Teacher.__proto__ = User  // inherit properties from User  //// go and check in browser->console->Teacher.email

//Modern Syntax

 Object.setPrototypeOf(TeachingSupport , Teacher) //TeachingSupport aquired all the properties of Teacher  , ie now TeachingSupport also able to makeVideos




 // Goal is to get truelength of String
// -------------------------------------------------
 String.prototype.truelength = function(){ // ********* add the functionality purely in String **********
    console.log(`true length is :${this.trim().length}`);
 }
 let myname="pavan      ";

// in browser->console
// -----------------------------
//  myname
// 'pavan      '
// myname.length
// 11
// myname.truelength
// ƒ (){
//     console.log(`true length is :${this.trim().length}`);
//  }
// myname.truelength()
// true length is :5