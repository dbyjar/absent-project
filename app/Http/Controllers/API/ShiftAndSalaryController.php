<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShiftAndSalary;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class ShiftAndSalaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request["limit"] ?? 10;
        $keyword = $request["search"];

        $data = ShiftAndSalary::when($keyword, function ($query) use ($keyword) {
            $query->where("name", "like", "%$keyword%");
        })->with("job")->paginate($limit);
 
        return response()->json([ 'results' => $data ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name', 'time', 'price', 'job_id');

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'time' => 'required|string',
            'price' => 'required',
            'job_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 500);
        }

        $result = ShiftAndSalary::create([
        	'name' => $request->name,
        	'time' => $request->time,
        	'price' => $request->price,
        	'job_id' => $request->job_id,
        ]);

        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'Shift and Salary created successfully',
                'data' => $result
            ]
        ], Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = ShiftAndSalary::where("id", $id)->first();

        return response()->json([
            "results" => [
                "success" => true,
                "message" => "success get data",
                "data" => $data
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->only('name', 'time', 'price', 'job_id');

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'time' => 'required|string',
            'price' => 'required',
            'job_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 500);
        }

        $result = ShiftAndSalary::findOrFail($id);
        $result->update($data);

        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'Shift and Salary updated successfully',
                'data' => $result
            ]
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = ShiftAndSalary::where('id', $id)->delete();

        return response()->json([
            "results" => [
                "success" => true,
                "message" => "Delete data Shift and Salary is success",
            ]
        ]);
    }
}
