//Simulador compras Ador

//Filtrando mi array por categoria
                                                                                                                                               //
//opcion 1                                                                                                                                     //
/*function filtrarPorCategoria(caregory){                                                                                                      //
    const Filtrados = productos.filter((prod)=>prod.category.toLowerCase() === category.toLowerCase());                                        //
    return Filtrados;                                                                                                                          //
}                                                                                                                                              //
                                                                                                                                               //
                                                                                                                                               //
                                                                                                                                               // POR QIE NO ME PERMITE HACER NINGUN FILTRO? QUIERO FILTRAR POR CATEGORIA.
                                                                                                                                               //
//opcion 2                                                                                                                                     //
/*let Categorias = prompt('Ingresa el nombre del producto deseas 0-para salir');                                                               //
const PrductosFiltrados = productos.filter(producto => producto.category.tolowercase().includes(Categorias));                                  //
console.log(PrductosFiltrados);*/                                                                                                              //
                                                                                                                                               //
                                                                                                                                               //
//opcion 3                                                                                                                                     //
/*function FiltrarPorCategoria(category){                                                                                                      //
 prodCategory = prompt('ingresa la categoria del producto que deseas');                                                                        //
const ProductosFiltrados = productos.filter(product => product.category.toLocaleLowerCase() === category.toLocaleLowerCase());                 //

return ProductosFiltrados;
}*/

//datos de entrada

/*let ProductosSelccionados = prompt('Ingresa la categoria en la que estas interesado 0-para salir');

while(ProductosSleccionados != 0){
    const ProductosFiltrados = filtrarPorCategoria(ProductosSelccionados);
    console.table(ProductosFiltrados);
}*/

//DOM

console.table(productos);
const carro = [];
let contenedorProducts = document.getElementById('misProductos');
let tablaBody = document.getElementById('tablabody');


function renderizarProductos(listaProds){
    //vaciamos el contenedor para evitar duplicados
    contenedorProducts.innerHTML='';
    //cargamos las cartas de los prodcutos solicitados
    for(const prod of listaProds){
        contenedorProducts.innerHTML+=`
            <div class="card col-lg-3 col-md-6 bgCards p20 border-light">
                <img src=${prod.imagen} class="card-img-top img-fluid " alt="card image cap">
                <div class="card-body CentrarTextAndObjsCol">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    }

    //EVENTOS
    let botones = document.getElementsByClassName('compra');
    for (const boton of botones){
        boton.addEventListener('click',()=>{
            const prodAcarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodAcarro);
            //cargar productos al carro
            CargarCarro(prodAcarro);
        })
    }
}

renderizarProductos(productos);

function CargarCarro(producto){
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    // CALCULAR TOTAL
    //reduce
    function calcularTotalCarrito (){
    const totalPrecios = prodAcarro.reduce((acumulador,producto)=> acumulador + producto.price, 0);
    total.innerHTML = totalPrecios
    console.log('El total de los precios es $'+totalPrecios)
    }
}
    //vaciar carrito
    function vaciarCarro(){
        carro = [];
        mostrarCarro();
    }

    const vaciarCarritoBtn =document.getElementById('vaciarCarrito');
    vaciarCarritoBtn.addEventListener('click', vaciarCarro);

//EVENTOS DE TECLADO
//onkeyup onkeydown
let nombre = document.getElementById('nombre');
nombre.onkeyup=()=>{
    if(nombre.value.length < 3){
        console.log('Nombre de menos de 3 caracteres');
        nombre.style.color='red';
    }else{
        nombre.style.color='black';
    }
}


//evento input

let email = document.getElementById('email');
email.addEventListener('input',()=>{
    if(!email.value.includes('@') || !email.value.includes('.')){
        document.getElementById('mensaje').innerText='no olvides el @ ni el .';
    }else{
        document.getElementById('mensaje').innerText='';
    }
})

//borrar campos
function borrarCampos(){
    nombre.value = '';
    email.value = '';
}

//evento submit 

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit',validar);

function validar(eve){
    if((nombre.value=='')||(email.value == '')){
        eve.preventDefault();
        alert('Ingrese nombre o email valido !');
    }
}


let RedesSociales = document.getElementsByTagName('a');
console.log(RedesSociales);

RedesSociales[5,6,7].style.fontSize = '20px';  //PREGUNTAR POR QUE SOLO ME TOMA LA POSICION 7 PARA GACER EL CAMBIO DE TAMANO DE FUENTE






















