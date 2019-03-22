const sum = require('./sum');

test ('suorittaa yhteenlaskun 1+2, tulos 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('syötteet numeromaisia merkkijonoja "1"+"2", tulos 3', () => {
    expect(sum("1","2")).toBe(3);
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {sum("Minna","Jaakko")}).toThrow('Ei lukuja');
});

test('Vain yksi parametri annettu, palautetaan luku itse,', () => {
    expect(sum(4)).toBe(4);
});

test('Ei yhtään parametriä annettu, heitä poikkeus,', () => {
    expect(() => {sum()}).toThrow('nolla parametriä annettu');
});