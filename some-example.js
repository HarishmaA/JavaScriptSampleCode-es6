// contains 5
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for Version
var hasFive = false;
for (var counter = 0; counter < numberArray.length; counter++) {
    if (numberArray[counter] === 5) {
        hasFive = true;
        break;
    }
}
console.log(hasFive);

//forEach Version
var hasFive1 = false;
numberArray.forEach(number => {
    if (number === 5) {
        hasFive1 = true;
    }
})
console.log(hasFive1);

//Some version
var hasFive2 = numberArray.some(number => number === 5);
//es5 version
var hasFive2 = numberArray.some(function (number) {
    return number === 5
});
console.log(hasFive2); // true
var hasEleven = numberArray.some(number => number === 11);
console.log(hasEleven); // false