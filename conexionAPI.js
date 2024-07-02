async function listarMenus() {
    const conexion = await fetch("http://127.0.0.1:3000/menus/list", {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'},
        mode: 'cors'
    });

    const conexionConvertida = conexion.json();

    console.log(conexionConvertida);
    return conexionConvertida;
}

export const conexionAPI= {
    listarMenus
}

//listarMenus();