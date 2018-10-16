var lista;

function Personaje(id, nombre, apellido, alias, edad, lado) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
}

function buscarHeroe(heroes, id) {

    var indice;

    for (var i = 0; i < heroes.length; i++) {

        if (heroes[i]['id'] == id) {
            indice = i;
            break;
        }
    }

    return indice;
}

function traerIdHeroe(e) {

    var texto = "";

    var td = e.target;

    var fila = td.parentElement;

    var celda = fila.firstChild;

    var id = parseInt(celda.textContent);

    var heroe = lista[buscarHeroe(lista, id)];

    ejecutarTransaccion("MostrarHeroe", heroe);

}

function altaPersonaje() {

    var id = parseInt(document.getElementById('id').value);
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var alias = document.getElementById('alias').value;
    var edad = parseInt(document.getElementById('edad').value);
    var lado;
    if (document.getElementById('rdoHeroe').checked) {
        lado = document.getElementById('rdoHeroe').value;
    }
    else {
        lado = document.getElementById('rdoVillano').value;
    }

    var nuevoPersonaje = new Personaje(id, nombre, apellido, alias, edad, lado);

    ejecutarTransaccion("Insertar", nuevoPersonaje);
}


function eliminarPersonaje() {


    var id = parseInt(document.getElementById('id').value);

    var heroe = lista[buscarHeroe(lista, id)];

    ejecutarTransaccion("Eliminar", heroe);

    $('#divFrm').hide("slow");
}

function modificarPersonaje() {
    //
    var id = parseInt(document.getElementById('id').value);
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var alias = document.getElementById('alias').value;
    var edad = parseInt(document.getElementById('edad').value);
    var lado;
    if (document.getElementById('rdoHeroe').checked) {
        lado = document.getElementById('rdoHeroe').value;
    }
    else {
        lado = document.getElementById('rdoVillano').value;
    }

    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado);

    console.log(personajeModificado);

    ejecutarTransaccion("Modificar", personajeModificado);

    $('#divFrm').hide("slow");

}