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
