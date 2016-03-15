var assert = require("assert");
var CRC6 = require('../lib/crc6');

describe('CRC6', function () {
    describe('check', function () {
        it('should return true', function () {
            assert.equal('06', CRC6('123456789'));
        });

        it('should return false', function () {
            assert.notEqual('12', CRC6('123456789'));
        });
    });
});