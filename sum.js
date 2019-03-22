function sum(a, b=0){
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    let summa = Number(a)+Number(b);
    if(Number.isNaN(summa)){
        throw new Error('Ei lukuja');
    }
    return summa;
}

module.exports =sum;