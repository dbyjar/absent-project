<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\ShiftAndSalaryController;
use App\Http\Controllers\API\AttendanceController;

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

// AUTH Admin
Route::post('login', [AuthController::class, 'authenticate']);
Route::post('register', [AuthController::class, 'register']);

// for Attendance
Route::get('shift_select', [ShiftAndSalaryController::class, 'index']);
Route::post('absent', [AttendanceController::class, 'absent']);
Route::post('get_excel', [AttendanceController::class, 'getExcel']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('get_user', [AuthController::class, 'getUser']);

    // Employee
    Route::prefix('employee')->group(function () {
        Route::get('/', [EmployeeController::class, 'index']);
        Route::post('/', [AuthController::class, 'register']);
        Route::get('/{id}', [EmployeeController::class, 'show']);
        Route::delete('/{id}', [EmployeeController::class, 'destroy']);
        Route::put('/{id}', [EmployeeController::class, 'update']);
    });

    Route::resource('job', JobController::class, [
        'only' => ["index", "show", "store", "update", "destroy"]
    ]);

    Route::resource('shift_and_salary', ShiftAndSalaryController::class, [
        'only' => ["index", "show", "store", "destroy", "update"]
    ]);

    Route::prefix('attendance')->group(function () {
        Route::get('/', [AttendanceController::class, 'index']);
        Route::post('show_data', [AttendanceController::class, 'show']);
        Route::post('absent', [AttendanceController::class, 'absent']);
    });
});