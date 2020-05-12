const contact = require('./bonus3');

test('Etunimi tai sukunimi puuttuu', () => {
    expect(() => {
        contact(firstname = null, lastname = null)
    }).toThrow('Etunimi, sukunimi tai numero on tyhjä.');
});
var tiedot = new Object();
tiedot.etunimi = "Ville";
tiedot.sukunimi = "Aaltonen";
tiedot.numero = "0401260700";

test('Testaa antaa perustiedot sekä puhelinnumero', () => {
    expect(contact(tiedot)).toEqual("<li>Ville, Aaltonen, 0401260700</li>");
});