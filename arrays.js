// arrays allows us to store a list of values into a single value
// it represent a list of objects

// CREATING ARRAY
// var a = ['something', 'about', 'life'];
// console.log(a.length);
// console.log(a);

// var b = ['a string', 3, true, false,['"Dsd',42,5,"sdsa"] ,'fusk', function(a,b){return a + b;}];
// console.log(b);
// console.log(b.length);

// var c = new Array(30);  // new Array is useful when there is a length to it like new Array(b,30)


// SETTING AND GETTING
// var fg = ['a life', 25, true,['"Dsd',42,5,"NDN"] ,'LOVE', function(a){return a + 2;}];
// console.log(fg)
// var word= fg[0]
// var word2= fg[4]
// var word3= fg[5]
// console.log(word3(10))

// //changing the value
// fg[1] = 20
// var change = fg[1]
// console.log(change)

// fg[fg.length] = "ajjs" //it will always add to the end of the array


//METHOD PART 1

// var fg = [23,4,65];
// console.log(fg.toString())

// fg.push(60)  //appends a new element to an array and also returns the length of th array
// console.log(fg.toString())

// var va = fg.pop()  //Removes the last element from an array and returns it.
// console.log(fg.toString())

// var va2 = fg.pop() 
// console.log(va2.toString())


// fg.unshift(123)  //Inserts new elements at the start of an array.
// console.log(fg.toString())
// fg.unshift(67)  //Inserts new elements at the start of an array.
// console.log(fg.toString())


// fg.shift()  //Removes the first element from an array and returns it.
// console.log(fg.toString())
// fg.unshift(1) ; //Inserts new elements at the start of an array.
// console.log(fg.toString());
// fg.unshift(390);  //Inserts new elements at the start of an array.
// console.log(fg.toString());


// Function used to determine the order of the elements. 
// It is expected to return a negative value if first argument is less than second argument, 
// zero if they're equal and a positive value otherwise.
// If omitted, the elements are sorted in ascending,ASCII character order.
// it sorts them as if they are strings

// fg.sort();
// console.log(fg.toString());

// // compare function to determne the order
// // if 23 is a and b is 4, if they shuld substrate and the answer is negative digit, then 23 becomes a if not
// // then 23 is b if it returns a postive answer
// //in that order
// fg.sort(function (a,b) {
//     return a -b;
//     // return Math.random() - 0.5; // to shuffle an array
// }) ;
// console.log(fg.toString());

// fg.reverse() //Reverses the elements in an Array.
// console.log(fg.toString())


// var x = [1,2,3]
// var y = [4,5,6]

//concat === Additional items to add to the end of array1.
// Combines two or more arrays.
// var a = x.concat(y)
// var z = a.concat(7,8,9,10,11,12,13,14,15,16,[17,18,19])

// console.log(x)
// console.log(y)
// console.log(a)
// console.log(z)

// var x = [0,1,2,3,4,5,6]

// var re = x.slice(1,4)
// console.log(re)


// var words = ['these', 'are', 'some','words']
// var result = words.join(' ') //makes semse when there is a string, if not just toString() method
// console.log(result)

// var array = [1,2,3,4,5,6,7,8,9]
// console.log(array.toString())

// delete array[4]
// console.log(array.toString())


//Removes elements from an array and, if necessary, inserts new elements in their place,
//  returning the deleted elements.
// array.splice(2,1)  //start at index 2 and remove only 1 value
// console.log(array.toString())

// array.splice(2,1, "damm")  //start at index 2 and remove only 1 value and insert a character in index 2
// console.log(array.toString())


