// Exercise 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (let index = 0; index < myArray.length; index++) {
        console.log(`${greetText} ${myArray[index]}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2

const capitalize = (str) => {
    
    const [firstChar, ...rest] = str;
    const capitalized = firstChar.toUpperCase() + rest.join('').toLowerCase();
    return capitalized;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

// Exercise 4

var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((value) => value < 20);

console.log(filterLessThan20);

// Exercise 5

var array = [1, 2, 3, 4];
const initialValue = 0;
const initialValueProduct = 1;
const calculateSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);
const calculateProduct = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValueProduct);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());