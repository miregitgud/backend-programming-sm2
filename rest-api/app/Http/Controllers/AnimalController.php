<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller

{
    public $animals = ['Kucing' , 'Ayam' , 'Ikan'];

    public function index() {
        foreach ($this->animals as $animal) {
        echo $animal . PHP_EOL;
        }
    }

    public function store(Request $request) {
        array_push($this->animals, $request->nama);
        $this->index();
    }

    public function update(Request $request, $id) {
        $this->animals[$id] = $request->nama;
        $this->index();
    }

    public function destroy($id) {
        unset($this->animals[$id]);
        $this->index();
    }
}

// Ayyash Muhammad Jibril - 0110221018
// TI 01
