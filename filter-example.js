//Filter even numbers
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for Version
var evenNumbers = [];
for (var counter = 0; counter < numberArray.length; counter++) {
    if (numberArray[counter] % 2 === 0) {
        evenNumbers.push(numberArray[counter])
    }
}
console.log(evenNumbers);

//forEach Version
var evenNumbers1 = [];
numberArray.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers1.push(number)
    }
})
console.log(evenNumbers1);

// es5 style
var evenNumbers2 = numberArray.filter(function (number) {
    return number % 2 === 0;
});

//filter version
var evenNumbers2 = numberArray.filter(number => number % 2 === 0);
console.log(evenNumbers2);
