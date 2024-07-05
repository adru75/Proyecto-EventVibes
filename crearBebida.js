
import { conexionAPI } from "./conexionAPI.js";


// ----------- Bebidas
const formulario = document.querySelector("[data-formulario-bebida]");

async function crearBebida(evento) {

    evento.preventDefault();
    const nombre = document.querySelector("[data-bebida-nombre]").value;
    const descripcion = document.querySelector("[data-bebida-descripcion]").value;

    await conexionAPI.enviarBebida(nombre,descripcion);

    window.location.href="/menusVistaAdmi.html";
}

formulario.addEventListener("submit",evento => crearBebida(evento));


// ---------- Platos
const formularioPlato = document.querySelector("[data-formulario-plato]");

async function crearPlato(evento) {

    evento.preventDefault();
    const nombre = document.querySelector("[data-plato-nombre]").value;
    const descripcion = document.querySelector("[data-plato-descripcion]").value;

    await conexionAPI.enviarPlato(nombre,descripcion);

    window.location.href="/menusVistaAdmi.html";
}

formularioPlato.addEventListener("submit",evento => crearPlato(evento));

// --------- Menu
const formularioMenu = document.querySelector("[data-formulario-menu]");

async function crearMenu(evento) {

    evento.preventDefault();
    const nombre = document.querySelector("[data-menu-nombre]").value;
    const descripcion = document.querySelector("[data-menu-descripcion]").value;
    const platoPrincipal = document.querySelector("[data-menu-platoPrincipal]").value;
    const bebida = document.querySelector("[data-menu-bebida]").value;
    const precio = document.querySelector("[data-menu-precio]").value;
    const imagen = document.querySelector("[data-menu-imagen]").value;


    await conexionAPI.enviarMenu(nombre,descripcion,platoPrincipal,bebida,precio,imagen);

    window.location.href="/menusVistaAdmi.html";
}

formularioMenu.addEventListener("submit",evento => crearMenu(evento));



