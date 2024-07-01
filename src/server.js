// Punto principal de acceso al servidor 


//1- Importacion de express
const express = require("express");

//2- Instanciar express
const app = express();

//3- Importacion del modulo de las rutas
const menusRoutes = require("../routes/menusRouter");

//4- Declaramos el puerto 
const PORT = 3000;

//5- Transformacion del body a formato legible 
app.use(express.json());

//6- Prefijo principal de las rutas
app.use("/menus", menusRoutes);

//7- Inicializamos 
app.listen(PORT, ()=>{console.log("Servidor escuchando en puerto 3000");});


//8- Codificar menusRouter