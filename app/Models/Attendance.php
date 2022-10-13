<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $appends = ['file_src'];

    public static $public_path_file = 'uploads/absent/';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'shift_and_salary_id',
        'punch_in',
        'user_id',
        'image',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shiftAndSalary()
    {
        return $this->belongsTo(ShiftAndSalary::class);
    }

    public function getFileSrcAttribute()
    {
        return asset(self::$public_path_file . $this->image);
    }
}
