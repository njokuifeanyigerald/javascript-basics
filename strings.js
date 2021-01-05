// strings is all about how wee represent text in javascript
// it might be a word or sentence

// var name = "gerald"
// console.log(name)

// var name2 = "ifeanyi"
// console.log(name2)

// // var statement = 'this is isn't a string  ';
// var statement = "this is isn't a string ";
// console.log(statement);

// var statement2 = 'he said "this is awesome" ';
// console.log(statement2);

// var statement3 = 'he said "this is jane\'s string"';
// console.log(statement3);

// ESCAPE CHARACTERS
// var path = "C:\\fol\\Text.html"
// console.log(path)

// var multiline = "this is line 1\n this is line 2\n this is line 3"
// console.log(multiline)


// // CONCATENATE

// var a=  "hello "
// var b = "world"

// var c = a + b
// var multiline2 = "this is line 1\n" +"this is line 2\n" +"this is line 3"

// console.log(c + "!!!!")
// console.log(multiline2)

// METHODS 1

// var a=  "hello "
// var b = "world"

// var c = a + b
// var length = c.length;
// console.log(length)

// var index = c.indexOf("hello")  //the number which whole started = 0
// var index = c.indexOf("world")  //the number which whole started = 6
// console.log(index)
// if (c.indexOf("w") !== -1){
//     console.log("W exists in string")
// }
// else{
//     console.log("Na lie")
// }
// console.log(c.charAt(10))  // which character is located ata certain point

// METHOD 2
// var world = c.substr(start, length) //example of how its gonna be..it can start and length for amount of words to display
// var world = c.substr(3, 10)
// console.log(world)
// console.log(world.toUpperCase())

// var g = world.toUpperCase()
// console.log(g)


// var first = "Hello"
// var second = "hello"

// if(first.toLowerCase() === second){
//     console.log("equal")
// }else{
//     console.log("different")
// }

// function compare(a,b){
//     console.log(a + " < " +b, a < b)
// }
// // ASCII table for decimal value of each letter
// compare('A', 'a')