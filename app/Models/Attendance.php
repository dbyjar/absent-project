<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'shift_id',
        'punch_in',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shiftAndSalary()
    {
        return $this->belongsTo(ShiftAndSalary::class);
    }
}
