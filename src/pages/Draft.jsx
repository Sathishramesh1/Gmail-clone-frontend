import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Box, Checkbox, IconButton, styled } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { setDelete } from '../components/redux-container/slices/emailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useApi from '../hook/useApi';
import { API_URLS } from '../service/globalUrl';
import { setDraft } from '../components/redux-container/slices/emailSlice';
import CustomizedDialogs from '../components/Dialog';


function Draft() {
    const state=useSelector((state)=>state.email);
const {draft}=state;
const token=useSelector((state)=>state.email.user.token);
const dispatch=useDispatch();
const navigate=useNavigate();

const getDraftMail=useApi(API_URLS.getDraftEmail);
const toggler=useApi(API_URLS.toggleStarredEmail);
const mailDelete=useApi(API_URLS.deleteEmail);

const [open,setOpen]=useState(false);
const [value,setValue]=useState({
    to:'',
    subject:'',
    content:''
});
const [click,setClicked]=useState(false);
const [messageid,setMessageid]=useState(null);


const handleClose=()=>{

    setOpen(false);
}


const fetchdata=async()=>{  
  try {
    const res=await getDraftMail.call({},token);
  if(res.status){
    console.log(res.data);
    const data=res.data.DraftMail;
    
  dispatch(setDraft(data));
  }
    
  } catch (error) {
    console.log(error);
  }
  
  }




const handleClick=(event)=>{
 setOpen(true);
let messageid=event.target.id;

if(messageid){
    setMessageid(messageid);
   const editedmail=draft.find((message)=>message._id==messageid);
   setValue({...value,to:editedmail.to,subject:editedmail.subject
,content:editedmail.content
});

}else{
  messageid=event.target.parentElement.id
 
}

}

//
const toggleStarredMail=async()=>{

try {
  const params='653e82ba81a6bb3977f4a943'
  console.log(token,"jwt");
  let res=await toggler.call({},token,params);
  console.log(res);
  
} catch (error) {
 console.log(error);     
}
}

//
const handleDelete=async(event)=>{
    
try {
  
  let messageid=event.target.closest('.row').children[1].id;
const params=messageid;
console.log(params);
dispatch(setDelete(messageid));
 const res= await mailDelete.call({},token,params);
 console.log(res);
if(res.status){
   const update=await getDraftMail.call({},token);
   console.log(update);
   if(update.status){
    const data = update.data.DraftMail;
        dispatch(setDraft(data));
   }

}
  
} catch (error) {
  
  console.log(error);
}
  
}

useEffect(()=>{
  
    fetchdata();
    
if(click){
    const autoDelete=async(id)=>{
        const res=await mailDelete.call({},token,id);
       console.log(res);
      dispatch(setDelete(id));
    }
     autoDelete(messageid);
    }
    
    },[click]);



  return (
    <Layout>
        <MailContainer>
       {draft?.map((message)=>(
        
         <Row key={message._id} className='row' onClick={handleClick} > 
         <Icons>
          <IconButton>
         <Checkbox size='small'/>
         </IconButton>
          {message.starred?(
          <IconButton
          onClick={ toggleStarredMail}
          ><Star
          fontSize="small"
          style={{  color: "#FADA5E" }}
          
        />
         </IconButton>
      ) : (
        <IconButton
        onClick={toggleStarredMail}
        >
        <StarBorder
          fontSize="small"
          style={{ }}
          
        />
        </IconButton>
   )}  

   {message.important?(
    <IconButton >
    <LabelImportantIcon
    style={{  color: "#FADA5E" }}
    
   />
   </IconButton>
    
    
   ):(
    <IconButton>
    <LabelImportantOutlinedIcon
    style={{}}
    />
    </IconButton>
   )
   }
         </Icons>
          <Message  id={message._id}  >
          <div >{message.sender_name||message.reciver_name}</div>
         <div>{message.subject}</div>
         <div>{message.date}</div>
         <div >

          <IconButton onClick={handleDelete} className='delete'>
           <DeleteIcon/>
          </IconButton>
         </div>
         </Message>
        
         </Row>
         
       ))}
       <CustomizedDialogs open={open} handleClose={handleClose} value={value} setClicked={setClicked}/>
      
       </MailContainer>

    </Layout>
  )
}

export default Draft


const MailContainer=styled(Box)({
    // width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    
  
  });
  
  const Row=styled(Box)({
    display:'grid',
    // gridTemplateColumns:'10% 10% auto 5%',
    gridTemplateColumns:'15%  auto',
     width:'100%',
     placeItems:'center',
     border:'1px solid blue',
     fontSizeAdjust:'from-font',  
     "&:hover":{
      backgroundColor:'lightyellow'
     }
     
  });
  
  const Message=styled('div')({
    display:'grid',
    gridTemplateColumns:'10% 30%  10% 5%',
    width:'100%',
    justifyContent:'space-between',
    
   });
  
  
   const Icons=styled('div')({
    display:'flex',
    alignItems:'center'
  });