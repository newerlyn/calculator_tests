const Calculator = require('../Calculator');
const { expect } = require('chai');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('Сложение:', () => {
        it('должен возвращать сумму двух чисел', () => {
            expect(calculator.add(2, 3)).to.equal(5);
        });

        it('должен обрабатывать отрицательные числа', () => {
            expect(calculator.add(-2, -3)).to.equal(-5);
        });

        it('должен обрабатывать ноль', () => {
            expect(calculator.add(0, 5)).to.equal(5);
        });
    });

    describe('Вычитание:', () => {
        it('должен возвращать разницу между двумя числами', () => {
            expect(calculator.subtract(5, 3)).to.equal(2);
        });

        it('должен обрабатывать отрицательные числа', () => {
            expect(calculator.subtract(-5, -3)).to.equal(-2);
        });
    });

    describe('Умножение:', () => {
        it('должно возвращать произведение двух чисел', () => {
            expect(calculator.multiply(2, 3)).to.equal(6);
        });

        it('должен обрабатывать умножение на ноль', () => {
            expect(calculator.multiply(5, 0)).to.equal(0);
        });
    });

    describe('Деление:', () => {
        it('должен возвращать частное от двух чисел', () => {
            expect(calculator.divide(6, 3)).to.equal(2);
        });

        it('должно выдавать ошибку при делении на ноль', () => {
            expect(() => calculator.divide(5, 0)).to.throw("Деление на ноль не допускается!");
        });
    });

    describe('Возведение в степень:', () => {
        it('должно возвращать первое число, возведенное в степень второго числа', () => {
            expect(calculator.power(2, 3)).to.equal(8);
        });

        it('должен обрабатывать нулевой показатель степени', () => {
            expect(calculator.power(5, 0)).to.equal(1);
        });
    });

});
