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
        })->paginate($limit);
 
        return response()->json(['results' => $user]);
    }

    public function absent(AbsentRequest $request)
    {
        $request->validate([
            'image' => 'required',
        ]);

        $image = $request["image"];
        $currentDateTime = Carbon::now();
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
                    "message" => "image is not base64"
                ], 500);
            }

            $file = base64_decode($image);
        } else {
            return response()->json([
                "message" => "error type image"
            ], 500);
        }

        $fileName = "absent-" . $currentDateTime . "." . "png";
        $path = public_path() . "/uploads/absent/" . $fileName;

        file_put_contents($path, $file);
 
        return response()->json([
            "success" => true,
            "image" => $fileName
        ]);
    }
}
