
/* Esta función detecta el navegador 

XMLHttpRequest permite transferir datos del 
servidor a la página y viceversa*/
function obtenerAjax(){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhttp;
}

var ajax = obtenerAjax();

/* se puede obviar el tercer termino ya que es su valor 
por defecto ajax.open("GET","script.php", true);*/

function peticionServidor(){
    ajax.open("GET","script.php?" + obtenerQueryString());
    /* ajax.onreadystatechange detecta cualquier cambio en los estados. 
    Si se pone ajax.onreadystatechange(), se ejecuta la funcion. */

    /* Simplemente se está asignando a ajax.onreadystatechange ya que 
    el readyState del objeto cambió. */

    /* onreadystatechange determina que gestor de evento será llamado 
    cuando la propiedad readyState del objeto cambie 
    (en este caso respuestaServidor()). */
    ajax.onreadystatechange = respuestaServidor;
    ajax.send(null);
}


function respuestaServidor() {
    
    if (ajax.readyState == 4 && ajax.status == 200) {
        /* document.getElementById("resultado").innerHTML = ajax.responseText; */

        operaciones = JSON.parse(ajax.responseText);
        // var operaciones = JSON.parse(ajax.responseText);
        document.getElementById("suma").value = operaciones.suma;
        document.getElementById("resta").value = operaciones.resta;
        document.getElementById("multiplicacion").value = operaciones.multiplicacion;
    }
}

function obtenerQueryString(){
    var n1 = encodeURIComponent(document.getElementById("n1").value); 
    var n2 = encodeURIComponent(document.getElementById("n2").value);
    var query = "n1=" + n1 + "&n2=" + n2 + "&nocache=" + Math.random();
    return query;
}

contacto = {'nombre':'carlos','edad':40};