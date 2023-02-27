/* eslint-disable */
import React,{useState} from "react";
import './login.css'
import {useDispatch,useSelector} from 'react-redux'
import {loginSliceAction} from '../redux/loginSlice'
function login(){
    const {SAVEINFO}=loginSliceAction;
    const dispatch=useDispatch();
    /////////
    const glob=useSelector(state=>state)
    const Name=glob.loginSlice.name;
    const Email=glob.loginSlice.email;
    const Password=glob.loginSlice.password;
    const isLogin=glob.loginSlice.isLogin
    ////////
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const ok=(e)=>{
        e.preventDefault()

        if(name=="" || email=="" || password==""){
            alert("Please fill all Information")
        }
        else{
            console.log("ok is worked")
            let user={name,email,password}
            dispatch(SAVEINFO(user))
            setName("")
            setEmail("")
            setPassword("")
        }
       
    }
    return(
        <div className="login">
            <div className="tit">Login to your Account</div>
            <form className="forma-login" onSubmit={ok}>
                <input placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                <input placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <input type="submit" value="Login"/>
            </form>
            {isLogin && <div className="inf"><i class="fa-solid fa-user"></i> Welcome Mr : {Name} </div>}
        </div>
    )
}
export default login;