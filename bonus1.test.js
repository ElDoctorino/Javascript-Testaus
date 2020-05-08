const numero = require('./bonus1');
test('Et antanut parametrejä joten epäonnistuit', () => {
    expect(() => {numero()}).toThrow('nolla parametriä annettu');
});
test ('Testaa perusnumero', () => {
    expect(numero('040-126-0700')).toBe(true);
});
test ('Testaa erikoisnumero', () => {
    expect(numero('040-126 0700')).toBe(true);
});
test ('Testaa vähemmän numeroita', () => {
    expect(numero('0410700')).toBe(false);
});
test ('Testaa onko false', () => {
    expect(numero("banaani")).toBe(false);
});