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


async function enviarBebida(nombre,descripcion) {
    const conexion = await fetch("http://localhost:3000/menus/createBebida",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            descripcion:descripcion
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarPlato(nombre,descripcion) {
    const conexion = await fetch("http://localhost:3000/menus/createPlato",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            descripcion:descripcion
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarMenu(nombre,descripcion,platoPrincipal,bebida,precio,imagen) {
    const conexion = await fetch("http://localhost:3000/menus/create",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            descripcion:descripcion,
            platoPrincipal:platoPrincipal,
            bebida:bebida,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}



export const conexionAPI= {
    listarMenus,
    listarPlatos,
    listarBebidas,
    enviarBebida,
    enviarPlato,
    enviarMenu
}

//listarMenus();