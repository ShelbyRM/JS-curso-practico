const lista1 = [
    100,
    200,
    300,
    500
];


function calcularMediaAritmetica(lista){
    // let sumaLista1 = 0;
    // for(let i=0 ; i < lista.length ; i++){
    //     sumaLista1 = sumaLista1 + lista[i];
    // }
    // const promedioLista = sumaLista1 / lista.length;

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}


const lista2 = [
    100,
    200,
    400000000
];

var mitadlista = lista2.length/2;
let mediana;

function esPar(numerito){
    if (numerito % 2 == 0) {
        return true;
    } else {
        return false;
    }
}





function calcularMediana(lista){
    
    var mitadlista = lista.length/2;
    let mediana;

    if (esPar(mitadlista)){
        const elemento1 = lista[mitadlista-1];
        const elemento2  = lista[mitadlista];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    
    } else {
        mediana = lista[parseInt(mitadlista)];
    }

    return mediana;

}

console.log(calcularMediana(lista2));

