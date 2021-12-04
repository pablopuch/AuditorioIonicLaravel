<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directors extends Model
{
    use HasFactory;

    public function directorProjects()
    {
        return $this->hasMany('App\Models\DirectorProjects');
    }
}
