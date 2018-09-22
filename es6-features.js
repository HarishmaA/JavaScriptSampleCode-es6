//arrow functions
const add1 = (x, y) => {
    return x * y;
};
console.log(add1(2, 3));

const product = (x, y) => x * y;
console.log(product(4, 5));

const identity = (x) => x;
console.log(identity(3));


//Spread operator
const array = (...elements) => {
    return elements;
}
console.log(array(1, 2, 3, 4, 5));//[1,2,3,4,5]

const log = (...args) => {
    console.log(args);//[ 'hello', 'hi', 'why' ]
    console.log(...args);//hello hi why
}
log('hello', 'hi', 'why');


//default parameter values
const greet = (name, greeting = 'Hi') => {
    console.log(greeting, name);
};
greet('Harishma', 'Hello');
greet('Harishma');


//class
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100