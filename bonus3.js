function contact(tiedot){
    if (typeof tiedot.etunimi != 'string' || typeof tiedot.sukunimi != 'string' || typeof tiedot.numero != 'string') {
    throw new Error('Etunimi, sukunimi tai numero ei ole merkkijono.');
    } else {
    if (tiedot != null) {
            tiedot2 = "<li>" + tiedot.etunimi + ", " + tiedot.sukunimi + ", " + tiedot.numero + "</li>";
            return tiedot2;
    }
}
}
module.exports =contact;