<?php 
    /* $resultado = $_GET["n1"] + $_GET["n2"]; */
    $resultado = isset($_GET("n1"))  + isset($_GET["n2"]);
    echo "El resultado es $resultado";
    /* echo "El resultado desde php"; */
?>