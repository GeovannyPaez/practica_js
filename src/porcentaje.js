// const total = 800;
// const des = 20 ;
// const caldes= (total * (100-des))/100;
 
// alert(caldes);

function clacularDescuento(total, descuento){
    const totall= parseInt(total);
    const des = parseInt(descuento) ;
    const caldes= (totall * (100-des))/100;
    return caldes;
 
}




function calcularDescuentoProducto() {
  const total =  document.getElementById("total");
  const total_input= total.value;

  const descuent = document.getElementById("descuento");
  const descuent_input = descuent.value;


  const precioConDescuento=  clacularDescuento(total_input, descuent_input);

   const resltDescuento = document.getElementById("resultDes");
   resltDescuento.innerText= `${precioConDescuento} $`;

} 
