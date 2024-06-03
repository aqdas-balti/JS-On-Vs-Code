//Arrays
//console.log("Array Starts");
let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = ["Aqdas", "Anwar", "Furqan", "Irfan"];
let myArray3 = new Array(1, 2, 3, 4, 5);
console.log(myArray1); //[ 1, 2, 3, 4, 5 ]
console.log(myArray1[0]); //1
console.log(typeof [1, 2, 3, 4, 5]); //object
console.log(typeof myArray1); //object
console.log(myArray2); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan' ]
console.log(myArray2[2]); //Furqan
console.log(typeof myArray2); //object
console.log(myArray3); //[ 1, 2, 3, 4, 5 ]
console.log(myArray3[4]); //5
console.log(typeof Array); //Function
console.log(typeof myArray3); //object

//Array Methods
console.log("Methods Stars");
//Push and Pop Methods of Array
myArray1.push(6); //push add value at the end of an array
console.log(myArray1); //[ 1, 2, 3, 4, 5, 6 ]
myArray1.pop(6); //pop remove the value from the last of an array
console.log(myArray1); //[ 1, 2, 3, 4, 5 ]
myArray2.push("Zafran");
myArray2.pop(); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan' ]
console.log(myArray2); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan', 'Zafran' ]
myArray3.push(6);
myArray3.pop(); //[ 1, 2, 3, 4, 5]
console.log(myArray3); //[ 1, 2, 3, 4, 5, 6 ]

//Shift and un Shift Methods of Array
let myArray4 = [1, 2, 3, 4, 5];
myArray1.unshift(0); //unshift is used to add a value to the beginning point of an array
console.log(myArray4); //[ 0, 1, 2, 3, 4, 5 ]
myArray1.shift(); //Shift is used to remove the beginning value of an array
console.log(myArray4); //[ 1, 2, 3, 4, 5 ]

//Some Questioners Method in arrays are:
console.log(myArray4.includes(10)); //false //It declares boolean ans t/f
console.log(myArray4.indexOf(9)); //-1 declare if the value is not existing in array
console.log(myArray4); //[1, 2, 3, 4, 5];
console.log(myArray4.indexOf(4)); // (3)   index no 3 have value 4 is present

//join is used to convert the array into a string
let myArray5 = [1, 2, 3, 4, 5];
let newArray1 = myArray5.join();
console.log(newArray1); //1,2,3,4,5
console.log(typeof newArray1); //string
