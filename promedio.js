//media
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
console.group("Media");
console.log(lista1);
console.log(calcularMediaAritmetica(lista1));
console.groupEnd();

//Mediana
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


console.group("Mediana");
console.log(lista2);
console.log(calcularMediana(lista2));
console.groupEnd();

//Moda
console.group("Moda");
const lista3=[2,4,3,4,4,1,3,5];

function calcularModa(lista){
    const listaCount = {};
    lista.map(
            function(elemento){
                if(listaCount[elemento]){
                    listaCount[elemento] += 1;
                }else{
                    listaCount[elemento] = 1;
                }
                
            }
            
        );
    console.log(lista);
    console.log(listaCount);
    
    const listaArray = Object.entries(listaCount).sort(
                function(elementoA, elementoB){
                    return elementoA[1]-elementoB[1];
                }
            );
    console.log(listaArray);
    console.log(`El elemento más común, la moda, es ${listaArray[listaArray.length -1][0]}`);
}

calcularModa(lista3);
console.groupEnd();
// const lista3Count = {};

// lista3.map(
//     function(elemento){
//         if(lista3Count[elemento]){
//             lista3Count[elemento] += 1;
//         }else{
//             lista3Count[elemento] = 1;
//         }
        
//     }
// );
// console.group("Mediana");
// console.log(lista3);
// console.log(lista3Count);

// const lista2Array = Object.entries(lista3Count).sort(
//     function(elementoA, elementoB){
//         return elementoA[1]-elementoB[1];
//     }
// );

// console.log(lista2Array);
// console.log(`El elemento más común, la moda, es ${lista2Array[lista2Array.length -1][0]}`);
