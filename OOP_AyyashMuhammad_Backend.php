<?php

# membuat class Animal
class Animal
{
    # property animals
    public array $animals;

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct(array $data)
    {
        $this->animals = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        # gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->animals as $animal) {
            echo $animal . PHP_EOL;
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data)
    {
        # gunakan method array_push untuk menambahkan data baru
        return array_push($this->animals, $data);
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $data)
    {
        return $this->animals[$index] = $data;
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        # gunakan method unset atau array_splice untuk menghapus data array
        unset($this->animals[$index]);
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(['Ayam', 'Ikan']);

echo "Index - Menampilkan seluruh hewan \n";
$animal->index();
echo "\n";

echo "Store - Menambahkan hewan baru \n";
$animal->store('Burung');
$animal->index();
echo "\n";

echo "Update - Mengupdate hewan \n";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "\n";

echo "Destroy - Menghapus hewan \n";
$animal->destroy(1);
$animal->index();
echo "\n";