//Numbers objects and its different methods
const score = 400;
console.log(score);
console.log(typeof score); //number

//Here we are using the objects of the number for using the different properties of a number
const newScore = new Number(500); //This is the main syntex of a Number Object
console.log(newScore); //[Number: 500]
console.log(__proto__); //{}
console.log(typeof newScore); //object

//convert this number into a string datatype
console.log(newScore.toString()); //500
console.log(newScore.toString().length); //3
console.log(newScore.toFixed(2)); //500.00

const otherScore1 = 24.57028;
console.log(otherScore1.toPrecision(4)); //24.57
console.log(otherScore1.toPrecision(3)); //24.6
console.log(otherScore1.toPrecision(2)); //25

const otherScore2 = 244.57028;
console.log(otherScore2.toPrecision(2)); //2.4e+2(2.4 and other in exponential form of e power 2)
console.log(otherScore2.toPrecision(1)); //2e+2
console.log(otherScore2.toPrecision(3)); //245
console.log(otherScore2.toPrecision(4)); //244.6

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000(Its help us to read a number in better readable form)
