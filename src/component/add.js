/* eslint-disable */
import React,{useState} from "react";
import { addBooks } from "../redux/bookSlice";
import './add.css'
import {useDispatch, useSelector} from 'react-redux'
function add(){
    const glob=useSelector(state=>state)
    const ren=glob.bookSlice.ren;
    const isLogin=glob.loginSlice.isLogin;
    console.log(ren)
    const dispatch=useDispatch()

    const [title,setTitle]=useState()
    const [desc,setDesc]=useState()
    const [price,setPrice]=useState()

    const ok=(e)=>{
        e.preventDefault()
        console.log("add success")
        let nbook={title:title,decription:desc,price:price}
        console.log(nbook)
        dispatch(addBooks(nbook))
        setTitle("")
        setDesc("")
        setPrice("")
    }
    return (
        <div className="add">
            <div className="tit">Add New Book</div>
            <form className="forma" onSubmit={ok}>
                <input placeholder="Enter Book title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <input placeholder="Enter Book description" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
                <input placeholder="Enter Book price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <input type="submit" value="Add" disabled={!isLogin}/>
            </form>
        </div>
    )
}
export default add;