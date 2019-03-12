const Calculator = require("./calculator");
const assert = require('chai').assert;

describe('Calculator', function () {
    let calculator;
    
    beforeEach(function () {
        calculator = new Calculator();
    });

    it('Contains a property expenses that is initialized to an empty array', function () {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('Function add(data) – adds the passed in item (of any type) to the expenses.', function () {
        it('Add primitive', function () {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);

            assert.deepEqual(calculator.expenses, [5, 'text', 5.5, true]);
        });

        it('Add reference', function () {
            calculator.add({key: 'value'});
            calculator.add([1]);
            //calculator.add(function () {});

            assert.deepEqual(calculator.expenses, [ { key: 'value' }, [ 1 ]]);
            
        });
    });

    describe('Funciton devideNums', function () {
        it('standard 2', () => {
            calculator.add(100);
            calculator.add(2);

            assert.equal(calculator.divideNums(), 50);
        });

        it('standard 3', () => {
            calculator.add(100);
            calculator.add(2);
            calculator.add(5);

            assert.equal(calculator.divideNums(), 10);
        });

        it('no input', () => {
            assert.throw(()=> calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('no number input', () => {
            calculator.add('pesho');
            calculator.add({});
            calculator.add('daradas');

            assert.throw(()=> calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('division with floating point numbers', () => {
            calculator.add(10.5);
            calculator.add(2);

            assert.closeTo(calculator.divideNums(), 5.25, 0.01);
        });

        it('divide by zero', () => {
            calculator.add(100);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero')
        });
    });

    describe('Functin toString()', () => {
       it('standard', () => {
        calculator.add(10);
        calculator.add('Pesho');
        calculator.add(5);

        assert.equal(calculator.toString(), '10 -> Pesho -> 5');
       });

       it('empty array', () => {
           assert.equal(calculator.toString(), 'empty array');
       });

       it('one element', () => {
           calculator.add(1);
           assert.equal(calculator.toString(), '1');
       });
    });

    describe('Function orderBy()', () => {
        it('standard nums', () => {
            calculator.add(5);
            calculator.add(8);
            calculator.add(1);
            calculator.add(-3);

            assert.equal(calculator.orderBy(), '-3, 1, 5, 8');
        });

        it('mixed data with numbers', () => {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add('text');
            calculator.add(-3);
            
            assert.equal(calculator.orderBy(), '-3, 1,2,3, [object Object], text');
        });

        it('mixed data no numbers', () => {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add('text');
            
            assert.equal(calculator.orderBy(), '1,2,3, [object Object], text');
        });
    });
});