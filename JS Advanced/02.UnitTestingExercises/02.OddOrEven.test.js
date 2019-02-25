const isOddOrEven = require('./02.OddOrEven');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('isOddOrEven', function () {
    it('should return even', function () {
        let result = isOddOrEven('test');

        assert.equal(result, 'even');
    });

    it('should return odd', function () {
        let result = isOddOrEven('tests');

        assert.equal(result, 'odd');
    });

    it('should return undefined', function () {
        let result = isOddOrEven(2);

        assert.isUndefined(result);
    });
});