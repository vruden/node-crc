/**
 * CRC-6-ITU
 *
 * width = 6
 * normal poly = 0x03
 * reversed poly = 0x30
 * init = 0x00
 * refIn = true
 * refOut = true
 * xorOut = 0x00
 * check = 0x06
 *
 * @param str
 * @returns {string}
 */
function crc6(str) {
    var crc = 0x00;
    for (var pos = 0; pos < str.length; pos++) {
        crc ^= str.charCodeAt(pos);
        for (var i = 8; i !== 0; i--) {
            if ((crc & 0x0001) !== 0) {
                crc >>= 1;
                crc ^= 0x30;
            } else
                crc >>= 1;
        }
    }

    return leftPad(crc.toString(10), 2);
}

function leftPad(number, width, padStr) {
    return Array(width - String(number).length + 1).join(padStr || '0') + number;
}

module.exports = crc6;