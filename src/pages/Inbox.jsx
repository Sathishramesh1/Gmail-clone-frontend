import React, { useEffect} from 'react'
import styled from 'styled-components';
import { Box, IconButton,  } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import { Star, StarBorder } from '@mui/icons-material';
import { API_URLS } from '../service/globalUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setInbox} from '../components/redux-container/slices/emailSlice'
import useApi from '../hook/useApi';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { setDelete } from '../components/redux-container/slices/emailSlice';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { setStartoggler,setImportanttoggler } from '../components/redux-container/slices/emailSlice';
import { MailContainer,Row,Icons,Message } from '../components/Styles/StyledComponent';


function Inbox() {
 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  // const token=useSelector(state=>state.email.user.token);
  const state=useSelector(state=>state.email);
  const {inbox}=state
  const token=localStorage.getItem('token');
  
const mailDelete=useApi(API_URLS.deleteEmail);
const getInbox=useApi(API_URLS.getInboxEmail);
const toggler=useApi(API_URLS.toggleStarredEmail);
const ImportantLabel=useApi(API_URLS.toggleImportantEmail);



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

  //function star toggling
const toggleStarredMail=async(event)=>{
  
  try {
    const messageid=event.target.closest('.row').children[1].id;
console.log(messageid);
const params=messageid  
  console.log(token,"jwt");
  dispatch(setStartoggler(params));
 
  let res=await toggler.call({},token,params);
  console.log(res);
  } catch (error) {
   console.log(error);     
  }
  }

  //function for important label
  const toggleImportantMail=async(event)=>{
    try {
      const messageid=event.target.closest('.row').children[1].id;
    console.log(messageid);
    const params=messageid  
      // console.log(token,"jwt");
      dispatch(setImportanttoggler(params));
      // console.log(...send);
      let res=await ImportantLabel.call({},token,params);
      console.log(res);
      
    } catch (error) {
     console.log(error);     
    }
  
  
  }

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
  
  return (
    <Layout>
    <MailContainer>
       {inbox?.map((message)=>(
         <Row key={message._id} onClick={handleMailClick} className='row'> 
         <Icons>
          <IconButton>
         <Checkbox size='small' />
         </IconButton>
          {message.starred?(
          <IconButton
          onClick={toggleStarredMail}>
          <Star
          fontSize="small"
          style={{  color: "#FADA5E" }}/>
        </IconButton>
       
      ) : (
        <IconButton
        onClick={toggleStarredMail}>
        <StarBorder
          fontSize="small"
          style={{  }}
        />
        </IconButton>
   )}  

{message.important?(
    <IconButton onClick={toggleImportantMail}>
    <LabelImportantIcon
    style={{  color: "#FADA5E" }}/>
   </IconButton>
   ):(
    <IconButton onClick={toggleImportantMail}>
    <LabelImportantOutlinedIcon/>
    </IconButton>
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
</MailContainer>
</Layout>
  );
}

export default Inbox

// const Row=styled(Box)({
//     display:'grid',
//     // gridTemplateColumns:'10% 10% auto 5%',
//     gridTemplateColumns:'15%  85%',
//      width:'100%',
//      placeItems:'center',
       
//      "&:hover":{
//       backgroundColor:'lightyellow'
//      }
     
// });

// const MailContainer=styled('div')({
//   display:'flex',
//   flexDirection:'column',
//     width:"100%",
  
// });

// const Icons=styled('div')({
//   display:'flex',
//   alignItems:'center',
// flexWrap:'nowrap',
// });

// const Message=styled('div')({
//  display:'grid',
//  gridTemplateColumns:'10% 30% 10% 5%',
//  width:'100%',
//  justifyContent:'space-between',
//  alignItems:'center'
 
// })