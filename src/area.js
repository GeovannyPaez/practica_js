  //codigo del area
//    console.group("cuadrado");
//    const ladoCuadrado= 5;

//     console.log(` los lados del cuadrado miden: ${ladoCuadrado} cm`);

//     const perimetroCuadrado = ladoCuadrado * 4;
//     console.log(`el perimetro del cuadrado es: ${perimetroCuadrado} cm `);

//     const areaCuadrado= ladoCuadrado * ladoCuadrado;
//     console.log(`el area delcuadrado es : ${areaCuadrado} cm^2`); 
//     console.groupEnd();
   
function perimetroCuadrado(lado1){
    return lado1 *4;
}

function areaCuadrado(lado1){
    return  lado1 * lado1;
}


    //codigo del triangulo 

//     const lt1= 6;
//     const lt2= 6;
//     const lt3base= 4;
    

//     console.group("triangulo");
// ;
//     console.log(`los lados del triangulo miden: ${lt1}cm ${lt2}cm ${lt3base}cm`);

//     const alturatr= 8;
//     console.log(`la altura del triangulo es de: ${alturatr}cm`);
    
//     const perimetotr = lt1 + lt2 + lt3base;
//     console.log+(`el perimetro del triangulo es de: ${perimetotr}cm`);

//     const areatriangulo = (lt3base * alturatr)/2;
//     console.log(`el area del triangulo es: ${areatriangulo}cm^2`);
    
//     console.groupEnd();

function perimetroTriangulo(ld1,ld2,base){
    return Number(ld1) + Number(ld2)+ Number(base);

}
function areatriangulo(base, altura){
    return (base * altura)/2
}


    // codigo del circulo

    // console.group("circulo");
    //radio
    // const rdCirculo = 5;
    // console.log(`el radio del circulo: ${rdCirculo}cm`);


    //diametro
    function diametroCirculo(radio){
        return radio * 2;
    }
    // const diamCirculo= rdCirculo * 2;
    // console.log(`el diametro del circulo: ${diamCirculo}cm`);

    //PI
    const PI = Math.PI;
    console.log(`la constante PI: ${PI}`);
    //circunferencia
    function permietroCirculo(radio){
        const diametro =  diametroCirculo(radio);
        return diametro * PI;
    }
    
    // const perimetroCirculo = diamCirculo * PI ;
    // console.log(`la circunferencia del circulo: ${perimetroCirculo}cm`);

    //area
    function areaCirculo(radio){
        return (radio * radio)* PI;
    }
    // const areaCirculo = parseInt(PI * (rdCirculo * rdCirculo));
    // console.log(`el area del circulo es: ${areaCirculo}cm^2`);
    

 

    // console.groupEnd()f

    // codigo Triangulo isoseles 

    function alturaIsoceles(lado1 , lado2 , base){ 
        if(lado1===lado2){
            return Math.sqrt( (lado1 * lado2 ) - (base * base ) );

        }else{
            alert("no es triangulo isoseles");
        }
        
    }



    function calcularPerimetroCuadrado(){
        
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const result= document.getElementById("result-cuadrado");
        const perimetro = perimetroCuadrado(value);
        
        result.innerText= `${perimetro} u`;


        

    }
   
    function calcularAreaCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value= input.value;
        const area = areaCuadrado(value);
        const result= document.getElementById("result-cuadrado");

        result.innerText=`${area} u^2`
        



    }

    function calcularPerimetroTriangulo(){
        const lado1 = document.getElementById("lado1");
        const value1= lado1.value;
    
        const lado2= document.getElementById("lado2");
        const value2= lado2.value;
    
        const base= document.getElementById("base");
        const valuebase = base.value;
        const peri= perimetroTriangulo(value1, value2,valuebase);

        const result = document.getElementById("result-triangulo");
        result.innerText = `${peri} u`;


    
        
    
        

    
    }


    function calcularAreaTriangulo(){
        const base_trian = document.getElementById("base");
        const altura = document.getElementById("altura"); 
        const input_base = base_trian.value;
        const input_altura= altura.value;
        

        const areatrian= areatriangulo(input_base, input_altura);

        const result = document.getElementById("result-triangulo");
        result.innerText = `${areatrian} u^2`;
       
    }

    function calculardiametroCirculo() {
        const radio= document.getElementById("radio") ;
        const input_radio = radio.value;
        const diametrocircle = diametroCirculo(input_radio) ;
        const result = document.getElementById("result-circle");
        result.innerText= `${diametrocircle} u`
        
    }

    function calcularperimetrotroCirculo(){
        const radio= document.getElementById("radio"); 
        const input_radio = radio.value;
        const perimetro_circle= permietroCirculo(input_radio);

        const result = document.getElementById("result-circle");
        result.innerText= `${perimetro_circle} u`
        

    }
 function calcularAreaCirculo() {
    const radio= document.getElementById("radio");
    const input_radio = radio.value; 
    const area_circle = areaCirculo(input_radio);

    const result = document.getElementById("result-circle");
        result.innerText= `${area_circle} u^2 `
   
 }
 function calcularAlturaisosceles(){
     const lado1 = document.getElementById("ld1");
     const lado2 = document.getElementById("ld2");
     const base = document.getElementById("base_isosceles");

     const input_lado1= lado1.value;
     const input_lado2= lado2.value;
     const input_base = base.value;

     const altura = alturaIsoceles(input_lado1, input_lado2, input_base);

     const result = document.getElementById("result-isoceles");
        result.innerText= `${altura} u`


 }