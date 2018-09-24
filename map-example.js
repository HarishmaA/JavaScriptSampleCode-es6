//find square of numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];

//for Version
var squareNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
   squareNumbers.push(numberArray[counter] * numberArray[counter])
}
console.log(squareNumbers);

//forEach Version
var squareNumbers1 = [];
numberArray.forEach(number => {
    squareNumbers1.push(number*number);
})
console.log(squareNumbers1);

//Map version
var squareNumbers2 = numberArray.map(number => number*number);
//es5 version
var squareNumbers2 = numberArray.map(function(number){
     return number*number;
});
console.log(squareNumbers2);