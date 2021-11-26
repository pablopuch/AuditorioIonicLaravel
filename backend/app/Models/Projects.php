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
    public function season()
    {
        return $this->hasOne('App\Models\Season', 'id', 'season_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shedules()
    {
        return $this->hasMany('App\Shedule');
    }


}
