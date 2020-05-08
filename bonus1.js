const regex = /[0-9 | -]/g;

function numero(a) {
    if (a === undefined || a === null) {
        throw new Error('nolla parametriä annettu');
    }
    var ab = a.toString();
    if (ab.match(/[0-9 | - {7}]/g)) {} else {
        return false;
    }
    if (ab.length < 10) {
        return false;
    } else {
        return true;
    }
}
module.exports = numero;