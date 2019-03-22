const taysika = require('./harj1');

test('Parametreja ei ole annettu', () => {
    expect(() => {
        taysika()}).toThrow('nolla parametriä annettu');
});

test('Täysikäinen', () => {
    expect(taysika(19)).toBe(true);
});

test('Lapsi', () => {
    expect(taysika(12)).toBe(false);
});

test('Tasan 18', () => {
    expect(taysika(18)).toBe(true);
});