let array = [];



//  let array1  ;


 function tomarDatos1(){
    let datos = document.getElementById("input-tendencia").value;
      
    let arrayDatos = datos.split(",");

    arrayDatos.filter((numero)=> array.push(Number(numero)));
     
    mostrarDato();
    medidas.reset();
    
 }
 let arrayInt = array.map((numerito)=> Number(numerito));


 const tomarDatos = ()=>{
    let dato=  document.getElementById("input-tendencia");
 
    let datoValue = parseInt(dato.value);
    if(datoValue > 0){
        
    array.push(datoValue);
    medidas.reset();
    mostrarDato();
 
    }else{
        alert("Por favor dijite un numero mayor a 0 ");
    }
 }
 resultadoa= document.getElementById("mostrar_array");
 function quitarDato(){
    let resultado= document.getElementById("mostrar_array");
    let etiqueta= document.getElementById("p")
    
    array.splice(0,array.length);
    resultado.removeChild("p");
    
    
    
 }
 function mostrarDato (){
    let resultado = document.getElementById("mostrar_array");
   
    resultado.innerHTML = '';

    for (const dato of array) {
        let datoPrint= document.createElement('p');

        datoPrint.innerHTML= `${dato},`;

        resultado.appendChild(datoPrint);
        
    }

}

function calcularMedia(lista){
   
    //utilizamor for para sumar 
    // let sumaLista= 0 ;

    // for(let i = 0; i< lista.length; i++){
    //     sumaLista = sumaLista + lista [i];
    
    // }
    //utilizamos metodos de arrays para sumar
    const sumaLista = lista.reduce(  
        function(valorAcomulado = 0 , nuevoElemento ){
            return valorAcomulado + nuevoElemento ;
        }
    );
    
    const promedioLista =  parseInt(sumaLista / lista.length);
    return promedioLista; 
}

function mostrarResultadoMedia(){
    let respuesta = calcularMedia(array);
    let resultado = document.getElementById("resultTendencia")
    resultado.innerText= ` la media es: ${respuesta}`;
}



function esPar(numeros) {
    if (numeros % 2 === 0 ){
        return true;

    }else {
        return false;
    }
}
    
    
 
function calcularMediana(lista) {
    // usamos la funsion para que ordene los numeros por medio de una comparacion de quien es menor o mayor.
    let listaOrdenada = lista.sort(function (a , b){
        return a - b ;
    });
    // console.log(listaOrdenada);
    
    const mitadLista1 = parseInt(listaOrdenada.length /2); ;
   
    
    if (esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];

        const promedioElemento1y2= calcularMedia([elemento1,elemento2]);

        mediana = promedioElemento1y2;


         
    }else{
        mediana =listaOrdenada[mitadLista1];
    
    }

    return mediana;

}

function mostrarResultadoMediana (){
    const resultado = calcularMediana(array);
    const mostrarResultado = document.getElementById("resultTendencia");

    mostrarResultado.innerText= `La mediana es: ${resultado}`;

}



function calcularModa (lista){

    const listacount= {};
// console.log(listaArray);
lista.map(
    function (elemento){
        if(listacount[elemento]){
            listacount[elemento] += 1;
        }else{
            listacount[elemento]= 1 ;
        }
    }
);

const listaArray = Object.entries(listacount).sort(
    // object.entries(); es para convertir un objeto en array
    function (valorAcomulado , nuevoValor){
        return valorAcomulado[1] - nuevoValor[1];
    }
);


 return listaArray[listaArray.length - 1];
}

function mostrarResultadoModa (){
    const resultado = calcularModa(array);
    const mostrarResultado = document.getElementById("resultTendencia");

    mostrarResultado.innerText= `La moda es: ${resultado[0]} y se repite ${resultado[1]} veces`;

}

// function eliminarElemento( ){
//     array.pop();

//     let eliminar etiqueta
    
// }