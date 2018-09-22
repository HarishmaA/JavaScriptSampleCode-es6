//Using loop
const factorial1 = (number) => {
    let result = 1;
    while (number > 1) {
        result *= number;
        number--;
    }
    return result;
};
console.log(factorial1(5));

//Using Recursion
const factorial2 = (number) => {
    if (number < 2)//Base case
    {
        return 1;
    }
    return number * factorial2(number - 1);
};
console.log(factorial2(6));

