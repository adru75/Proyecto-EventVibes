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
    const sql = "SELECT menus.id,menus.nombre, menus.descripcion, menus.precio, menus.imagen, platos.nombre AS platoPrincipal,bebidas.nombre AS bebida FROM menus_db.menus INNER JOIN bebidas ON menus.bebida = bebidas.id JOIN platos ON menus.platoPrincipal = platos.id;";

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
    const {nombre, descripcion, imagen, platoPrincipal, bebida, precio} = req.body;

    // crear la consulta
    const sql = 'INSERT INTO menus (nombre, descripcion, imagen, platoPrincipal, bebida, precio) VALUES (?, ?, ?, ?, ?, ?)';

    // Pasar consulta
    db.query(sql, [nombre, descripcion, imagen, platoPrincipal, bebida, precio], (error, result)=>{
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
    const {nombre, descripcion, imagen, platoPrincipal, bebida, precio} = req.body;

    // Consulta con marcadores 
    const sql = 'UPDATE menus SET nombre = ?, descripcion = ?, imagen = ?, platoPrincipal = ?, bebida = ?, precio = ? WHERE id = ?';

    // Pasar la consulta
    db.query(sql, [nombre, descripcion, imagen, platoPrincipal, bebida, precio, id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Menu actualizado"});
   })
};

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
};

//7- createPlato
const createPlato = (req, res)=>{
    //Desestructuramos la reques
    const {nombre, descripcion} = req.body;

    // crear la consulta
    const sql = 'INSERT INTO platos (nombre, descripcion) VALUES (?, ?)';

    // Pasar consulta
    db.query(sql, [nombre, descripcion], (error, result)=>{
         //Si sucede un error
         if(error){throw error};
         //Si todo sale bien
         res.json({mensaje: "Plato creado"});
    })
}

//8- createBebida
const createBebida = (req, res)=>{
    //Desestructuramos la reques
    const {nombre, descripcion} = req.body;

    // crear la consulta
    const sql = 'INSERT INTO bebidas (nombre, descripcion) VALUES (?, ?)';

    // Pasar consulta
    db.query(sql, [nombre, descripcion], (error, result)=>{
         //Si sucede un error
         if(error){throw error};
         //Si todo sale bien
         res.json({mensaje: "Bebida creada"});
    })
}

//9- getAllBebidas
const getAllBebidas = (req, res)=>{
    //Consulta para traer todos los menus
    const sql = "SELECT * FROM menus_db.bebidas;";

    //Enviar la consulta a la base de datos
    db.query(sql, (error, results)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(results);
    });
};

//10- getAllPlatos
const getAllPlatos = (req, res)=>{
    //Consulta para traer todos los menus
    const sql = "SELECT * FROM menus_db.platos;";

    //Enviar la consulta a la base de datos
    db.query(sql, (error, results)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(results);
    });
};

//11- getBebidaById
const getBebidaById = (req,res)=>{
    // Obtener id solicitado
    //Notacion de desestructuracion {id}
    const {id} = req.params;

    // consulta a la bbdd
    const sql = 'SELECT * FROM bebidas WHERE id = ?'

    // Enviar la consulta
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(result);
    })
};
//12- getPlatoById
const getPlatoById = (req,res)=>{
    // Obtener id solicitado
    //Notacion de desestructuracion {id}
    const {id} = req.params;

    // consulta a la bbdd
    const sql = 'SELECT * FROM platos WHERE id = ?'

    // Enviar la consulta
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json(result);
    })
};

//13- updatePlato
const updatePlato = (req, res)=>{
    //Desestructurar la peticion
    const {id} = req.params;
    const {nombre, descripcion} = req.body;

    // Consulta con marcadores 
    const sql = 'UPDATE platos SET nombre = ?, descripcion = ?  WHERE id = ?';

    // Pasar la consulta
    db.query(sql, [nombre, descripcion, id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Plato actualizado"});
   })
};

//14- updateBebida
const updateBebida = (req, res)=>{
    //Desestructurar la peticion
    const {id} = req.params;
    const {nombre, descripcion} = req.body;

    // Consulta con marcadores 
    const sql = 'UPDATE bebidas SET nombre = ?, descripcion = ?  WHERE id = ?';

    // Pasar la consulta
    db.query(sql, [nombre, descripcion, id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Bebida actualizada"});
   })
};


//15- deletePlato
const deletePlato = (req, res)=>{
    //desestructuracion 
    const {id} = req.params;

    // Consulta sql
    const sql = 'DELETE FROM platos WHERE id = ?';

    // Pasamos la consulta a la base de datos
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Plato eliminado:"+id});
    })
};

//16- deleteBebida
const deleteBebida = (req, res)=>{
    //desestructuracion 
    const {id} = req.params;

    // Consulta sql
    const sql = 'DELETE FROM bebidas WHERE id = ?';

    // Pasamos la consulta a la base de datos
    db.query(sql, [id], (error, result)=>{
        //Si sucede un error
        if(error){throw error};
        //Si todo sale bien
        res.json({mensaje: "Bebida eliminada:"+id});
    })
};
// Exportamos el modulo
module.exports = {
    getAllMenus,
    getAllBebidas,
    getAllPlatos,
    getMenuById,
    getPlatoById,
    getBebidaById,
    createMenu,
    createPlato,
    createBebida,
    updateMenu,
    updatePlato,
    updateBebida,
    deleteMenu,
    deletePlato,
    deleteBebida 
 
};


// Pasar a configurar db.js