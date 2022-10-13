<?php

namespace App\Http\Controllers\API;

use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\User;
use App\Events\ShowDataAbsent;
// use App\Http\Requests\AbsentRequest;

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

    public function absent(Request $request)
    {
        $user_id = $request->user_id;
        $shift_id = $request->shift_id;
        $image = $request->image;

        $currentDateTime = date("Y-m-d H:i:s", strtotime((string) Carbon::now()));
        $image_type = mime_content_type($image);
        // $punch_in = date("Y-m-d H:i:s", strtotime((string) $punch_in));

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
        $path = public_path() . "/uploads/absent/" . $fileName;

        $attendance = Attendance::create([
            "shift_and_salary_id" => $shift_id,
            "punch_in" => $currentDateTime,
            "user_id" => $user_id,
            "image" => $fileName,
        ]);

        file_put_contents($path, $file);
 
        return response()->json([
            "results" => [
                "success" => true,
                "message" => "Success absent",
                "data" => $attendance
            ]
        ]);
    }
}
