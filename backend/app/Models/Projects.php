<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function seasons()
    {
        return $this->hasOne('App\Models\Seasons', 'id', 'seasons_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function schedules()
    {
        return $this->hasMany('App\Models\Shedule');
    }

    public function directors()
    {
        return $this->hasMany('App\Models\Directors');
    }

    public function directorsProjects()
    {
        return $this->hasMany('App\Models\DirectorProjects');
    }

    public function soloistProjects()
    {
        return $this->hasMany('App\SoloistProjects');
    }


}
