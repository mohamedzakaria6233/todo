/* eslint-disable */
import React,{useState} from "react";

// comonents   //
import Show from './show';
import Add from './add';
import Login from './login'
/////////////////
function app(){
    return(
        <div>
            <Login/>
            <Add/>
            <Show/>
        </div>
    )
}
export default app;