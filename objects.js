// an object is a datatype that associates keys and values
// much like how array stores values by index
// key on the left hand side and value on the right hand side

// var Gerald = {
//     "name":"Gerald",
//     "age": 21,
//     "skills":["python", "JavaScript", "BootStrap"]
// }
// var Gerald= {
//     name:"Gerald",
//     age: 21,
//     skills:["python", "JavaScript", "BootStrap"],
//     "favourite food": "spaghetti"
// }
// Gerald.skills[3] = "css"
// console.log(Gerald.skills)
// console.log(Gerald)
// console.log(Gerald['favourite food']) //this is the only way


//METHOD

// var Gerald= {
//         name:"Gerald",
//         age: 21,
//         skills:["python", "JavaScript", "BootStrap"],
//         "favourite food": "spaghetti",
//         greet: function(){
//             console.log('hey you a' , Gerald.name)
//             console.log('hey you a' , this.name)
//         }
//     }
   
//console is an object while log is a function
// console.log(Gerald)
// Gerald.greet()


// var Ifeanyi= {
//     name:"brecker",
//     age: 21,
//     skills:["python", "JavaScript", "BootStrap"],
//     "favourite food": "spaghetti",
//     greet: function(person){
//         // console.log('hey you a' , person.name)
//         // using the this object 
//         console.log('hey you am' , person.name)
//     }
// }
// Ifeanyi.greet(Ifeanyi) // it will work but its not ideal

var Ifeanyi= {
    name:"ifeanyi",
    age: 21,
    skills:["python", "JavaScript", "BootStrap"],
    "favourite food": "spaghetti",
    greet: function(){
        // using the this object 
        console.log('hey you am' , this.name)
    }
}
var brecker = {
    name: "brecker Jnr",
    greet: Ifeanyi.greet
}

var chinedum = {
    name:"sugar man",
    age: 21,
    skills:["python", "JavaScript", "BootStrap"],
    "favourite food": "spaghetti",
    greet: function(name,mood){
        name = name || "Greatest",
        mood = mood || "great"
        console.log('Hello ' + name + " I am "+ this.name + " i am in a "+ mood+ " mood")
    }
}

// using this object
Ifeanyi.greet() 
brecker.greet()

//CALL AND APPLY



var BreckerGreet = brecker.greet;
BreckerGreet.call(Ifeanyi)
BreckerGreet.call({name:"mmesoma"})

brecker.greet.apply(Ifeanyi)
chinedum.greet()
var chinedumGreet = chinedum.greet
chinedumGreet.call({name: "chinedum"}, "man", "angry")
// apply first takes the context object
chinedum.greet.apply(chinedum, ["uncle", "sad"])
chinedum.greet.apply(chinedum, ["", "Happy"])

// function thisName(){
//     console.log(this)
// }
// thisName()