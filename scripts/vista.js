var btnAlta;
var divFrm;
var frmAlta;
var divInfo;
var btnCancelar;

window.onload = asignarEventos;

function asignarEventos() {

    btnAlta = document.getElementById('btnAlta');

    divInfo = document.getElementById('Info');

    divFrm = document.getElementById('divFrm');

    btnAlta.onclick = function () {
        ejecutarTransaccion("Mostrar");
    }

    ejecutarTransaccion("actualizarLista");

}

function darAlta(e) {

    e.preventDefault();

    $('#divFrm').hide("slow");
    setSpinner();
    ejecutarTransaccion("Alta");
}

function mostrarFormulario(heroe) {

    var formulario = "";
    formulario += '<form action="" method="POST" id="frmAlta" height="500px" width="1000px">';
    formulario += '<table id="tablaFormulario">';
    formulario += '<tr><td><label for="id">Id: </label></td>';
    formulario += '<td><input type="text" name="id" id="id" autocomplete="off" pattern="[0-9]{3}" title="El id debe tener 3 digitos"  required></td></tr>';
    formulario += '<tr><td><label for="nombre">Nombre: </label></td>';
    formulario += '<td><input type="text" name="nombre" id="nombre" autocomplete="off" pattern="[a-zA-Z]{3,10}" title="El nombre debe tener solo letras y una longitud entre 3 y 10 caracteres" required></td></tr>';
    formulario += '<tr><td><label for="apellido">Apellido: </label></td>';
    formulario += '<td><input type="text" name="apellido" id="apellido" autocomplete="off" pattern="[a-zA-Z]{3,10}" title="El apellido debe tener solo letras y una longitud entre 3 y 10 caracteres" required></td></tr>';
    formulario += '<tr><td><label for="alias">Alias: </label></td>';
    formulario += '<td> <input type="text" name="alias" id="alias" autocomplete="off" pattern="[a-zA-Z]{3,10}" title="El alias debe tener solo letras y una longitud entre 3 y 10 caracteres" required></td></tr>';
    formulario += '<tr><td><label for="edad">Edad: </label></td>';
    formulario += '<td><input type="text" name="edad" id="edad" autocomplete="off" pattern="[0-9]{1,3}" title="La edad debe tener entre 1 y 3 digitos" required></td></tr>';
    formulario += '<tr><td><label for="edad">Editorial: </label></td>';
    formulario += '<td><select name="editorial" id="selEditorial"> <option value="dc">DC</option><option value="marvel">Marvel</option></select></td></tr>';
    formulario += '<tr><td><input type="radio" name="lado" id="rdoHeroe" value="Heroe" checked>Heroe</td>';
    formulario += '<td><input type="radio" name="lado" id="rdoVillano" value="Villano">Villano</td></tr>';

    // Si viene un heroe por parametro termina de armar un formulario para baja o modificación, sino lo arma para alta
    if (heroe) {

        formulario += '<tr><td><input type="button" id="btnEliminar" value="Eliminar" class="puntero" ></td><td><input type="button" id="btnModificar" value="Modificar" class="puntero" ></td><td> <input type="button" value="Cancelar" id="btnCancelar" class="puntero" ></td></tr>';
        formulario += '</table></form>';

        document.getElementById('divFrm').innerHTML = formulario;

        frmAlta = document.getElementById('frmAlta');
        document.getElementById('id').readonly = true;
        document.getElementById('id').value = heroe.id;
        document.getElementById('nombre').value = heroe.nombre;
        document.getElementById('apellido').value = heroe.apellido;
        document.getElementById('alias').value = heroe.alias;
        document.getElementById('edad').value = heroe.edad;
        if (heroe.lado == "Heroe") {
            document.getElementById('rdoHeroe').checked = true;
        }
        else {
            document.getElementById('rdoVillano').checked = true;
        }

        $('#divFrm').show("slow");
        $('#divTabla').slideUp("slow");  
        

        document.getElementById("id").readOnly = true;
        document.getElementById('nombre').focus();

        document.getElementById('btnEliminar').addEventListener('click', function () {

            if (confirm("Esta seguro que desea eliminar a " + heroe.alias + "?")) {
                ejecutarTransaccion("Baja");
            }
            return false;

        }, false);

        document.getElementById('btnModificar').addEventListener('click', function () {

            if (confirm("Esta seguro que desea modificar a " + heroe.alias + "?")) {
                ejecutarTransaccion("Modificacion");
            }
            return false;

        }, false);

    }

    else {

        formulario += '<tr><td><input type="submit" value="Dar de Alta" id="btnAgregar" class="puntero" ></td><td> <input type="button" value="Cancelar" id="btnCancelar" class="puntero" ></td></tr>';
        formulario += '</table></form>';

        document.getElementById('divFrm').innerHTML = formulario;

        frmAlta = document.getElementById('frmAlta');
        frmAlta.addEventListener('submit', darAlta, false);

        $('#divFrm').show("slow");
        $('#divTabla').slideUp("slow");

        document.getElementById('id').focus();

    }

    btnCancelar = document.getElementById('btnCancelar');    

    btnCancelar.onclick = function () {
        $('#divFrm').hide("slow");
        $('#divTabla').slideDown("slow");
    }

}

function setSpinner(){
    var cuerpoTabla = document.getElementById('bodyTabla');
    cuerpoTabla.innerHTML = '<img src="images/spinner.gif"/>'
}
function actualizarTabla(lista) {

    var cuerpoTabla = document.getElementById('bodyTabla');

    var filasTabla = "";

    for (var i = 0; i < lista.length; i++) {
        filasTabla += "<tr><td>" + lista[i]['id'] + "</td><td>" + lista[i]['nombre'] + "</td><td>" + lista[i]['apellido'] + "</td><td>" + lista[i]['alias'] + "</td><td>" + lista[i]['edad'] + "</td><td>" + lista[i]['lado'] + "</td></tr>";
    }

    cuerpoTabla.innerHTML = filasTabla;

    $('#divTabla').fadeIn("slow");

    agregarManejadoresCeldas();

}

function agregarManejadoresCeldas() {

    var bodyTabla = document.getElementById("bodyTabla");
    var celdas = bodyTabla.getElementsByTagName('td');

    for (var i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('click', traerIdHeroe);
    }
    // cambio el puntero del mouse para el cuerpo de la tabla
    $("#bodyTabla").css("cursor", "pointer");
}


