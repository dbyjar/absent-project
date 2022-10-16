<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
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

        $jobs = Job::when($keyword, function ($query) use ($keyword) {
            $query->where("name", "like", "%$keyword%");
        })->paginate($limit);
 
        return response()->json([ 'results' => $jobs ]);
        
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
        $data = $request->only('name');

        $validator = Validator::make($data, [
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 500);
        }

        $result = Job::create([
        	'name' => $request->name,
        ]);

        return response()->json([
            'results' => [
                'success' => true,
                'message' => 'Job created successfully',
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
        $data = Job::find($id);

        return response()->json([ 'results' => $data ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Reqeust $reqeust, $id)
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
        $data = Job::find($id);
        $data->name = $request->name;
        $data->save();

        return response()->json([ 'results' => $data ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Job::where('id', $id)->delete();

        return response()->json([
            "results" => [
                "success" => true,
                "message" => "Delete data Job is success",
            ]
        ]);
    }
}
