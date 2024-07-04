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

async function listarPlatos() {
    const conexion = await fetch("http://127.0.0.1:3000/menus/listPlatos", {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'},
        mode: 'cors'
    });

    const conexionConvertida = conexion.json();

    console.log(conexionConvertida);
    return conexionConvertida;
}

async function listarBebidas() {
    const conexion = await fetch("http://127.0.0.1:3000/menus/listBebidas", {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'},
        mode: 'cors'
    });

    const conexionConvertida = conexion.json();

    console.log(conexionConvertida);
    return conexionConvertida;
}


export const conexionAPI= {
    listarMenus,
    listarPlatos,
    listarBebidas
}

//listarMenus();