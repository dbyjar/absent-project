<?php

namespace App\Http\Controllers\API;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\AbsentRequest;

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
}
