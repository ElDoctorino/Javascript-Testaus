function contact(tiedot){
    if(tiedot == null || tiedot == undefined){
        throw new Error('Etunimi, sukunimi tai numero on tyhjä.');
    }
    if (tiedot != null) {
            tiedot2 = "<li>" + tiedot.etunimi + ", " + tiedot.sukunimi + ", " + tiedot.numero + "</li>";
            return tiedot2;
    }
}
module.exports =contact;