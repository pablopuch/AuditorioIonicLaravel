<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedules extends Model
{
    use HasFactory;
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function projects()
    {
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function rooms()
    {
        return $this->hasOne('App\Models\Rooms', 'id', 'rooms_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function typeShedules()
    {
        return $this->hasOne('App\Models\TypeSchedules', 'id', 'type_schedules_id');
    }
    

}
