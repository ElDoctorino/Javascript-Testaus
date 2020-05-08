function contact(firstname, lastname, number, numberstring){
    if(firstname === undefined || firstname === null || lastname === null || lastname === undefined || number === null || number === undefined){
        throw new Error('Etunimi, sukunimi tai numero on tyhjä.');
    }
    if (contact != null) {
        var numberstring = number.toString(); // Convertoidaan numero stringiksi
        if (numberstring.length < 10) {
            numberstring = "";
            var full = {
                firstname,
                lastname,
                numberstring,
            };
            //var juusto = JSON.parse("[", "<li>" + full + "</li>", "]");
            return full;
        } else {
            var full = {
                firstname,
                lastname,
                numberstring,
              };
              return full;
        }
    } else {
        numberstring = "";
        var full = {
            firstname,
            lastname,
            numberstring,
          };
          return full;
    }
}
module.exports =contact;