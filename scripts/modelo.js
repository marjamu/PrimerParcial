var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personaje = /** @class */ (function () {
    function Personaje(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    return Personaje;
}());
var Heroe = /** @class */ (function (_super) {
    __extends(Heroe, _super);
    function Heroe(id, nombre, apellido, alias, edad, lado, editorial) {
        var _this = _super.call(this, id, nombre, apellido, edad) || this;
        _this.alias = alias;
        _this.lado = lado;
        _this.editorial = editorial;
        return _this;
    }
    return Heroe;
}(Personaje));
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
    var nuevoHeroe = new Heroe(id, nombre, apellido, alias, edad, lado, editorial);
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
    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado, editorial);
    console.log(personajeModificado);
    ejecutarTransaccion("Modificar", personajeModificado);
    $('#divFrm').hide("slow");
    $('#divTabla').slideDown("slow");
}
