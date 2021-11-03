<?php

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

Route::get('/seasons','App\Http\Controllers\SeasonsController@index');
Route::post('/seasons','App\Http\Controllers\SeasonsController@store');
Route::put('/seasons/{id}','App\Http\Controllers\SeasonsController@update');
Route::delete('/seasons/{id}','App\Http\Controllers\SeasonsController@destroy');
Route::get('/projects','App\Http\Controllers\ProjectsController@index');
Route::post('/projects','App\Http\Controllers\ProjectsController@store');
Route::put('/projects/{id}','App\Http\Controllers\ProjectsController@update');
Route::delete('/projects/{id}','App\Http\Controllers\ProjectsController@destroy');