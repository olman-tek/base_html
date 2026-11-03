<?php

namespace App\Http\Controllers;

class SaludoController extends Controller
{
    public function index()
    {
        $mensaje = 'Hola mundo desde Laravel';
        $nombre = 'Olman';
        $asignatura = 'ISC-305 Programación Web';
        $carrera = 'Ingeniería en Sistemas';

        return view('hola', [
            'mensaje' => $mensaje,
            'nombre' => $nombre,
            'asignatura' => $asignatura,
            'carrera' => $carrera
        ]);
    }
}