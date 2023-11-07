import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styled from 'styled-components';
import { Box, IconButton,  } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import { Star, StarBorder } from '@mui/icons-material';
import { API_URLS } from '../service/globalUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setInbox} from './redux-container/slices/emailSlice'
import useApi from '../hook/useApi';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { setDelete } from './redux-container/slices/emailSlice';

function Inbox() {
 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  // const token=useSelector(state=>state.email.user.token);
  const state=useSelector(state=>state.email);
  const {inbox}=state
  const token=localStorage.getItem('token');
  const mailDelete=useApi(API_URLS.deleteEmail);
  
const getInbox=useApi(API_URLS.getInboxEmail);
useEffect(()=>{

  const fetchdata=async()=>{
    const res=await getInbox.call({},token);
    console.log("use")
  if(res.status){
    const data=res.data.InboxMail;
     dispatch(setInbox(data));
   
  }
  }
 fetchdata();
 
},[]);

//function to open single mail
const handleMailClick=(event)=>{
 
  let messageid=event.target.id;

  if(messageid){
     navigate(`/inbox/${messageid}`)
  }else{
    messageid=event.target.parentElement.id
   navigate(`/inbox/${messageid}`);
  }
   
}

//function to handle delete
const handleDelete=async(event)=>{
  
  try {
    
    let messageid=event.target.closest('.row').children[1].id;
  const params=messageid;
  console.log(params);
  dispatch(setDelete(messageid));
   const res= await mailDelete.call({},token,params);
   console.log(res);
  if(res.status){
     const update=await getInbox.call({},token);
     if(update.status){
      const data = update.data.InboxMail;
          dispatch(setInbox(data));
     }
  
  }
    
  } catch (error) {
    
   console.log(error);
  }
    
  }


  return (
    <Layout>
    <RowContainer>
       {inbox?.map((message)=>(
         <Row key={message._id} onClick={handleMailClick} className='row'> 
         <Icons>
         <Checkbox />
          {message.starred?(<Star
          fontSize="medium"
          style={{ marginRight: 10, color: "#FADA5E" }}
          // onClick={() => toggleStarredMail()}
        />
      ) : (
        <StarBorder
          fontSize="medium"
          style={{ marginRight: 10 }}
          // onClick={() => toggleStarredMail()}
        />
   )}  
         </Icons>
          <Message  id={message._id}  >
          <div >{message.sender_name}</div>
         <div>{message.subject}</div>
         <div >{message.date.slice(0,10)}</div>
         <IconButton onClick={handleDelete}>
         <DeleteIcon/>
         </IconButton>
         </Message>
         
         </Row>
       ))}
       
</RowContainer>
</Layout>

  );
}

export default Inbox

const Row=styled(Box)({
    display:'grid',
    // gridTemplateColumns:'10% 10% auto 5%',
    gridTemplateColumns:'10%  auto',
     width:'100%',
     placeItems:'center',
     fontSizeAdjust:'from-font',  
     "&:hover":{
      backgroundColor:'lightyellow'
     }
     
});

const RowContainer=styled('div')({
    width:"100%",
    marginRight:50
});

const Icons=styled('div')({
  display:'flex',
  alignItems:'center'
});

const Message=styled('div')({
 display:'grid',
 gridTemplateColumns:'10% auto 10% 5%',
 width:'100%',
 justifyContent:'stretch',
 alignItems:'center'
 
})