function taysika(a)
{
    
    
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }

    if(Number.isNaN(a)){
        throw new Error('Et antanut Numeroa');
    }
    if (a>=18){        
        return true;
    }
    else {
       return false;
    }
}
module.exports =taysika;