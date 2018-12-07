class Personaje{
    private id:number;
    private nombre:string;
    private apellido:string;
    private edad:number;

    constructor(id:number,nombre:string,apellido:string,edad:number){
        this.id=id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get Nombre():string{
        return this.nombre;
    }
    set Nombre(value:string){
        this.nombre = value;
    }
}

class Heroe extends Personaje{
    private alias:string;
    private lado:string;
    private editorial:string;

    constructor(id:number,nombre:string,apellido:string,alias:string,edad:number,lado:string,editorial:string){
        super(id,nombre,apellido,edad);
        this.alias = alias;
        this.lado = lado;
        this.editorial = editorial;
    }
}

var lista;

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
    var editorial = document.getElementById('selEditorial').value;
    var nuevoHeroe = new Heroe(id, nombre, apellido, alias, edad, lado,editorial);

    ejecutarTransaccion("Insertar", nuevoHeroe);
}

function eliminarPersonaje() {


    var id = parseInt(document.getElementById('id').value);

    var heroe = lista[buscarHeroe(lista, id)];

    ejecutarTransaccion("Eliminar", heroe);

    $('#divFrm').hide("slow");
    $('#divTabla').slideDown("slow");

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
    var editorial = document.getElementById('selEditorial').value;
    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado,editorial);

    console.log(personajeModificado);

    ejecutarTransaccion("Modificar", personajeModificado);

    $('#divFrm').hide("slow");
    $('#divTabla').slideDown("slow");

}