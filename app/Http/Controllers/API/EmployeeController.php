<?php

namespace App\Http\Controllers\API;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\AbsentRequest;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request["limit"] ?? 10;
        $keyword = $request["search"];

        $user = User::when($keyword, function ($query) use ($keyword) {
            $query->where("name", "like", "%$keyword%");
        })->with("userRole", "job")->paginate($limit);
 
        return response()->json(['results' => $user]);
    }

    public function show($id)
    {
        $data = User::with('userRole', 'job')->findOrFail($id);

        return response()->json([
            "results" => [
                "success" => true,
                "message" => "success get data",
                "data" => $data
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'email' => 'required|email',
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

        $result = User::where('email', $request->email)->first();

        if ($result && $result->email === $request->email && $result->name !== $request->name) {
            return response()->json([
                'results' => [
                    'success' => false,
                    'message' => 'email already exists',
                ]
            ], 409);
        }

        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->nik = $request->nik;
        $user->birthdate = $request->birthdate;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->user_role_id = $request->user_role_id;
        $user->job_id = $request->job_id;
        $user->save();

        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'User updated successfully',
                'data' => $user
            ]
        ], Response::HTTP_OK);
    }

    public function destroy($id)
    {
        $data = User::where('id', $id)->delete();

        return response()->json([
            "results" => [
                "success" => true,
                "message" => "Delete data User is success",
            ]
        ]);
    }
}
