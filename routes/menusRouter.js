//Enrutador, Endpoints

//1- Importar modulo express
const express = require("express");

//2- Instanciar Router de express
const router = express.Router();

//3- Importamos el controlador de funciones
const menuController = require("../controllers/menuController");

//4- Plantear las solicitudes GET, POST, PUT, DELETE
// Ruta del listado menus
router.get("/list", menuController.getAllMenus);

// Ruta del listado bebidas
router.get("/listBebidas", menuController.getAllBebidas);

// Ruta del listado platos
router.get("/listPlatos", menuController.getAllPlatos);

// Ruta para consultas parametricas
router.get("/:id", menuController.getMenuById);

// Ruta para consultas parametricas
router.get("/bebida/:id", menuController.getBebidaById);

// Ruta para consultas parametricas
router.get("/plato/:id", menuController.getPlatoById);

// Ruta para crear menus
router.post("/create", menuController.createMenu);

// Ruta para crear plato
router.post("/createPlato", menuController.createPlato);

// Ruta para crear bebida
router.post("/createBebida", menuController.createBebida);

// Ruta para actualizar menu
router.put("/:id", menuController.updateMenu);

// Ruta para actualizar plato
router.put("/plato/:id", menuController.updatePlato);

// Ruta para actualizar bebida
router.put("/bebida/:id", menuController.updateBebida);

// Ruta para eliminar menu
router.delete("/:id", menuController.deleteMenu);

// Ruta para eliminar Bebida
router.delete("/bebida/:id", menuController.deleteBebida);

// Ruta para eliminar Bebida
router.delete("/plato/:id", menuController.deletePlato);

// 5- Exportamos el modulo
module.exports = router;

// 6- Pasamos a menuController

