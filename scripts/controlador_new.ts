class Controlador {
    private vista:Vista;
    private despachador:Despachador;
    constructor(vista:Vista,despachador:Despachador){
        this.vista = vista;
        this.despachador = despachador
    }
    public mostrar():void{
        this.vista.mostrarFormulario();   
    }

    public MostrarHeroe(heroe:Heroe):void{
        vista.mostrarFormulario(heroe);
    }

    public Alta():void{
        vista.altaPersonaje();
    }

    public Baja():void{
        vista.eliminarPersonaje();
    }

    public Modificacion():void{
        vista.modificarPersonaje();
    }

    public Insertar(heroe:Heroe):void{
        despachador.insertarHeroe(heroe);
    }

    public Eliminar(heroe:Heroe):void{
        despachador.eliminarHeroe(heroe);
    }

    public Modificar(heroe:Heroe):void{
        despachador.modificarHeroe(heroe);
    }

    public actualizarLista():void{
        despachador.traerListaHeroes(function(l){
            vista.lista = l;
            vista.actualizarTabla(lista);
        });
    }
}