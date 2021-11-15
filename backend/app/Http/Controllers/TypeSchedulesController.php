<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeSchedules;

class TypeSchedulesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $typeSchedule = TypeSchedules::all();
        return $typeSchedule;
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
        $typeSchedule = new TypeSchedules();
        $typeSchedule-> nametypeSchedule = $request->  nametypeSchedule;
        $typeSchedule->startDatetypeSchedule= $request->startDatetypeSchedule;
        $typeSchedule->endDatetypeSchedule=$request->endDatetypeSchedule;
        $typeSchedule->published=$request->published;
        $typeSchedule->seasons_id=$request->seasons_id;

        $typeSchedule->save();
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
        $typeSchedule = TypeSchedules::findOrFail($request->id);
        $typeSchedule-> nametypeSchedule = $request->  nametypeSchedule;
        $typeSchedule->startDatetypeSchedule= $request->startDatetypeSchedule;
        $typeSchedule->endDatetypeSchedule=$request->endDatetypeSchedule;
        $typeSchedule->published=$request->published;
        $typeSchedule->seasons_id=$request->seasons_id;
        
        $typeSchedule->save();

        return $typeSchedule;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        
      
        $typeSchedule = TypeSchedules::destroy($request->id);

        return $typeSchedule;
    }
}
