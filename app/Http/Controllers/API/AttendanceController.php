<?php

namespace App\Http\Controllers\API;

use Auth;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\User;
use App\Events\ShowDataAbsent;
use Illuminate\Support\Facades\Storage;
// use App\Http\Requests\AbsentRequest;
use Illuminate\Support\Facades\DB;

class AttendanceController extends Controller
{
    public function index(Request $request) {
        $user = Auth::user();

        $limit = $request->limit ?? 25;
        $keyword = $request->search;

        $fromDate = $request->from_date;
        $toDate = $request->to_date;

        if ($user->user_role_id === 1) {
            $data = Attendance::when($keyword, function ($query) use ($keyword) {
                $query->where("name", "like", "%$keyword%");
            })->when($fromDate, function ($query) use ($fromDate, $toDate) {
                $query->whereBetween(DB::raw("DATE(created_at)"), [$fromDate, $toDate]);
            })->with("user", "shiftAndSalary")->paginate($limit);
        } else {
            $data = Attendance::when($keyword, function ($query) use ($user) {
                $query->where("name", "like", "%$keyword%");
            })->when($fromDate, function ($query) use ($fromDate, $toDate) {
                $query->whereBetween(DB::raw("DATE(created_at)"), [$fromDate, $toDate]);
            })
                ->where("user_id", $user->id)
                ->with("user", "shiftAndSalary")
                ->paginate($limit);
        }

        return response()->json(['results' => $data]);
    }

    public function show(Request $request) {
        $user_id = $request->id;

        $user = User::with('job')->find($user_id);

        broadcast(new ShowDataAbsent($user))->toOthers();

        return $user;
    }

    public function absent(Request $request)
    {
        $user_id = $request->user_id;
        $shift_id = $request->shift_id;
        $image = $request->image;

        $currentDateTime = date("Y-m-d H:i:s", strtotime((string) Carbon::now()));
        $image_type = mime_content_type($image);

        if (
            $image_type === "image/png"
                || $image_type === "image/jpg"
                || $image_type === "image/jpeg"
        ) {
            $replace = substr($image, 0, strpos($image, ',') + 1);
            $image = str_replace($replace, '', $image);
            
            if (!is_base64($image)) {
                return response()->json([
                    "results" => [
                        "success" => false,
                        "message" => "image is not base64"
                    ]
                ], 500);
            }

            $file = base64_decode($image);
        } else {
            return response()->json([
                "results" => [
                    "success" => false,
                    "message" => "error type image"
                ]
            ], 500);
        }

        $fileName = "absent-" . $currentDateTime . "." . "png";
        $fileSrc = public_path() . "/uploads/absent/" . $fileName;

        $attendance = Attendance::create([
            "shift_and_salary_id" => $shift_id,
            "punch_in" => $currentDateTime,
            "user_id" => $user_id,
            "image" => $fileName,
        ]);

        // $path = public_path('uploads/absent');

        // if(!Storage::exists($path)){
        //     Storage::makeDirectory($path, 0777, true, true);
        // }

        file_put_contents($fileSrc, $file);
 
        return response()->json([
            "results" => [
                "success" => true,
                "message" => "Success absent",
                "data" => $attendance
            ]
        ]);
    }
}
