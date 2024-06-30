//Enrutador, Endpoints

//1- Importar modulo express
const express = require("express");

//2- Instanciar Router de express
const router = express.Router();

//3- Importamos el controlador de funciones
const menuController = require("../contollers/menuController");

//4- Plantear las solicitudes GET, POST, PUT, DELETE
// Ruta del listado general
router.get("/list", menuController.getAllMenus);

// Ruta para consultas parametricas
router.get("/:id", menuController.getMenuById);

// Ruta para crear menus
router.post("/create", menuController.createMenu);

// Ruta para actualizar 
router.put("/:id", menuController.updateMenu);

// Ruta para eliminar menu
router.delete("/:id", menuController.deleteMenu);

// 5- Exportamos el modulo
module.exports = router;

// 6- Pasamos a menuController

