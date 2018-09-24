
let arr = [2, 4, 6, 8, 9, 10, 12];
function isOdd(i) {
    return i % 2 !== 0;
}
console.log(arr.find(isOdd));//9
console.log(arr.findIndex(isOdd));//4
