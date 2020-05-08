const contact = require('./bonus2');

test('Etunimi tai sukunimi puuttuu', () => {
    expect(() => {
        contact(firstname = null, lastname = null)
    }).toThrow('Etunimi tai sukunimi on tyhjä');
});
test('Testaa antaa perustiedot', () => {
    expect(contact(firstname = "Ville", lastname = "Aaltonen")).toEqual({
        firstname: "Ville",
        lastname: "Aaltonen",
        numberstring: ""
    });
});
test('Testaa antaa perustiedot sekä puhelinnumero', () => {
    expect(contact(firstname = "Ville", lastname = "Aaltonen", number = "0401260700")).toEqual({
        firstname: "Ville",
        lastname: "Aaltonen",
        numberstring: "0401260700"
    });
});
test('Testaa antaa perustiedot mutta puhelin väärässä muodossa', () => {
    expect(contact(firstname = "Ville", lastname = "Aaltonen", number = "12345")).toEqual({
        firstname: "Ville",
        lastname: "Aaltonen",
        numberstring: ""
    });
});
test('Numero outona', () => {
    expect(contact(firstname = "Ville", lastname = "Aaltonen", number = "040-111 222")).toEqual({
        firstname: "Ville",
        lastname: "Aaltonen",
        numberstring: "040-111 222"
    });
});