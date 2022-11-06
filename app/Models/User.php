<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    Protected $appends = ['job'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_role_id',
        'job_id',
        'address',
        'phone',
        'nik',
        'birthdate',
        'address'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function userRole() {
      return $this->belongsTo(UserRoles::class);
    }

    public function job() {
      return $this->belongsTo(Job::class);
    }

    public function getJobAttribute() {
        return $this->hasOne(Job::class);
    }

    public function getJWTIdentifier() {
        return  $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
