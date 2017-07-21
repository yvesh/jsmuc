<?php

$kunden = [];

$bernd = new stdClass();

$bernd->vorname = 'Bernd';
$bernd->nachname = 'Huber';
$bernd->alter = 42;

$tanja = new stdClass();

$tanja->vorname = 'Tanja';
$tanja->nachname = 'Möller';
$tanja->alter = 45;

$kunden[] = $bernd;
$kunden[] = $tanja;

echo json_encode($kunden);

JSON:
