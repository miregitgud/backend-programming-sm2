<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CovidController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class, 'login']); // Log in with the registered account (giving new token key)
Route::post('register', [AuthController::class, 'register']); // Registering new account (giving new token key)

Route::middleware(['auth:sanctum'])->group(function(){ // Listed below are the routes protected by the auth sanctum group
    Route::post('logout', [AuthController::class, 'logout']); // Log out from the session (deleting current token key)
    Route::get('/patient',[CovidController::class, 'index']); // Get all patients data
    Route::get('/patient/{id}',[CovidController::class, 'show']); // Get details of certain patients data
    Route::get('/patient/search/{name}',[CovidController::class, 'search']); // Get details of certain patients data using name
    Route::get('/patient/status/positive',[CovidController::class, 'positive']); // Get all positive patients data
    Route::get('/patient/status/recovered',[CovidController::class, 'recovered']); // Get all recovered patients data
    Route::get('/patient/status/dead',[CovidController::class, 'dead']); // Get all dead patients data
    Route::post('/patient', [CovidController::class, 'store']); // Add new patients data
    Route::put('/patient/{id}', [CovidController::class, 'update']); // Edit patients data
    Route::delete('/patient/{id}', [CovidController::class, 'destroy']); // Delete patients data
});
