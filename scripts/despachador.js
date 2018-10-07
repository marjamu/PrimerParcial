
// estas funciones utilizan el localStorage. Habria que hace un despachador con las mismas funciones pero que le peguen al servidor


function traerListaHeroes() {

    // Acá va el código de la peticion ajax de la ista de heroes al servidor (GET)

    var listaHeroes = JSON.parse(localStorage.getItem('listaHeroes'));

    if (listaHeroes == null) {

        listaHeroes = [];
    }

    return listaHeroes;
}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)

    var listaHeroes = JSON.parse(localStorage.getItem('listaHeroes'));

    if (listaHeroes == null) {
        listaHeroes = [];
    }

    listaHeroes.push(heroe);

    listaHeroes = localStorage.setItem('listaHeroes', JSON.stringify(listaHeroes));

    ejecutarTransaccion('actualizarLista');
}

function eliminarHeroe(heroe) {


    // Acá va el código de la peticion ajax para eliminar un heroe (POST)

    var listaHeroes = JSON.parse(localStorage.getItem('listaHeroes'));

    var indice = buscarHeroe(listaHeroes, heroe.id);

    listaHeroes.splice(indice, 1);

    localStorage.setItem('listaHeroes', JSON.stringify(listaHeroes));

    ejecutarTransaccion('actualizarLista');

}

function modificarHeroe(heroe) {

    // Acá va el código de la peticion ajax para modificar un heroe (POST)

    var listaHeroes = JSON.parse(localStorage.getItem('listaHeroes'));

    var indice = buscarHeroe(listaHeroes, heroe.id);

    listaHeroes[indice] = heroe;

    localStorage.setItem('listaHeroes', JSON.stringify(listaHeroes));

    ejecutarTransaccion('actualizarLista');

}