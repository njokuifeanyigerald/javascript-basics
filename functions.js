// ARGUEMENT

// function sayHello(name, greeting){
//     //if greeting is undefined..the if statement is to pass it
//     //that is if greeting dont have a given value in the function call
//     if(typeof greeting === "undefined"){
//         greeting = "good day"
//     }
//     console.log("hello Africa", name, greeting)
//     // console.log("hello Africa", name + " " + greeting)

// };
// sayHello("Gerald", "good morning");
// sayHello("good morning");  //a function call


// RETURN VALUES

// function sayHello(name, greeting){
//     if(typeof name === "undefined"){
//         return 0;
//     }
//     if(typeof greeting === "undefined"){
//         greeting = "good day"
//     }
//     console.log("hello Africa", name, greeting)
//     return name.length ;
//     console.log("end")  //the code wont work caux of the return statement

// };
// console.log(sayHello("Gerald", "good morning"));
// sayHello("good morning");
// console.log(sayHello())


// SCOPE  is a namespace for our variable

// var color = "green";
// var num = 20;
// function showColor(){
//     var color = 'yellow' ; // it will shadow the global one
//     // color = "yellow"  //it will totally overwrite the green in any global scope n confusing to debug
//     // var shape = "square"
//     shape = "square";
//     console.log('show color', color);
//     console.log('show num', num);
//     console.log('show shape', shape);

// };
// showColor();
// console.log('Global color', color);
// console.log('Global num', num);
// console.log('Global shape', shape) ; //javascript will assign it as a global var since it didnt see var
                                    //  before startng it, worst practice



// ANNOYMOUS FUNCTIONS

//storing functions inside a variable
// var myFunc = function (){
//     console.log("a func")
    // undeclareVariale;  // its to show the link of the functions and how to debug it
// myFunc()

// var callTwice = function(targetFunction){
//     targetFunction();
//     targetFunction();
// }

// callTwice(myFunc)
// callTwice(function (){
//     console.log("hello life")
//     undeclareVariale;
// });

// callTwice(function Hello(){
//     console.log("hello life")
    // undeclareVariale;
// });


//part of the browser code 
// DOM  = document Object model 
//  for the forms
//document is part of javascript DOM not language feature
// var button = document.getElementById("action")
// var input = document.getElementById("text_field")

// button.onclick = function(){
//     console.log('heyy')
// };  //annoymous function
// button.onclick = function(){
//     console.log('yellow')
// };   //it can only be called once i.e onclick

// button.addEventListener('click', function(){
//     console.log("hello")
// })

// button.addEventListener('click', function(){
//     console.log("hello Africa")
//     input.setAttribute('value', 'like damm like damm damm damm')
// })