<?php

$name    = $_REQUEST['name'];
$antwort = $_REQUEST['antwort'];

// Daten speichern



// Ausgabe
if ($antwort == 'ajax') {
    // GEwonnen
    echo '<h3>Gewonnen</h3>';
} else {
    echo '<h3>Leider nicht ' . $name . '</h3>';
}