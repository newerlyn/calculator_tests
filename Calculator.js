class Calculator {
    validateNumbers(...args) {
        if (!args.every(arg => typeof arg === 'number' && !isNaN(arg))) {
            throw new Error("Неверный ввод: все аргументы должны быть действительными числами.");
        }
    }

    add(a, b) {
        this.validateNumbers(a, b);
        return a + b;
    }

    subtract(a, b) {
        this.validateNumbers(a, b);
        return a - b;
    }

    multiply(a, b) {
        this.validateNumbers(a, b);
        return a * b;
    }

    divide(a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error("Деление на ноль не допускается!");
        }
        return a / b;
    }

    power(a, b) {
        this.validateNumbers(a, b);
        return Math.pow(a, b);
    }
}

module.exports = Calculator;
