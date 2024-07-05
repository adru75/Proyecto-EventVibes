import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

const listaPlatos = document.querySelector("[data-lista-platos]");

const listaBebidas = document.querySelector("[data-lista-bebidas]");

function crearCard(nombre,descripcion,platoPrincipal,bebida,precio,imagen) {
    const menu = document.createElement("li");
    menu.className="menu_item";
    menu.innerHTML=`
        <div class="card">
            <img src="./img/${imagen}" alt="">
            <div class="card-content">
                <h3>${nombre}</h3>
                <p>Plato principal:${platoPrincipal}<br>
                Bebida: ${bebida}<br>
                Precio: $${precio}</p>
                <a href="./contacto.html" class="btn">Pedir presupuesto</a>
            </div>
        </div>
        `;
        return menu;
}

function crearCardPlato(id,nombre,descripcion) {
    const menu = document.createElement("li");
    menu.className="menu_item";
    menu.innerHTML=`
        <div class="card">
            <div class="card-content">
                <h4>ID:${id}</h4>
                <h5>Nombre: ${nombre}</h5>
                <p>Descripcion: ${descripcion}<br>
            </div>
            <div class="row justify-content-around">
                <div class="col-4">
                    <a href=''><i class="fa-regular fa-pen-to-square"></i></a>
                </div>
                <div class="col-4">
                    <a href=''><i class="fa-solid fa-circle-xmark" style="color: red;"></i></a>
                </div>    
            </div>
        </div>
        `;
        return menu;
}

function crearCardBebida(id,nombre,descripcion) {
    const menu = document.createElement("li");
    menu.className="menu_item";
    menu.innerHTML=`
        <div class="card">
            <div class="card-content">
                <h4>ID:${id} ${nombre}</h3>
                <p>${descripcion}<br>
            </div>
        </div>
        `;
        return menu;
}

async function listarMenus() {
    const listaAPI = await conexionAPI.listarMenus();
    listaAPI.forEach(menu=>lista.appendChild(crearCard(menu.nombre,menu.descripcion,menu.platoPrincipal,menu.bebida,menu.precio,menu.imagen)))
}

async function listarPlatos() {
    const listaAPI = await conexionAPI.listarPlatos();
    listaAPI.forEach(menu=>listaPlatos.appendChild(crearCardPlato(menu.id,menu.nombre,menu.descripcion)))
}

async function listarBebidas() {
    const listaAPI = await conexionAPI.listarBebidas();
    listaAPI.forEach(menu=>listaBebidas.appendChild(crearCardPlato(menu.id,menu.nombre,menu.descripcion)))
}


listarMenus();
listarPlatos();
listarBebidas();