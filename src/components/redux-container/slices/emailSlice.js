import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/globalUrl";



//creating cartslice

export const emailSlice=createSlice({
    name:'email',
    initialState:{user:{
        token:localStorage.getItem('token')||null,
        email:null
    },inbox:[],send:[],draft:[],trash:[]},
    reducers:{
        
        setToken:(state,action)=>{
            state.user.token=action.payload;
            console.log(action.payload);
            return
        },
        getToken:(state)=>{
         return state.user.token
        },
        setInbox:(state,action)=>{
    //    console.log(action,"action");
    
        action.payload.forEach(element => {
             state.inbox.every((msg)=>element._id!==msg._id) ? state.inbox.push(element):null 
            
        });
    },

        
    //function to find mail clicked inbox

        
              

    }


});


export const {setToken,getToken,setInbox}=emailSlice.actions
export default emailSlice.reducer;