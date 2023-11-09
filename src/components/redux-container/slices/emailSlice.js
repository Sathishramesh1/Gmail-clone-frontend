import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/globalUrl";



//creating cartslice

export const emailSlice=createSlice({
    name:'email',
    initialState:{user:{
        token:localStorage.getItem('token')||null,
        email:null
    },inbox:[],send:[],draft:[],trash:[],
starred:[],
important:[]
},
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
    
        action.payload?.forEach(element => {
             state.inbox.every((msg)=>element?._id!==msg?._id) ? state.inbox.push(element):null 
            
        });
    },
       setSend:(state,action)=>{

        action.payload.forEach(element => {
            state.send.every((msg)=>element._id!==msg._id) ? state.send.push(element):null 
           
       });

       },

    //function to delete
     setDelete:(state,action)=>{
     
  // If the message is found, filter it out and return a new state object
  if (state.send.some((message)=>message._id==action.payload)) {
    const updatedSend = state.send.filter((message) => message._id !== action.payload);
    const updatedStarred = state.starred?.filter((message) => message._id !== action.payload);
    const updatedImportant = state.important?.filter((message) => message._id !== action.payload);
    return {
      ...state,
      send: updatedSend,
      starred:updatedStarred,
      important:updatedImportant
    };
  }else if(state.inbox.some((message)=>message._id==action.payload)){
    const updatedInbox = state.inbox.filter((message) => message._id !== action.payload);
    const updatedStarred = state.starred?.filter((message) => message._id !== action.payload);
    const updatedImportant = state.important?.filter((message) => message._id !== action.payload);
   
    return {
      ...state,
      inbox: updatedInbox,
      starred:updatedStarred,
      important:updatedImportant
    };

  }else if(state.draft.some((message)=>message._id==action.payload)){
    const updatedDraft = state.draft.filter((message) => message._id !== action.payload);
    const updatedStarred = state.starred.filter((message) => message._id !== action.payload);
    const updatedImportant = state.important.filter((message) => message._id !== action.payload);
   
    return {
      ...state,
      draft: updatedDraft,
      starred:updatedStarred,
      important:updatedImportant
    };

  }

//   If the message is not found, return the unchanged state
  return state;

 },
         
    
    setDraft:(state,action)=>{

    action.payload.forEach(element => {
    state.draft.every((msg)=>element._id!==msg._id) ? state.draft.push(element):null     
       });

       },

       setStarred:(state,action)=>{

        // action.payload?.forEach(element => {
        //   state.starred?.every((msg)=>element._id!==msg?._id) ? state.starred.push(element):null     
        //      });

        const updatedStarred=action.payload
            
          return {...state,starred:updatedStarred}

       },
       setImportant:(state,action)=>{
        // action.payload?.forEach(element => {
        //   state.important.every((msg)=>element._id!==msg._id) ? state.important.push(element):null     
        //      });
        const updatedImportant=action.payload
            
          return {...state,important:updatedImportant}

       },

       setStartoggler:(state,action)=>{
        
  if (state.send.some((message)=>message._id==action.payload)) {
    const updatedSend = state.send.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
    const updatedStarred = state.starred?.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
   
    // Return a new state object with the updated 'send' array
    return { ...state, send: updatedSend,starred:updatedStarred, };
  }else if(state.inbox.some((message)=>message._id==action.payload)){
    const updatedInbox = state.inbox.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
    const updatedStarred = state.starred?.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
   
    return { ...state, inbox: updatedInbox ,starred:updatedStarred};

  }else if(state.draft.some((message)=>message._id==action.payload)){
    const updatedDraft = state.draft.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
    const updatedStarred = state.starred.map(message => {
      if (message._id === action.payload) {
        // Toggle the starred property for the matching message
        return { ...message, starred: !message.starred };
      }
      return message; // Return unchanged messages
    });
    return { ...state, draft: updatedDraft,starred:updatedStarred };


  }

//   If the message is not found, return the unchanged state
  return state;

       },

       setImportanttoggler:(state,action)=>{

    if (state.send.some((message)=>message._id==action.payload)) {
          const updatedSend = state.send.map(message => {
            if (message._id === action.payload) {
              // Toggle the starred property for the matching message
              return { ...message, important: !message.important };
            }
            return message; // Return unchanged messages
          });
      //     let updatedImportant=[state.important];
      //     let updatedStarred=[state.starred];
      // if(state.important?.some((message)=>message._id==action.payload)){
      //      updatedImportant = state.important.map(message => {
      //       if (message._id === action.payload) {
      //         // Toggle the starred property for the matching message
      //         return { ...message, important: !message.important };
      //       }
      //       return message; // Return unchanged messages
      //     });
          
      //   }else if(state.starred?.some((message)=>message._id ==action.payload)){
      //        updatedStarred = state.starred.map(message => {
      //         if (message._id == action.payload) {
      //           // Toggle the starred property for the matching message
      //           return { ...message, important: !message.important };
      //         }
      //         return message; // Return unchanged messages
      //       });
            
      //     } 
      const updatedImportant = state.important?.map(message => {
        if (message._id === action.payload) {
          // Toggle the starred property for the matching message
          return { ...message, important: !message.important };
        }
        return message; // Return unchanged messages
      });
     

        // Return a new state object with the updated 
          return { ...state,send:updatedSend,important:updatedImportant };
        }
        else if(state.inbox.some((message)=>message._id==action.payload)){
          const updatedInbox = state.inbox.map(message => {
            if (message._id === action.payload) {
              // Toggle the starred property for the matching message
              return { ...message, important: !message.important };
            }
            return message; // Return unchanged messages
          });
          
      //     let updatedImportant=[state.important];
      //     let updatedStarred=[state.starred];
      // if(state.important?.some((message)=>message._id==action.payload)){
      //      updatedImportant = state.important.map(message => {
      //       if (message._id === action.payload) {
      //         // Toggle the starred property for the matching message
      //         return { ...message, important: !message.important };
      //       }
      //       return message; // Return unchanged messages
      //     });
          
      //   }else if(state.starred?.some((message)=>message._id ==action.payload)){
      //        updatedStarred = state.starred.map(message => {
      //         if (message._id == action.payload) {
      //           // Toggle the starred property for the matching message
      //           return { ...message, important: !message.important };
      //         }
      //         return message; // Return unchanged messages
      //       });
            
      //     } 
      const updatedImportant = state.important?.map(message => {
        if (message._id === action.payload) {
          // Toggle the starred property for the matching message
          return { ...message, important: !message.important };
        }
        return message; // Return unchanged messages
      });
      
          return { ...state, inbox: updatedInbox,important:updatedImportant };
      
        }
        else if(state.draft.some((message)=>message._id==action.payload)){
          const updatedDraft = state.draft.map(message => {
            if (message._id === action.payload) {
              // Toggle the starred property for the matching message
              return { ...message, important: !message.important };
            }
            return message; // Return unchanged messages
          });
      //     let updatedImportant=[state.important];
      //     let updatedStarred=[state.starred];
      // if(state.important.some((message)=>message._id==action.payload)){
      //      updatedImportant = state.important.map(message => {
      //       if (message._id === action.payload) {
      //         // Toggle the starred property for the matching message
      //         return { ...message, important: !message.important };
      //       }
      //       return message; // Return unchanged messages
      //     });
          
      //   }else if(state.starred.some((message)=>message._id ==action.payload)){
      //        updatedStarred = state.starred.map(message => {
      //         if (message._id == action.payload) {
      //           // Toggle the starred property for the matching message
      //           return { ...message, important: !message.important };
      //         }
      //         return message; // Return unchanged messages
      //       });
            
      //     }
      const updatedImportant = state.important?.map(message => {
        if (message._id === action.payload) {
          // Toggle the starred property for the matching message
          return { ...message, important: !message.important };
        }
        return message; // Return unchanged messages
      });
          return { ...state, draft:updatedDraft,important:updatedImportant};
        }
      //   If the message is not found, return the unchanged state
        return state;
       }
    },    

});


export const {setToken,getToken,setInbox,setSend,setDelete,setDraft,setStarred, setImportant,setStartoggler,setImportanttoggler}=emailSlice.actions
export default emailSlice.reducer;