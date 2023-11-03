import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/globalUrl";



//creating cartslice

export const emailSlice=createSlice({
    name:"email",
    initialState:{user:{
        token:localStorage.getItem('token')||null,
        email:null
    },inbox:[],send:[],draft:[],trash:[]},
    reducers:{
        
        setToken:(state,action)=>{
            state.user.token=action.payload;
            return
        },
        getToken:(state)=>{
         return state.user.token
        },
        setInbox:(state,action)=>{
          state.inbox.push(...action.payload);
        }
              

    }


});


export const {setToken,getToken}=emailSlice.actions
export default emailSlice.reducer;