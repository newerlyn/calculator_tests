const Calculator = require("./Calculator");
const calculator = new Calculator();

console.log("2 + 3 =", calculator.add(2, 3));
console.log("5 - 3 =", calculator.subtract(5, 3));
console.log("2 * 3 =", calculator.multiply(2, 3));
console.log("6 / 3 =", calculator.divide(6, 3));
console.log("2 ^ 3 =", calculator.power(2, 3));
