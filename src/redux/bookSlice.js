/* eslint-disable */
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const getBooks=createAsyncThunk("bookSlice/getBooks",async(args,thunkAPI)=>{
    const {rejectWithValue} =thunkAPI
    try{
        let x;
        
         await axios.get("http://localhost:3009/book").then((res)=>{x=res.data})
        return x
        
    }
    catch(e){   
        return rejectWithValue(e.message)
    }
})

export const addBooks=createAsyncThunk("bookSlice/addBooks",async(args,thunkAPI)=>{
    const {rejectWithValue , getState}=thunkAPI;
    try{
        args.user=getState().loginSlice.name;
        let x=  await axios.post("http://localhost:3009/book",args)
        return x.data
    
       
    }
    catch(e){
       return rejectWithValue(e)
    }
})

export const delBooks=createAsyncThunk("bookSlice/delBooks",async(args,thunkAPI)=>{
    const {rejectWithValue }=thunkAPI;
    try{
        let url=`http://localhost:3009/book/${args}`
       let x= await axios.delete(url)
       return x.data
    }
    catch(e){
        return rejectWithValue(e)
    }
})


const bookSlice=createSlice({
    name:"bookSlice",
    initialState:{books:"this is all books",isLoading:true,error:false,ren:false},
    reducers:{
        print:(state,action)=>{state.books="book is impty"}
    },
    extraReducers:{
        //getBooks 
        [getBooks.pending] :(state,action)=>{
            console.log(action)
            state.isLoading=true;
        },
        [getBooks.fulfilled]:(state,action)=>{
            console.log(action)
            state.isLoading=false;
            state.error=false
            state.books=action.payload
        },
        [getBooks.rejected]:(state,action)=>{
            console.log(action)
            state.isLoading=false;
            state.error=true
        }, 

        //addBooks
        [addBooks.pending]:(state,action)=>{console.log(action);state.ren=false},
        [addBooks.fulfilled]:(state,action)=>{console.log(action);state.ren=true},
        [addBooks.rejected]:(state,action)=>{console.log(action)},

        [delBooks.pending]:(state,action)=>{console.log(action);state.ren=false},
        [delBooks.fulfilled]:(state,action)=>{console.log(action);state.ren=true},
        [delBooks.rejected]:(state,action)=>{console.log(action)}

    }

})
export default bookSlice.reducer
export const bookSliceAction=bookSlice.actions