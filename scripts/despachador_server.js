const server_url = "http://localhost:3000/";
var xhr;

function traerListaHeroes(callback) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            if(this.status == 200){
                var resp = JSON.parse(this.response); 
                console.log(resp.message);
                //refrescarTabla(resp.data);
                callback(resp.data);
                //return resp.data;
            }
        }
        return null;
    };
    var url = server_url + "traer?collection=heroes";
    xhr.open("GET",url,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    //return listaHeroes;
}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
    var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    $.ajax({
        url: server_url + "agregar", 
        method:'POST',
        data:JSON.stringify(data),
        contentType: 'application/json',
        //dataType: 'application/json',
        success: function(result){
           console.log(result.message);
           ejecutarTransaccion('actualizarLista');
        },
        error: function(jqXHR,textStatus,errorThrown ){
            console.log(errorThrown);
        },
        complete:function(jqXHR, textStatus){
            console.log(textStatus);
            ejecutarTransaccion('actualizarLista');
        }
    });
}

function eliminarHeroe(heroe) {
    var data = {
        "collection":"heroes",
        "id": heroe.id
    }

    $.ajax({
        url: server_url + "eliminar", 
        method:'POST',
        data:JSON.stringify(data),
        contentType: 'application/json',
        //dataType: 'application/json',
        success: function(result){
           console.log(result.message);
           ejecutarTransaccion('actualizarLista');
        },
        error: function(jqXHR,textStatus,errorThrown ){
            console.log(errorThrown);
        },
        complete:function(jqXHR, textStatus){
            console.log(textStatus);
        }
    });
}

function modificarHeroe(heroe) {

      // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
      var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    $.ajax({
        url: server_url + "modificar", 
        method:'POST',
        data:JSON.stringify(data),
        contentType: 'application/json',
        //dataType: 'application/json',
        success: function(result){
           console.log(result.message);
           ejecutarTransaccion('actualizarLista');
        },
        error: function(jqXHR,textStatus,errorThrown ){
            console.log(errorThrown);
        },
        complete:function(jqXHR, textStatus){
            console.log(textStatus);
        }
    });

}