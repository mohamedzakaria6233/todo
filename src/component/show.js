/* eslint-disable */
import React,{useEffect, useState} from "react";
import './show.css'
import {useDispatch , useSelector } from 'react-redux';
import {bookSliceAction} from '../redux/bookSlice'
import {getBooks ,delBooks} from '../redux/bookSlice'
function show(){
    const dispatch=useDispatch();
    //////
    const glob=useSelector(state=>state)
    const books=glob.bookSlice.books;
    const {print}=bookSliceAction;
    let isLoading=glob.bookSlice.isLoading;
    let error =glob.bookSlice.error
    let ren=glob.bookSlice.ren
    const name=glob.loginSlice.name
    /////////
    console.log(books)

    useEffect(()=>{
        console.log("Iam use Effct")
        dispatch(getBooks());
    },[dispatch,ren])
    
    const delbook=(e)=>{
        console.log(e)
        dispatch(delBooks(e))
    }
    const isLogin=glob.loginSlice.isLogin;
    console.log(isLoading)
    return(
        <div className="show">
            {isLoading==true && <div className="wait">Server is Loading Please wait</div>}
            {isLoading==false && error==false && <div className="books">
            {books.map((item)=>{
                return <div className="book" style={{backgroundColor:item.user==name?"red":""}} key={Math.random()}>
                        <div>{item.title}</div>
                        <div>{item.decription}</div>
                        <div>{item.price}</div>
                        <div> 
                        <button className="read" disabled={!isLogin}>Read</button>
                        {item.user==name && <button className="delete" disabled={!isLogin} onClick={()=>delbook(item.id)}>Delete</button>}
                        </div>
                       
                    </div> 
                })}
                </div>}
            {isLoading==false && error==true && <div className="error">Opps! Error 404 ! Server Failed</div>}
    
        </div>
    )
}
export default show;
