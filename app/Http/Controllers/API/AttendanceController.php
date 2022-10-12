<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\User;
use App\Events\ShowDataAbsent;

class AttendanceController extends Controller
{
    public function index(Request $request) {
        $limit = $request["limit"] ?? 10;
        $keyword = $request["search"];

        $data = Attendance::when($keyword, function ($query) use ($keyword) {
            $query->where("name", "like", "%$keyword%");
        })->with("user", "shiftAndSalary")->paginate($limit);
 
        return response()->json(['results' => $data]);
    }

    public function show(Request $request) {
        $user_id = $request->id;

        $user = User::find($user_id)->with("job")->first();

        broadcast(new ShowDataAbsent($user))->toOthers();

        return $user;
    }
}
