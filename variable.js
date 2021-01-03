// variable basics
// somefu(1,"abc") 42 * 3.14,   an array["re", "gd","sdds"]

var color = "red"  ;
var div = document.getElementById('home');

// document.getElementById('home').style.background = "black"
// document.getElementById('home').style.color = "white"

div.style.background = "skyblue";
div.style.color = "white";

// NAMING
// it could start with a-z A-Z _ $ 0-9

// Valid names
// var car = "toyota";
// var color = "blue";
// var _myVariable = "something";
// var $specialName = "hello";
// var a353 = 56;

// invalid names

// var 3colors  = "noor";
// var winning% = "rur";
// var person-jjm =  "jim" ;
// var @you = "aa";


// this names have already been given a function in javascript
// if else function continue switch break case
// catch debugger default delete do finally for in instanceof new
// return this throw try typeof var void while with

// var finally =  "hello"


// NULL AND UNDEFINED

// var myVar; // go to the console n type myVar
// // === is a strict equal to
// // will not change values if the close in value to eachother

// console.log(typeof myVar === "undefined")
// console.log(myVar === undefined)
// // window.alert(myVar)
// // undefined is something that doesnt have a value at null
// var x = null;

// if(x == null ){
//     console.log("if")
// }else{
//     console.log("Else")
// };


// SCOPE

// var world = "World"  // turns to a global variable
// if you have global variable with the same name one is gonna overwite
//  () the parenthesis re for arguement
// function sayHello(){
//     var hello = "Hello ";
//     console.log(hello + world);
// };

// sayHello();

// function sayHello(){
//     var hello = "Hello ";
//     function inner(){
//         var extra = "awesome codebase"
//         console.log(hello + world +" "+ extra)
//     };
//     inner();
// };

// sayHello()
// console.log("world oustside sayhello(): ", world)
// console.log("hello oustside sayhello(): ", hello) //it won't work cause hello
// is in a nested function


// SHADOWING

// var myColor = "blue";
// console.log("my color before myFunc(): " + myColor);

// function myFunc(){
//     // var myColor = "brown";
//     myColor = "brown" ;// when you call this one, you have changed the global var word to a new word
//     myNum = 21;
//     console.log("my color inside myFunc(): " + myColor);
// };
// myFunc();
// console.log("my color after myFunc(): " + myColor);
// // it will change to blue caux brown it completely seperate from the global one
// console.log("my numver after myFunc(): " + myNum);


// HOISTING

// function doSom(done){
//     // var color = "blue";
//     // var color = "blue", number, name="jim";  //multipart var declaration
//     // remember to separate by commas
//     // var number =5;
//     // choose to declare a var at the top of the function
//     if (done){
//         // var color = "red"; // it doesnt really declare a new var
//         color = "skyblue"
//         number = 10;
//         console.log("Color in if(){}", color, name )
//     }
//     console.log("Color after if(){}", color)
// }
// doSom(false)
// doSom(true)