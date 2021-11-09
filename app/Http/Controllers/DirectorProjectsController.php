<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DirectordirectorsController extends Controller
{
    
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $director = Directors::all();
            return $director;
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
            $director = new Directors();
            $director-> namedirector = $request->  namedirector;
            $director->startDatedirector= $request->startDatedirector;
            $director->endDatedirector=$request->endDatedirector;
            $director->published=$request->published;
            $director->seasons_id=$request->seasons_id;
    
            $director->save();
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
            $director = Directors::findOrFail($request->id);
            $director-> namedirector = $request->  namedirector;
            $director->startDatedirector= $request->startDatedirector;
            $director->endDatedirector=$request->endDatedirector;
            $director->published=$request->published;
            $director->seasons_id=$request->seasons_id;
            
            $director->save();
    
            return $director;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            
          
            $director = Directors::destroy($request->id);
    
            return $director;
        }
}
