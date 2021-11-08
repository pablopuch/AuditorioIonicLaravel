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


Route::get('/composers','App\Http\Controllers\ComposersController@index');
Route::post('/composers','App\Http\Controllers\ComposersController@store');
Route::put('/composers/{id}','App\Http\Controllers\ComposersController@update');
Route::delete('/composers/{id}','App\Http\Controllers\ComposersController@destroy');


Route::get('/works','App\Http\Controllers\WorksController@index');
Route::post('/works','App\Http\Controllers\WorksController@store');
Route::put('/works/{id}','App\Http\Controllers\WorksController@update');
Route::delete('/works/{id}','App\Http\Controllers\WorksController@destroy');


Route::get('/playlists','App\Http\Controllers\PlaylistsController@index');
Route::post('/playlists','App\Http\Controllers\PlaylistsController@store');
Route::put('/playlists/{id}','App\Http\Controllers\PlaylistsController@update');
Route::delete('/playlists/{id}','App\Http\Controllers\PlaylistsController@destroy');

