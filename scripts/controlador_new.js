var Controlador = /** @class */ (function () {
    function Controlador(vista, despachador) {
        this.vista = vista;
        this.despachador = despachador;
    }
    Controlador.prototype.mostrar = function () {
        this.vista.mostrarFormulario();
    };
    Controlador.prototype.MostrarHeroe = function (heroe) {
        vista.mostrarFormulario(heroe);
    };
    Controlador.prototype.Alta = function () {
        vista.altaPersonaje();
    };
    Controlador.prototype.Baja = function () {
        vista.eliminarPersonaje();
    };
    Controlador.prototype.Modificacion = function () {
        vista.modificarPersonaje();
    };
    Controlador.prototype.Insertar = function (heroe) {
        despachador.insertarHeroe(heroe);
    };
    Controlador.prototype.Eliminar = function (heroe) {
        despachador.eliminarHeroe(heroe);
    };
    Controlador.prototype.Modificar = function (heroe) {
        despachador.modificarHeroe(heroe);
    };
    Controlador.prototype.actualizarLista = function () {
        despachador.traerListaHeroes(function (l) {
            vista.lista = l;
            vista.actualizarTabla(lista);
        });
    };
    return Controlador;
}());
