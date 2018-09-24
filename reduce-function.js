//sum of array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for version
var sum = 0;
for (var counter = 0; counter < numberArray.length; counter++) {
    sum += numberArray[counter]
}
console.log(sum);

//forEach Version
var sum1 = false;
numberArray.forEach(number => {
    sum1 += number;
})
console.log(sum1);

//Reduce version
var sum2 = numberArray.reduce(((acc, num) => acc + num), 0);

//es5 version
var sum2 = numberArray.reduce(function (acc, num) {
    acc += num;
    return acc;
}, 0);
console.log(sum2);