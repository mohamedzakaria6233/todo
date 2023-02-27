import {createSlice} from '@reduxjs/toolkit'
const loginSlice=createSlice({
    name:"loginSlice",
    initialState:{name:"",email:"",password:"",isLogin:false},
    reducers:{
        SAVEINFO:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.isLogin=true
        }
    }
})
export default loginSlice.reducer;
export const loginSliceAction=loginSlice.actions;