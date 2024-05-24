//In this we can convert the one data type to another
let score = 60;
console.log("Actual Ans:", score); //60
console.log("Actual typeof 60:", typeof score); //number
console.log(
  "This is the actual typeof with another way of writing:",
  typeof score
); //number
//now below we convert the data types to another form, just check it out and study with investigation
let valinString = String(score); //This converts the number into string with this class String
console.log("This is converted from number to string:", typeof valinString); //string

console.log("Boolean Process Starts From Here Below:");
let check1 = true;
console.log("Actual Ans:", check1);
console.log("Actual typeof true:", typeof check1);
//now below we convert the data types to another form, just check it out and study with investigation
let valboolNumber = Number(check1); //Converted to number
console.log("Converted value:", valboolNumber);
console.log("Converted typeof value:", typeof valboolNumber); //true(1)and false(0) understood

console.log("Null Stars From Here Below");
let check2 = null;
console.log("Actual Ans:", check2); //null
console.log("Actual typeof null:", typeof check2); //object
//now below we convert the data types to another form, just check it out and study with investigation
let valnullNumber = Number(check2); //Converted to number
console.log("Converted val of null:", valnullNumber); //0
console.log("Converted val typeof null:", typeof valnullNumber); //number

console.log("Undefined Starts From Here Below:");
let check3 = undefined;
console.log("Actual Ans:", check3); //undefined
console.log("Actual typeof undefined:", typeof check2); //object
//now below we convert the data types to another form, just check it out and study with investigation
let valundefinedNumber = Number(check3); //Converted to number
console.log("Converted val of undefined:", valundefinedNumber); //NaN
console.log("Converted val typeof undefined:", typeof valundefinedNumber); //number
console.log("Boolean Starts");
let isLoggedin = 1;
console.log("Actual Ans is:", isLoggedin); //1
console.log("Actual typeof boolean is:", typeof isLoggedin); //number

let booleanval = Boolean(isLoggedin);
console.log("Converted Ans is:", booleanval); //true
console.log("Converted typeof Ans is:", typeof booleanval); //boolean
