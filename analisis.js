//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}


//creamos un array con los salarios
const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);
//creamos un array ordenado
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA-salaryB;

    }
);



//mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        return (personitaMitad1+personitaMitad2)/2;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

//Mediana top 10%

//(sacamos el top 10%)

spliceStart = parseInt( salariosColSorted.length * 80 /100);
spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount );
console.log(salariosColSorted);
console.log(salariosColTop10);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

console.log(medianaGeneralCol);
const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log(medianaTop10Col);

