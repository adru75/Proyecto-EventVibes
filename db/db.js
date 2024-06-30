//1- Importamos el modulo mysql2
const mysql = require("mysql2");

//2- Configuracion de la conexion
const connection = mysql.createConnection({
    host:"localhost",
    user:"root", //root usuario por defecto, sino usar el usuario que colocamos en workbench
    password:"admin",
    port: 3306,
    //database: "menus_db"
});


connection.connect((err)=>{
    // En caso de error
    if(err){
        console.log("Error de conexión con el servidor: " + err);
        return;
    }

    //En caso de conectar bien
    console.log("Estado de conexión: CONECTADA");

    //Consulta sql
    const sql = 'CREATE DATABASE IF NOT EXISTS menus_db'

    //Verificamos y creamos la base de datos
    connection.query(sql, (err, results)=>{
        if (err){
            console.error('Error al crear la base de datos', err);
            return;
        }

        //Exito
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");
        
        //Nos ubicamos en la base de datos creafa
        connection.changeUser({database: "menus_db"}, (err)=>{
            //error
            if(err){
                console.error('Error al cambiar a la base de datos menus_db: ', err);
                return;
            }

            //En caso de estar todo ok
            const createTambleQuery = `
                CREATE TABLE IF NOT EXISTS menus (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    platoPrincipal VARCHAR(255) NOT NULL,
                    bebida VARCHAR(255) NOT NULL,
                    precio DOUBLE NOT NULL
                );
            `;


            //Pasanos la cnsulta a la bd
            connection.query(createTambleQuery, (err, results) =>{
                if (err){
                    console.error('Error al crear la tabla:', err);
                    return;
                }
                 //Exito
                console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");
            })
        })
    })
})


//Exportacion del modulo
module.exports = connection;
