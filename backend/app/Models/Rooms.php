<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    use HasFactory;

        /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shedules()
    {
        return $this->hasMany('App\Shedule');
    }

}
