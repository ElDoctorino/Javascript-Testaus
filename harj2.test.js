const osamaara = require('./harj2');

test('Parametreja ei ole annettu', () => {
    expect(() => {
        osamaara()}).toThrow('nolla parametriä annettu');
});
test('Ei voi jakaa nollalla', () => {
    expect(() => {osamaara(5,0)}).toThrow('Nollalla ei voi jakaa');
});

test ('jakaa 10 kahdella joten tulos on 5',() => {
    expect(osamaara(10,2)).toBe(5);
});