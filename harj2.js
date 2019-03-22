function osamaara(a,b=1)
{
    let numA = Number(a);
    let numB = Number(b);
    let jako = numA/numB;
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    
    if(b === undefined || b === null){
        throw new Error('nolla parametriä annettu');
    }

    if(Number.isNaN(numA) || Number.isNaN(numB)){
        throw new Error('Et antanut Numeroa');
    }
    if(Number(b) === 0) {
        throw new Error('Nollalla ei voi jakaa');
    }

    return jako;
}
module.exports =osamaara;