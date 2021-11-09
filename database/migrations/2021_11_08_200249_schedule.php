<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Schedule extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            
            $table->bigInteger('project_id')->unsigned();
            $table->Date('date');
            $table->bigInteger('typeSchedule_id')->unsigned();
            $table->Time('hourRange');
            $table->String('note');
            $table->bigInteger('room_id')->unsigned();
            
            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('projects')->onDelete("cascade");
            $table->foreign('typeSchedule_id')->references('id')->on('typeSchedule')->onDelete("cascade");
            $table->foreign('room_id')->references('id')->on('room')->onDelete("cascade");
            
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
