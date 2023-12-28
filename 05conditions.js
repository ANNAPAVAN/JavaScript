// Conditions 


// if else 
// switch case 
// ternary 

// Rating mini app 
let rating =5 
if(rating==5){
    console.log("*****")
}else if(rating==4){
    console.log("****")
}else if(rating==3){
    console.log("***")
}else if(rating==2){
    console.log("**")
}else if(rating==1){
    console.log("*")
}else{
    console.log("I am else")
}

// switch case 

let user = "admin"

switch(user){
    case "admin":
        console.log("admin page")
        break 
    case "mentor":
        console.log('mentor page')
        break 
    default:
        console.log("User Page")
}

//ternary 
//  ?:
//  Condition?True:False

let rain = true ;

rain?console.log('It is Raining'):console.log('It is Not Raining')


