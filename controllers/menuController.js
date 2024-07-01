/* El controlador tendrá los cambios mas importantes y es el hara el tratamiento de la informacion
Metodos:
-getAllMenus
-getMenuById
-createMenu
-updateMenu
-deleteMenu */


//1- Importar el modulo db
//El objeto db posee los metodos para conectar con la base de datos
//Es la conexion 
const db = require("../db/db.js");

//2- getAllMenus
const getAllMenus = (req, res)=>{
    //Consulta para traer todos los menus
    const sql = "SELECT * FROM menus";

    //Enviar la consulta a la base de datos
    db.query(sql, (error, results)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(results);
    });
};


//3- getMenuById
const getMenuById = (req,res)=>{
    // Obtener id solicitado
    //Notacion de desestructuracion {id}
    const {id} = req.params;

    // consulta a la bbdd
    const sql = 'SELECT * FROM menus WHERE id = ?'

    // Enviar la consulta
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(result);
    })
}


//4- createMenu
const createMenu = (req, res)=>{
    //Desestructuramos la reques
    const {nombre, platoPrincipal, bebida, precio} = req.body;

    // crear la consulta
    const sql = 'INSERT INTO menus (nombre, platoPrincipal, bebida, precio) VALUES (?, ?, ?, ?)';

    // Pasar consulta
    db.query(sql, [nombre, platoPrincipal, bebida, precio], (error, result)=>{
         //Si sucede un error
         if(error){throw error};
         //Si todo sale bien
         res.json({mensaje: "Menu creado"});
    })
}


//5- updateMenu
const updateMenu = (req, res)=>{
    //Desestructurar la peticion
    const {id} = req.params;
    const {nombre, platoPrincipal, bebida, precio} = req.body;

    // Consulta con marcadores 
    const sql = 'UPDATE menus SET nombre = ?, platoPrincipal = ?, bebida = ?, precio = ?  WHERE id = ?';

    // Pasar la consulta
    db.query(sql, [nombre, platoPrincipal, bebida, precio, id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Menu actualizado"});
   })
}

//6- deleteMenu
const deleteMenu = (req, res)=>{
    //desestructuracion 
    const {id} = req.params;

    // Consulta sql
    const sql = 'DELETE FROM menus WHERE id = ?';

    // Pasamos la consulta a la base de datos
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Menu eliminado"});
    })
}

// Exportamos el modulo
module.exports = {
    getAllMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu 
};


// Pasar a configurar db.js