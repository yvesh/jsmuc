<?php


class Auto
{
    public $hersteller = '';
    public $modell = '';
    public $farbe = '';
    public $ps = '';

    function __construct($hersteller)
    {
        $this->hersteller = $hersteller;
    }

    function fahren() {
        return $this->ps * rand();
    }
}

$corsa = new Auto('Opel');

/**
 * Ist das der Sinn
 *
 * @param int $zahl Die Zahl
 * @return bool
 */
function isSinn($zahl) {
    return true;
}

isSinn(42)