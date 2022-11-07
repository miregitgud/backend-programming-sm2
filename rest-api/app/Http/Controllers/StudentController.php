<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // method index - get all resource 
    public function index() {
        $student = Student::all();
        // menggunakan model Student untuk select data
        if($student->isNotEmpty()) {
            $data = [
                'message' => 'Get all students',
                'data' => $student
            ];
    
    
            // menggunakan respon json laravel
            // otomatis set header content type json
            // otomatis mengubah data array ke json
            // mengatur status code
            return response()->json($data, 200);
        }
        else{
            $data = [
                'message' => 'No data exists in this database, try adding one.'
            ];
            return response()->json($data,404);
        }
        
    }

    // method show untuk menampilkan detail data student
    public function show($id) {
        $student = Student::find($id);

        if($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student
            ];
            return response()->json($data,200);
        }
        else {
            $data = [
                'message' => 'Data not found'
            ];
            return response()->json($data,404);
        }
    }

    // menambahkan resource student
    // membuat method store
    public function store(Request $request) {

        $request->validate([
            'nama'=>'required|max:191',
            'nim'=>'required|max:191',
            'email'=>'required|max:191',
            'jurusan'=>'required|max:191'
        ]);

        // menangkap request 
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        // menggunakan student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Student data has been created succesfully',
            'data' => $student
        ];

        // mengembalikan data (json) status code 201
        return response() -> json($data, 201);
    }

    // menambahkan resource student
    public function update(request $request, $id) {
        // menggunakan student untuk insert data
        $student = Student::find($id);
        $success = [
            'message' => 'Student data with id of ' . $id . ' has been updated succesfully',
            'data' => $student
        ];
        $fail = [
            'message' => 'Data not found'
        ];
        // menangkap request 
        if($student) {
            $student->nama = $request->nama ?? $student->nama;
            $student->nim = $request->nim ?? $student->nim;
            $student->email = $request->email ?? $student->email;
            $student->jurusan = $request->jurusan ?? $student->jurusan;
            $student->update();
            
            return response() -> json($success, 201);
        }
        else {
            return response() -> json($fail, 404);
        }
    }

    public function destroy($id) {
        $student = Student::find($id);

        $success = [
            'message' => 'Student data with id of ' . $id . ' has been deleted succesfully'
        ];

        $fail = [
            'message' => 'Data not found'
        ];

        if($student) {
            $student->delete();
            return response() -> json($success, 201);
        }
        else {
            return response() -> json($fail, 404);
        }
    }
}