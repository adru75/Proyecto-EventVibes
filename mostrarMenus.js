import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

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


async function listarMenus() {
    const listaAPI = await conexionAPI.listarMenus();
    listaAPI.forEach(menu=>lista.appendChild(crearCard(menu.nombre,menu.descripcion,menu.platoPrincipal,menu.bebida,menu.precio,menu.imagen)))
}

listarMenus();