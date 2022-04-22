
function convertirNumero(params) {
    let indicepalabra = params.indexOf("$")
    return params = params.toString().substring(indicepalabra + 1)
}

main();
function main(){
    const element1 = document.getElementById("compra1");
    element1.addEventListener("click", e=>{
      store(1);  
    } ); 
    const element2 = document.getElementById("compra2");
    element2.addEventListener("click", e=>{
      store(2);  
    } ); 
    const element3 = document.getElementById("compra3");
    element3.addEventListener("click", e=>{
      store(3);  
    } ); 

}

function store(etiqueta) {

    let precio1 = document.querySelector("#precio"+etiqueta).innerText
    var valorProducto = (convertirNumero(precio1));
    let valornumero = document.querySelector("#valor").innerHTML
    let suma =convertirStringNummero(valorProducto, valornumero)
    
    document.getElementById("valor").innerHTML=suma+".00"
    document.querySelector("#contador").innerHTML=convertirStringNummero(document.querySelector("#contador").innerHTML, 1)
    
}


function convertirStringNummero(numero1, numero2) {
    return parseInt(numero1) + parseInt(numero2)

}