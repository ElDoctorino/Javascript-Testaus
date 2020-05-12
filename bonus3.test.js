const contact = require('./bonus3');

var tiedot = new Object();
tiedot.etunimi = "Ville";
tiedot.sukunimi = "Aaltonen";
tiedot.numero = "0401260700";

test('Etunimi tai sukunimi puuttuu', () => {
    expect(() => {
        contact(515889, 581858, 5999)
    }).toThrow('Etunimi, sukunimi tai numero ei ole merkkijono.');
});

test('Testaa antaa perustiedot sekä puhelinnumero', () => {
    expect(contact(tiedot)).toEqual("<li>Ville, Aaltonen, 0401260700</li>");
});