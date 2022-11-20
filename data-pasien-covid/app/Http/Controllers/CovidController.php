<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class CovidController extends Controller
{
    // method index - get all resource 
    // by using eloquent all to show all data available
    // there is also a handler if the current table is empty

    public function index() {
        $patient = Patient::all();
        if($patient->isNotEmpty()) {
            $data = [
                'message' => 'Showing all patients data.',
                'data' => $patient
            ];
            return response()->json($data, 200);
        }
        else{
            $data = [
                'message' => 'No data exists in this collection, try adding one.'
            ];
            return response()->json($data,404);
        }
        
    }

    // showing details of a patient data with certain id
    // using eloquent find
    // there is also a handler if the id requested is not found

    public function show($id) {
        $patient = Patient::find($id);

        if($patient) {
            $data = [
                'message' => 'Showing data of patient id ' . $id . '.',
                'data' => $patient
            ];
            return response()->json($data,200);
        }
        else {
            $data = [
                'message' => 'Data not found, double check your input and try again.'
            ];
            return response()->json($data,404);
        }
    }

    // store method - adding patient data
    // inputs will be validated as all columns are needed to be filled with the corresponding data type

    public function store(Request $request) {

        $request->validate([
            'name'=>'required|max:191',
            'phone'=>'numeric|required|',
            'address'=>'required|max:191',
            'status'=>'required|max:191',
            'in_date_at'=>'required|max:191|date',
            'out_date_at'=>'max:191|date'            
        ]);

        $input = [
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_at' => $request->in_date_at,
            'out_date_at' => $request->out_date_at ?? $request->in_date_at
        ];

        $patient = Patient::create($input);

        $data = [
            'message' => 'A new patient data has been created succesfully.',
            'data' => $patient
        ];

        return response() -> json($data, 201);
    }

    // editing patients data with certain id
    // with the eloquent find 
    // there is also a handler if the id requested is not found
    // inputs will be validated as all columns are needed to be filled with the corresponding data type
    // if some or all data are not inputted in the request, it will return the current data existing
    // as there are no changes made

    public function update(request $request, $id) {
        $patient = Patient::find($id);
        $success = [
            'message' => 'Patient data with id of ' . $id . ' has been updated succesfully.',
            'data' => $patient
        ];
        $fail = [
            'message' => 'Data not found, double check your input and try again.'
        ];
        if($patient) {
            $request->validate([
                'name'=>'max:191',
                'phone'=>'numeric',
                'address'=>'max:191',
                'status'=>'max:191',
                'in_date_at'=>'max:191|date',
                'out_date_at'=>'max:191|date'
            ]);
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patient->out_date_at
            ];
            $patient->update($input);
            return response() -> json($success, 201);
        }
        else {
            return response() -> json($fail, 404);
        }
    }

    // deleting patients data with certain id
    // with the eloquent find
    // ALL data containing the id will be completely removed
    // there is also a handler if the id requested is not found

    public function destroy($id) {
        $patient = Patient::find($id);

        $success = [
            'message' => 'Patient data with id of ' . $id . ' has been deleted succesfully.'
        ];

        $fail = [
            'message' => 'Data not found, double check your input and try again.'
        ];

        if($patient) {
            $patient->delete();
            return response() -> json($success, 201);
        }
        else {
            return response() -> json($fail, 404);
        }
    }

    // showing patients data with certain name
    // with the eloquent where     
    // the name inputted is not needed to be very specific as the function is using LIKE
    // if you still somehow get the error message
    // then you are either do not know anything about the data stored,
    // testing the destroy function,
    // or there is something seriously wrong about you

    public function search($name) {
        $patient = Patient::where('name', 'like', '%' . $name . '%')
        ->orderBy('id')
        ->get();
        
        $success =[
            'message' => 'Showing data of patient(s) name containing ' . $name . '.',
            'data' => $patient
        ];
        $fail = [
            'message' => 'Data not found, double check your input and try again.'
        ];

        if($patient->isNotEmpty()) {
            return response()->json($success, 200);
        }
        else{
            return response()->json($fail, 404);
        }
    }

    // showing patients data with "POSITIVE" status
    // with the eloquent where

    public function positive() {
        $patient = Patient::where('status', 'Positive')
        ->orderBy('id')
        ->get();

        $success =[
            'message' => 'Showing data of positive patient(s).',
            'data' => $patient
        ];
        $fail = [
            'message' => 'There are currently no positive patient data exists.'
        ];

        if($patient->isNotEmpty()) {
            return response()->json($success, 200);
        }
        else{
            return response()->json($fail, 404);
        }
    }

    // showing patients data with "RECOVERED" status
    // with the eloquent where

    public function recovered() {
        $patient = Patient::where('status', 'Recovered')
        ->orderBy('id')
        ->get();

        $success =[
            'message' => 'Showing data of recovered patient(s).',
            'data' => $patient
        ];
        $fail = [
            'message' => 'There are currently no recovered patient data exists.'
        ];

        if($patient->isNotEmpty()) {
            return response()->json($success, 200);
        }
        else{
            return response()->json($fail, 404);
        }
    }

    // showing patients data with "DEAD" status
    // with the eloquent where

    public function dead() {
        $patient = Patient::where('status', 'Dead')
        ->orderBy('id')
        ->get();

        $success =[
            'message' => 'Showing data of dead patient(s).',
            'data' => $patient
        ];
        $fail = [
            'message' => 'There are currently no dead patient data exists.'
        ];

        if($patient->isNotEmpty()) {
            return response()->json($success, 200);
        }
        else{
            return response()->json($fail, 404);
        }
    }
}
