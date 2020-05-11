const contact = require('./bonus3');

test('Etunimi tai sukunimi puuttuu', () => {
    expect(() => {
        contact(firstname = null, lastname = null)
    }).toThrow('Etunimi, sukunimi tai numero on tyhjä.');
});

test('Testaa antaa perustiedot sekä puhelinnumero', () => {
    expect(contact("Ville","Aaltonen","0401260700")).toEqual({
        firstname: "<li> Ville </li>",
        lastname: "<li> Aaltonen </li>",
        numberstring: "<li> 0401260700 </li>"  
    });
});
//  test('Testaa tiedot', () => {
//     (contact("Ville","Aaltonen","0401260700"))
//     expect(contact(juusto).toContain('Ville', 'Aaltonen', '0401260700'));
//    });