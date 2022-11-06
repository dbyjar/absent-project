<?php

namespace App\Http\Controllers\API;

use Auth;
use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->all();
        
        if ($request->user_role_id === 1 ) {
            $data['password'] = "admin123"; // default password
        } else {
            $data['password'] = "user123"; // default password
        }

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'nik' => 'required|string',
            'phone' => 'string',
            'birthdate' => 'date',
            'address' => 'string',
            'user_role_id'=> 'required|integer',
            'job_id'=> 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 500);
        }

        $user = User::create([
        	'name' => $request->name,
        	'email' => $request->email,
        	'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'birthdate' => $request->birthdate,
            'address' => $request->address,
            'user_role_id' => $request->user_role_id,
            'job_id' => $request->job_id,
            'nik' => $request->nik,
        ]);

        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'User created successfully',
                'data' => $user
            ]
        ], Response::HTTP_OK);
    }
 
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'results' => [
                    'success' => false,
                    'message' => $validator->messages()
                ]
            ], 500);
        }

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'results' => [
                        'success' => false,
                        'message' => [ 'failed' => ['Login credentials are invalid.']],
                    ]
                ], 400);
            }
        } catch (JWTException $e) {
            return $credentials;

            return response()->json([
                'results' => [
                    'success' => false,
                    'message' => [ 'failed' => ['Could not create token.']],
                ]
            ], 500);
        }
 	
        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'Success Login.',
                'token' => $token,
            ]
        ]);
    }
 
    public function logout(Request $request)
    {
        $validator = Validator::make($request->only('token'), [
            'token' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        try {
            JWTAuth::invalidate($request->token);
 
            return response()->json([
                'results' => [
                    'success' => true,
                    'message' => 'User has been logged out'
                ]
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'results' => [
                    'success' => false,
                    'message' => 'Sorry, user cannot be logged out'
                ]
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getUser()
    {
        $user = Auth::user() ?? JWTAuth::user();
 
        return response()->json([
            'results' => [
                'success' => false,
                'message' => 'Success load data users',
                'data' => $user
            ]
        ]);
    }
}
