const lippuhinta = require('./harj3');

test ('Testaa 6-vuotiaan', () => {
    expect(lippuhinta(6)).toBe(0);
});

test ('Testaa 15-vuotiaan', () => {
    expect(lippuhinta(15)).toBe(1);
});

test ('Testaa 16-vuotiaan', () => {
    expect(lippuhinta(16)).toBe(1.5);
});

test ('Testaa 26-vuotiaan', () => {
    expect(lippuhinta(26)).toBe(3);
});

test ('Testaa 66-vuotiaan', () => {
    expect(lippuhinta(66)).toBe(1.5);
});

test('Et antanut parametrejä joten epäonnistuit', () => {
    expect(() => {lippuhinta()}).toThrow('nolla parametriä annettu');
});