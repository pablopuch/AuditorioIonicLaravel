<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soloists extends Model
{
    use HasFactory;

    public function soloistProjects()
    {
        return $this->hasMany('App\Models\SoloistProjects');
    }
}
