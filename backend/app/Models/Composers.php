<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Composers extends Model
{
    use HasFactory;
public $timestamps = false;
    
    public function works()
    {
        return $this->hasMany('App\Models\Works');
    }
    
    public function playlists()
    {
        return $this->hasMany('App\Models\Playlists');
    }
    
}
