const contact = require('./bonus3');

test('Etunimi tai sukunimi puuttuu', () => {
    expect(() => {
        contact(firstname = null, lastname = null)
    }).toThrow('Etunimi, sukunimi tai numero on tyhjä.');
});

test('Testaa antaa perustiedot sekä puhelinnumero', () => {
    expect(contact(firstname = "Ville", lastname = "Aaltonen", number = "0401260700")).toEqual({
        firstname: "Ville",
        lastname: "Aaltonen",
        numberstring: "0401260700"  
    });
});
test('Testaa tiedot', () => {
    (contact(firstname = "Ville", lastname = "Aaltonen", number = "0401260700"))
    expect(contact(juusto).toContain('Ville', 'Aaltonen', '0401260700'));
  });