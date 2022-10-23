<?php

namespace App\Exports;

use App\Models\Attendance;
use Maatwebsite\Excel\Concerns\FromCollection;

class AttendanceExport implements FromCollection
{
    public function headings():array{
        return[
            'Id',
            'Name',
            'Email',
            'City',
            'Created_at',
            'Updated_at' 
        ];
    } 
    
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Attendance::all();
    }
}
