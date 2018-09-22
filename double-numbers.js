function doubleNumbers(numbers) {
    const doubled = [];
    const l = numbers.length;
    for (let i = 0; i < l; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
}

console.log(`Using normal function, the result is ${doubleNumbers([1, 2, 3])}`);

function doubleNumbersUsingMap(numbers) {
    return numbers.map(n => n * 2);
}
console.log(`Using map, the result is ${doubleNumbers([1, 2, 3])}`);