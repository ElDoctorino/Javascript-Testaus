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
            full[0] ="<li>" + firstname + "</li>";
            full[1] ="<li>" + lastname + "</li>";
            full[2] ="<li>" + numberstring + "</li>";
            return full;
            //return full;
        } else {
            var full = {
                firstname,
                lastname,
                numberstring,
              };
              firstname ="<li> " + firstname + " </li>";
              lastname ="<li> " + lastname + " </li>";
              numberstring ="<li> " + numberstring + " </li>";
              var full = {
                  firstname,
                  lastname,
                  numberstring
              }
              return full;
        }
    } else {
        numberstring = "";
        var full = {
            firstname,
            lastname,
            numberstring,
          };
    }
}
module.exports =contact;