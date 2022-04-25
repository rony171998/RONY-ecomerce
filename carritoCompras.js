
function convertirNumero(params) {
  let indicepalabra = params.indexOf("$")
  return params = params.toString().substring(indicepalabra + 1)
}

main();
function main() {
  document.getElementById("compra1").addEventListener("click", e => {
    limiteStock(1)
    mostrarProducto(1)
    
  });
  document.getElementById("compra2").addEventListener("click", e => {
    limiteStock(2)
    mostrarProducto(2)
  });
  document.getElementById("compra3").addEventListener("click", e => {
    limiteStock(3)
    mostrarProducto(3)
  });

  document.getElementById("Add").addEventListener("click", e => {
    limiteStock(2);
  });
  document.querySelector(".checkout").addEventListener("click", e => {
    document.getElementById("valor").innerHTML = 0 + ".00"
    document.querySelector("#contador").innerHTML = 0
    document.querySelector("#unidades1").innerHTML = 0 + " units"
    document.querySelector("#unidades2").innerHTML = 0 + " units"
    document.querySelector("#unidades3").innerHTML = 0 + " units"
    ocultarEmpty()
  });


  document.querySelector("#botonMas1").addEventListener("click", e => {
    limiteStock(1)


  })
  document.querySelector("#botonMas2").addEventListener("click", e => {
    limiteStock(2)
  })
  document.querySelector("#botonMas3").addEventListener("click", e => {
    limiteStock(3)
  })
  document.querySelector("#botonMenos1").addEventListener("click", e => {
    functionMenos(1)
  })
  document.querySelector("#botonMenos2").addEventListener("click", e => {
    functionMenos(2)
  })
  document.querySelector("#botonMenos3").addEventListener("click", e => {
    functionMenos(3)
  })
  document.querySelector("#botoncarrito").addEventListener("click", e => {
    abrirCarrito()
  })

}

function store(etiqueta) {

  let precio1 = document.querySelector("#precio" + etiqueta).innerText
  var valorProducto = (convertirNumero(precio1));
  let valornumero = document.querySelector("#valor").innerHTML
  let suma = convertirStringNummero(valorProducto, valornumero)

  document.getElementById("valor").innerHTML = suma + ".00"
  document.querySelector("#contador").innerHTML = convertirStringNummero(document.querySelector("#contador").innerHTML, 1)
}
function storeMenos(etiqueta) {

  let precio1 = document.querySelector("#precio" + etiqueta).innerText
  var valorProducto = (convertirNumero(precio1));
  let valornumero = document.querySelector("#valor").innerHTML
  let suma = convertirStringNummeromenos(valorProducto, valornumero)

  document.getElementById("valor").innerHTML = suma + ".00"
  document.querySelector("#contador").innerHTML = convertirStringNummeromenos(1, document.querySelector("#contador").innerHTML)
}

function unidades(params) {

  let unidad = document.querySelector("#unidades" + params).innerHTML
  let numero = unidad.substring(0, 2)

  document.querySelector("#unidades" + params).innerHTML = convertirStringNummero(1, numero) + " units"
}
function unidadesMenos(params) {

  let unidad = document.querySelector("#unidades" + params).innerHTML
  let numero = unidad.substring(0, 2)

  document.querySelector("#unidades" + params).innerHTML = convertirStringNummeromenos(1, numero) + " units"

  if (parseInt(numero)===1) {
    quitarProducto(params)
  }
}


function convertirStringNummero(numero1, numero2) {
  return parseInt(numero1) + parseInt(numero2)
}
function convertirStringNummeromenos(numero1, numero2) {
  if (numero2 < 1) {
    return 0
  } else {
    return parseInt(numero2) - parseInt(numero1)
  }

}
function limiteStock(params) {
  ocultarEmpty()
  if (document.querySelector("#unidades" + params).innerHTML.substring(0, 2) < parseInt(document.querySelector("#stock" + params).innerHTML.substring(6, 8))) {
    
    store(params)
    unidades(params)
    sumarSubtotal(params)
  } else {
    alert("NO hay mas producto")
  }
}

function sumarSubtotal(params) {
  let numerosubtotal = document.querySelector("#valorsubtotal" + params).innerHTML.substring(1, document.querySelector("#valorsubtotal" + params).innerHTML.indexOf("."))
  let valorbase=document.querySelector("#valor"+params).innerHTML.substring(1,document.querySelector("#valor"+params).innerHTML.indexOf("."))
  document.querySelector("#valorsubtotal" + params).innerHTML = "$" + convertirStringNummero(valorbase, numerosubtotal) + ".00"
  
}
function restarSubtotal(params) {
  let numerosubtotal = document.querySelector("#valorsubtotal" + params).innerHTML.substring(1, document.querySelector("#valorsubtotal" + params).innerHTML.indexOf("."))
  let numerobase=document.querySelector("#valor"+params).innerHTML.substring(1,document.querySelector("#valor"+params).innerHTML.indexOf("."))
  document.querySelector("#valorsubtotal" + params).innerHTML = "$" + convertirStringNummeromenos( numerobase,numerosubtotal) + ".00"

}
function functionMenos(params) {
  
  if (document.querySelector("#unidades" + params).innerHTML.substring(0, 2) > 0) {
    storeMenos(params)
    unidadesMenos(params)
    restarSubtotal(params)
  }
}
function abrirCarrito() { 
  var carrito = document.querySelector("#compras"); 
  carrito.classList.toggle("abrirCarrito"); 
}
function quitarProducto(params) { 
  var carrito = document.querySelector("#producto"+params); 
  carrito.classList.toggle("quitarProducto"); 
}
function ocultarEmpty() { 
  
  if (document.querySelector("#contador").innerHTML==0) {
    var carrito = document.querySelector("#empty"); 
    carrito.classList.toggle("ocultarEmpty"); 
  }
}
function mostrarProducto(params) { 
  var carrito = document.querySelector("#producto"+params); 
  carrito.classList.toggle("mostrarProducto"); 
  
}




