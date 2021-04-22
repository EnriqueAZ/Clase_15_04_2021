
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
    ajax.open("GET","script.php?" + obtenerQueryString);
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

/* function calcular(){
    alert("Hola");
} */

function respuestaServidor() {
    
    if (ajax.readyState == 4 && ajax.status == 200) {
        /* try {
            var a = parseInt(document.f.n1.value),
                b = parseInt(document.f.n2.value);
            document.f.resultado.value = a + b;
          } catch (e) {
          } */
        document.getElementById("resultado").innerHTML = ajax.responseText;
    }
}

function obtenerQueryString(){
    n1 = encodeURIComponent(document.getElementById("n1").value); 
    n2 = encodeURIComponent(document.getElementById("n2").value);
    query = "n1=" + n1 + "&n2=" + n2 + "&nocache=" + Math.random();
    /* & separa variables */
    return query;
}