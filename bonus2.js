function contact(firstname, lastname, number, numberstring){
    if(firstname === undefined || firstname === null || lastname === null || lastname === undefined ){
        throw new Error('Etunimi tai sukunimi on tyhjä');
    }
    if (number != null) {
        var numberstring = number.toString(); // Convertoidaan numero stringiksi
        if (numberstring.length < 10) {
            numberstring = "";
            var full = {
                firstname,
                lastname,
                numberstring,
            };
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