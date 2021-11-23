<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedules;

class ScheduleController extends Controller
{
    
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $schedule = Schedules::all();
            return $schedule;
        }
    
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            //
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            $schedule = new Schedules();
            $schedule-> project_id = $request->  project_id;
            $schedule->date= $request->date;
            $schedule->type_schedules_id=$request->type_schedules_id;
            $schedule->hourRange=$request->hourRange;
            $schedule->note=$request->note;
            $schedule->rooms_id=$request->room_id;

            $schedule->save();
        }
    
        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            //
        }
    
        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function edit($id)
        {
            //
        }
    
        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, $id)
        {
            $schedule = Schedules::findOrFail($request->id);
            $schedule-> nameschedule = $request->  nameschedule;
            $schedule->startDateschedule= $request->startDateschedule;
            $schedule->endDateschedule=$request->endDateschedule;
            $schedule->published=$request->published;
            $schedule->seasons_id=$request->seasons_id;
            
            $schedule->save();
    
            return $schedule;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            
          
            $schedule = Schedules::destroy($request->id);
    
            return $schedule;
        }
}
