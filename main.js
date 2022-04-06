
function convert(numeroRomano){
    let romano = numeroRomano;
    let map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let resultado = 0;

    if (romano.length){
        resultado+=map[romano[romano.length-1]];
    }
    for (let i= romano.length - 1; i > 0; i--){
        if(map[romano[i-1]] < map[romano[i]]) {
            resultado-=map[romano[i-1]];
        }else{
            resultado+=map[romano[i-1]];
        }
    }
    console.log(`${numeroRomano} em decimal é ${resultado}`);
}

convert('XLIV');