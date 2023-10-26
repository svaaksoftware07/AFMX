import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"


export const login=createAsyncThunk("auth/login", async({formData,navigate,toast})=>{
    try{
        const response=await api.signin(formData)
        toast.success(response.data.message)
        navigate("/")
        return response.data
    }catch(err){
        return toast.error(err.response.data.message)
    }
})

const authSlice =createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:"",
        loading:false,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    },

    extraReducers:{
        [login.pending]:(state)=>{
            state.loading=true
        },
        [login.fulfilled]:(state,action)=>{
            state.loading=false;
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user=action.payload;
        },
        [login.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload.message;
        }
    }
});

export const {setUser}=authSlice.actions
export default authSlice.reducer
