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

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('get_user', [AuthController::class, 'getUser']);

    // Employee
    Route::prefix('employee')->group(function () {
        Route::get('/', [EmployeeController::class, 'index']);
    });

    Route::prefix('job')->group(function () {
        Route::get('/', [JobController::class, 'index']);
    });

    Route::prefix('shift_and_salary')->group(function () {
        Route::get('/', [ShiftAndSalaryController::class, 'index']);
        Route::post('/', [ShiftAndSalaryController::class, 'store']);
        Route::delete('/{id}', [ShiftAndSalaryController::class, 'destroy']);
        Route::get('/{id}', [ShiftAndSalaryController::class, 'show']);
        Route::put('/{id}', [ShiftAndSalaryController::class, 'update']);
    });

    Route::prefix('attendance')->group(function () {
        Route::get('/', [AttendanceController::class, 'index']);
        Route::post('show_data', [AttendanceController::class, 'show']);
        Route::post('absent', [AttendanceController::class, 'absent']);
    });
});