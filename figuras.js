//código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm cada uno.");

// const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(lado){
    return lado*4; 
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado*lado;
}
console.log("El perímetro del cuadrado es  " + perimetroCuadrado(ladoCuadrado) + " cms.");
console.log("El área del cuadrado es  " + areaCuadrado(ladoCuadrado) + " cms cuadrados.");
console.groupEnd();
//código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 
console.log("Los lados del triángulo miden " 
    + ladoTriangulo1 
    + ", " 
    + ladoTriangulo2 
    + " y " 
    + baseTriangulo 
    + " cm, y la altura "
    + alturaTriangulo 
    + " cm."
);
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo(base, altura){
    return base*altura/2;
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es  " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2,baseTriangulo) + " cms.");
// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es  " + areaTriangulo(baseTriangulo, alturaTriangulo) + " cms cuadrados.")

console.groupEnd();

//código del círculo
console.group("Círculo");
const radioCirculo = 4;
console.log("El radio del círculo mide " + radioCirculo + " cm.");

function perimetroCirculo(radio){
    return radio* 2 * Math.PI;
}
function areaCirculo(radio){
    return radio*radio*Math.PI;
}
// const perimetroCirculo = radioCirculo * 2 * Math.PI;
console.log("El perímetro del círculo es  " + perimetroCirculo(radioCirculo) + " cms.");

// const areaCirculo = Math.PI * radioCirculo * radioCirculo;

console.log("El área del círculo es  " + areaCirculo(radioCirculo) + " cms cuadrados.");
console.groupEnd();

// Interactuamos con el html
// Cuadrado
function calcularPerimetroCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}
//Triángulo
function calcularPerimetroTriangulo(){
    const Lado1 = document.getElementById("InputTrianguloLado1");
    const Lado2 = document.getElementById("InputTrianguloLado2");
    const Base = document.getElementById("InputTrianguloBase");
    
    const perimetro = Base.value*1 + Lado1.value*1 + Lado2.value*1;
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const area = inputBase.value * inputAltura.value / 2;
    alert(area);

}
// Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const perimetro =  2 * input.value * Math.PI;
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const area =  input.value * input.value * Math.PI;
    alert(area);
}