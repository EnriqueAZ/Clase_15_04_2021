<!-- <-?php 
    /* $resultado = $_GET["n1"] + $_GET["n2"]; */
    /* $resultado = isset($_GET("n1"))  + isset($_GET["n2"]); */
    echo "El resultado es";
    /* echo "El resultado desde php"; */
?> -->

<?php 
    $n1 = $_GET["n1"];
    $n2 = $_GET["n2"];
    $resultado = $n1 + $n2;
    echo "Vacunados de la semana";
?>
<table border="1">
    <tr>
        <td>número 1</td>
        <td>número 2</td>
        <td>suma</td>
    </tr>
    <tr>
        <td><?= $n1 ?></td>
        <td><?= $n2 ?></td>
        <td><?= $resultado ?></td>
    </tr>
    <!-- <tr>
        <td>Martes</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Miercoles</td>
        <td>30</td>
    </tr> -->
</table>