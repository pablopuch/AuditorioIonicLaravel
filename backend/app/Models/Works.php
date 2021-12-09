<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Works extends Model
{
    use HasFactory;

    public function playlists()
    {
        return $this->hasMany('App\Models\Playlists');
    }

    public function composers()
    {
        return $this->hasOne('App\Models\Composers', 'id', 'composer_id');
    }
    
}
