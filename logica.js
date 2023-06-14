//SIMULADOR DE COMPRAS ADOR//

let nombreUsuario = prompt('Ingresa tu nombre');

while((nombreUsuario == '') || (nombreUsuario == ' ') ){
    alert('Nombre invalido 😫');
    nombreUsuario = prompt('Ingresa tu nombre');
}


alert('Bienvenido/a a Ador Jewelry '+nombreUsuario);

let mensaje = prompt('Deseas comprar alguno de nuestros maravillosos  productos 😊 ? (s-si)');
//creo una variable global para calcular el total de la compra
let total = 0;

//Ciclo para que el usuario compre o siga comprando
while(mensaje.toLowerCase() == 's'){
    let producto = prompt('1 - Candongas Domenica $39900\n2 - Candongas serena $39900\n3 - Candongas Mirabella Gold $39900\n4 - Candongas Protectora Mini-Silver $59900\n5 - Set Cadenas Super Woman $59900\n6 - Cadena Muse Silver $99900\n7 - Choker Irina Silver $39900\n8 - Cadena Nicoletta $35000\n9 - Set Cadenas Priscilla $49900\n10 - Choker Aria Gold $39900\n11 - Earcuff Magia Silver $29900\n12 - Candongas Maxi Cora Gold $49900\n13 - Aretes Curiosa Silver $39900\n14 - Candongas Caterina $39900\n15 - Choker Veronica Silver $39900\n16 - Pulsera Poderosa Silver $34900');
    //condicional switch para evaluar el producto
    switch(producto){
        case '1':
            alert('Agregaste Candongas Domenica por $39900 a tu carro 🛒');
            incrementarTotal(6000);
            break;
        case '2':
            alert('Agregaste Candongas serena por $39900 a tu carro 🛒');
            incrementarTotal(3900);
            break;
        case '3':
            alert('Agregaste Candongas Mirabella Gold por $39900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '4':
            alert('Agregaste Candongas Protectora Mini-Silver por $59900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '5':
            alert('Agregaste Set Cadenas Super Woman por $59900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '6':
            alert('Agregaste Cadena Muse Silver por $99900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '7':
            alert('Agregaste Choker Irina Silver por $39900 a tu carro 🛒');
            incrementarTotal(6000);
            break;
        case '8':
            alert('Agregaste Cadena Nicoletta por $35000 a tu carro 🛒');
            incrementarTotal(3900);
            break;
        case '9':
            alert('Agregaste Set Cadenas Priscilla por $49900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '10':
            alert('Agregaste Choker Aria Gold por $39900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '11':
            alert('Agregaste Earcuff Magia Silver por $29900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '12':
            alert('Agregaste Candongas Maxi Cora Gold por $49900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '13':
            alert('Agregaste Aretes Curiosa Silver por $39900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '14':
            alert('Agregaste Candongas Caterina por $39900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '15':
            alert('Agregaste Choker Veronica Silver por $39900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '16':
            alert('Agregaste Pulsera Poderosa Silver por $34900 a tu carro 🛒');s
            incrementarTotal(40000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }

    mensaje = prompt('Deseas Adquirir otro producto 😊 ? (s-si)');
}

alert('Monto total de su compra $'+total);

//uso una funcion para calcular el total de la compra
function incrementarTotal(precio){
    total = total + precio;
    alert('Subtotal hasta el momento $'+total);
}

alert(nombreUsuario+ ' queremos saber sobre tu experiencia de compra. Por favor danos tu calificacion en el siguiete mensaje')
let Encuesta = prompt ( '1 - estoy muy  insatisfecho con mi proceso de compra\n2 - Estoy satisfecho con mi proceso de compra\n3 - Estoy muy satisfecho con mi proceso de compra')
if (Encuesta == '1'){
    alert("Lo sentimos mucho, trabajaremos mas fuerte para ofrecer un servicio de mayor calidad");
}else if (Encuesta == '2') {
    alert("Muchas gracias, estamos trabajando para mejorar tu experiencia");
}else if (Encuesta == '3'){
    alert("Muchas gracias, esperamos poder servirte nuevamente");
}else
 alert (nombreUsuario+ ' Recuerda que en Ador, siempre encontraras los mejores accesorios para hacer de lo ordinario algo extraordinario');

 //Interaccion con el Array
 console.table(productos);
 
 //funcion filtrar por precio
 function filtrarPorPrecio(precio){
    const filtradosPre = productos.filter((prod)=>prod.precio <= precio);
    return filtradosPre;
 }

 //datos de entrada
 let precioMax = parseFloat(prompt('ingresa el maximo valor que estas duspuesto a pagar 0-para salir'));

 while(precioMax != 0){
    if(isNaN(precioMax) || precioMax < 0){
        alert('ingrese un numero valido');
    }else{
        //ya tenemos un numero valido
        const productsFiltrados = filtrarPorPrecio(precioMax);
        console.table(productsFiltrados);
    }
    precioMax = parseFloat(prompt('ingresa el maximo valor que estas dispuesto a pagar 0- para salir'));
 }

 //funcion buscar productos
 const buscar = productos.find(producto => producto.id === 10)
    console.log(buscar);

//funcion filtrado map

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);

//index of
let buscarNombreProduct = prompt('ingresa el nombre del producto');

if (productos.indexOf(buscarNombreProduct) == -1){
    alert(buscarNombreProduct + 'Producto sin stock');
    let respuesta = prompt ('Desea hablar con un asesor para averiguar sobre ' + buscarNombreProduct +'? (s-si n-no)');
    if(respuesta.toLocaleLowerCase () == 's'){
        alert ('en unos minutos lo contactaremos');
    }else{
        alert('esperamos contar con el producto que desea en la proxima ocasion')
    }
}







