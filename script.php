<?php 

    $n1 = $_GET["n1"]; 
    $n2 = $_GET["n2"];
    $suma = $n1 + $n2;
    $resta = $n1 - $n2;
    $multiplicacion = $n1 * $n2;

    /* echo "Vacunados de la semana"; */

    /* echo "(
        array(
            nombre => Pedro,
            edad => 40, 
            sexo => m
        ),
        array(
            nombre => Juan,
            edad => 20, 
            sexo => m )
    )"; */

    /* $contactos = array(
        array(
            'nombre' => "Pedro",
            'edad' => 40, 
            'sexo' => 'm' 
        ),
        array(
            'nombre' => "Juan",
            'edad' => 20, 
            'sexo' => 'm' ),
    ); */

    $operaciones = array( 'suma' => $suma, 'resta' => $resta, 'multiplicacion' => $multiplicacion );

    /* print_r($contactos); */
    echo json_encode($operaciones);
    /* para cambiar de un arreglo asociativo a un json */
    /* $contactos = json_encode($contactos);
    echo $contactos; */
 ?>