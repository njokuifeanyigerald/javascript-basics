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

// var Ifeanyi= {
//     name:"ifeanyi",
//     age: 21,
//     skills:["python", "JavaScript", "BootStrap"],
//     "favourite food": "spaghetti",
//     greet: function(){
//         // using the this object 
//         console.log('hey you am' , this.name)
//     }
// }
// var brecker = {
//     name: "brecker Jnr",
//     greet: Ifeanyi.greet
// }

// var chinedum = {
//     name:"sugar man",
//     age: 21,
//     skills:["python", "JavaScript", "BootStrap"],
//     "favourite food": "spaghetti",
//     greet: function(name,mood){
//         name = name || "Greatest",
//         mood = mood || "great"
//         console.log('Hello ' + name + " I am "+ this.name + " i am in a "+ mood+ " mood")
//     }
// }

// // using this object
// Ifeanyi.greet() 
// brecker.greet()

//CALL AND APPLY



// var BreckerGreet = brecker.greet;
// BreckerGreet.call(Ifeanyi)
// BreckerGreet.call({name:"mmesoma"})

// brecker.greet.apply(Ifeanyi)
// chinedum.greet()
// var chinedumGreet = chinedum.greet
// chinedumGreet.call({name: "chinedum"}, "man", "angry")
// // apply first takes the context object
// chinedum.greet.apply(chinedum, ["uncle", "sad"])
// chinedum.greet.apply(chinedum, ["", "Happy"])
// //another way
// var args = ['florence', 'lovly']
// chinedum.greet.apply(chinedum, args)

// function thisName(){
//     console.log(this)
// }
// thisName()



// PROTOTYPES PART1

var personProtoype = {
    name: "annoymous",
    greet: function(name,mood){
        name = name || "Greatest",
        mood = mood || "great"
        console.log('Hello ' + name + 
            " I am "+ this.name + " i am in a " 
            + mood+ " mood")
    },

    species: "Homo Sapien"

}
// gerald = new personProtoype //wont work not a constructor
// gerald.name = "gerald"  //wont work not a constructor
// gerald.greet() //wont work not a constructor

function Person(name){
    this.name = name;
}

gerald = new Person("Gerald");  //go to console n type Gerald

Person.prototype = personProtoype;
gerald = new Person("Gerald");
nedu = new Person('chinedum')
// nedu.species = "human"  // it will change wat nedu object looks like
// console.log(gerald.__proto__.name)

Person.prototype.species = "Human"  // it will change the specie in personProtoype
Person.prototype.color = "skyblue"




// PROTOTYPES PART2
