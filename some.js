
// function damm(){
//     var home = document.getElementById('home');
//     var input = document.getElementById('text_field').value;
//     var input2 = parseInt(document.getElementById('text_field').value);
//     var body = document.getElementById('body');
//     // var result = document.getElementsByClassName('result')
//     var result = document.getElementById('result')

    // switch(input){
    //     case "red":
    //         home.style.color = "white";
    //         body.style.background = "red"
    //         break;
    //     case "blue":
    //         home.style.color = "blue";
    //         body.style.background = "blue";
    //         break;
    //     case  "grey":
    //         home.style.color = "white";
    //         body.style.background = "grey";
    //         break;
    //     case  "black":
    //         home.style.color = "white";
    //         body.style.background = "black";
    //         break;
    //     default:
    //         home.style.color = "black";
    //         body.style.background = "orange";
    // }


    // switch statement have to be exact that value
    // if(input2 > 22){
    //     result.innerHTML = "you are older than 20";
    // }else if(input2 === 21){
    //     result.innerHTML = "you are 21";
    // }else{
    //     result.innerHTML = "you are not older than 20"
    // }
// }



// function fan(){
//     var input = document.getElementById('text_field').value;
//     var body = document.getElementById('body');
//     var home = document.getElementById('home');


//     if (input === "grey"){
//         body.style.background = "grey";
//         home.style.color = "red";
        
//     }else if(input === "red"){
//         body.style.background = "red";
//         home.style.color = "green";
//     }
//     else if(input === "blue"){
//         body.style.background = "blue";
//         home.style.color = "orange";
//     }
//     else if(input === "green"){
//         body.style.background = "green";
//         home.style.color = "yellow";
//     }
//     else if(input === "purple".toLowerCase()){
//         body.style.background = "purple";
//         home.style.color = "cyan";
//     }
//     else if(input === "yellow"){
//         body.style.background = "yellow";
//         home.style.color = "brown";
//     }
//     else{
//         body.style.background = "black";
//         home.style.color = "white";
//     }
// }


// FOR LOOPS

// for (var i = 0; i < 20; i++ )
//     {
//         console.log(i)
//         if (i ==16){
//             break;
//         }
//     }
// for (var i = 0; i < 20; i+= 2)

// function Life (aar, value){
//     for (var i = 0;i < aar.length; i++ ){
//         if(arr[i] == value){
//             // if any value in the index is equal to value, and value been 5, 
//             // there is 5 in the value if you look down
//             return true
//         }
//     }
//     return false
// }
// var arr = [1,2,3,4,5,6,7,"gerald", true]
// console.log(Life(arr, 5))
// console.log(Life(arr, "gerald"))

// function Life2(n){
//     for(var i = 0;i < n; i++){ // means this gonna run n times i.e squared 5*5
//         for(var j = 0; j < n; j++){ // means this gonna run n times
//             console.log("run")
//         }
//         console.log("run")
//     }
// }
// Life2(10)


// WHILE LOOP
// a loop that will run  while a condition is true
// var i = 0;
// while (i < 10){
//     console.log(i)
//     i++;
//     if(i == 6){
//         break;
//     }
//     console.log("STOP")
// };

// var at = ["gerald","ifeanyi", "chinedum"];
// var att = [];
// var i = 0;
// while (i < at.length){
//     console.log(i);
//     i++;
// };
// while (i <= 100){
//     att.push(i);
//     i++;
// };
// console.log(att);

// var command = false

// do something while command is false 
// do{
//     console.log("run!")
// }while(command)

// FOREACH
var at = ["gerald","ifeanyi", "chinedum"];
for(var i = 0; i < at.length; i++){
    console.log(at[i])
    // console.log(i)
    at[i] = 5
    console.log(at[i])
}
// console.log(at)
// for(let element of at){
//     console.log(element)
//     element = 5
//     console.log(element)
// }
// console.log(at)