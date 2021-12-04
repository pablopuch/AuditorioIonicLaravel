<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DirectorProjects extends Model
{
    use HasFactory;

    public function projects()
    {
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function directors()
    {
        return $this->hasOne('App\Models\Directors', 'id', 'director_id');
    }
    
}
