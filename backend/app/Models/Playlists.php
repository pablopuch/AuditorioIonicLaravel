<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlists extends Model
{
    use HasFactory;

    
    public function works()
    {
        return $this->hasOne('App\Models\Works', 'id', 'work_id');
    }

    public function composers()
    {
        return $this->hasOne('App\Models\Composers', 'id', 'work_id');
    }
    
}
