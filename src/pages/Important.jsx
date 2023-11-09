import React, { useEffect } from 'react'
import Layout from '../Layout'
import { Star, StarBorder } from '@mui/icons-material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { Box, Checkbox, IconButton, styled } from '@mui/material';
import useApi from '../hook/useApi';
import { API_URLS } from '../service/globalUrl';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setImportant, setImportanttoggler, setStartoggler } from '../components/redux-container/slices/emailSlice';
import { setDelete } from '../components/redux-container/slices/emailSlice';




function Important() {


  const state=useSelector((state)=>state.email);
  const {important}=state
  const token=useSelector((state)=>state.email.user.token);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const getImportantMail=useApi(API_URLS.getImportantEmail);
  const toggler=useApi(API_URLS.toggleStarredEmail);
  const mailDelete=useApi(API_URLS.deleteEmail);
  const ImportantLabel=useApi(API_URLS.toggleImportantEmail);

    
  const fetchdata=async()=>{  
    try {
      const res=await getImportantMail.call({},token);
    if(res.status){
      console.log(res);
    const data=res.data.filteredImportantEmails[0]?.importantEmails;
    console.log(data);
    dispatch(setImportant(data));
    }
      
    } catch (error) {
      console.log(error);
    }
    
    }
  
  useEffect(()=>{
    
    
  fetchdata();
  
  },[]);
  
  
  const handleClick=(event)=>{
  
  let messageid=event.target.id;
  
  if(messageid){
     navigate(`/important/${messageid}`)
  }else{
    messageid=event.target.parentElement.id
   navigate(`/important/${messageid}`);
  }
  
  }
  
  //
  const toggleStarredMail=async(event)=>{
  
  try {

    const messageid=event.target.closest('.row').children[1].id;
    console.log(messageid);
    const params=messageid  
    console.log(token,"jwt");
    dispatch(setStartoggler(params));
    let res=await toggler.call({},token,params);
    fetchdata();
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
     const update=await getImportantMail.call({},token);
     if(update.status){
      const data = update.data.filteredImportantEmails[0].importantEmails;

          dispatch(setImportant(data));
     }
  
  }
    
  } catch (error) {
    
    console.log(error);
  }
    
  }
  


   //function handle label important
const toggleImportantMail=async(event)=>{
  try {
    const messageid=event.target.closest('.row').children[1].id;
  console.log(messageid);
  const params=messageid  
    dispatch(setImportanttoggler(params));
    let res=await ImportantLabel.call({},token,params);
    console.log(res); 
    fetchdata();
  } catch (error) {
   console.log(error);     
  }
}


  return (

   <Layout>
    <MailContainer>
       {important?.map((message)=>(
        
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
          
          
        />
        </IconButton>
   )}  

   {message.important?(
    <IconButton onClick={toggleImportantMail}>
    <LabelImportantIcon
    style={{  color: "#FADA5E" }}
    
   />
   </IconButton>
    
    
   ):(
    <IconButton onClick={toggleImportantMail}>
    <LabelImportantOutlinedIcon
    />
    </IconButton>
   )
   }
         </Icons>
          <Message  id={message._id}  >
          <div >{message.sender_name||message.reciver_name}</div>
         <div>{message.subject}</div>
         <div>{message.date.slice(0,10)}</div>
         <div >

          <IconButton onClick={handleDelete} className='delete'>
           <DeleteIcon/>
          </IconButton>
         </div>
         </Message>
        
         </Row>
         
       ))}
      

       </MailContainer>

    
        
    </Layout>
  )
}

export default Important


const MailContainer=styled(Box)({
  // width:'100%',
  height:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  

});

const Row=styled(Box)({
  display:'grid',
  gridTemplateColumns:'15%  auto',
   width:'100%',
   placeItems:'center',
  borderBottom:'1px solid gray',
  
   fontSizeAdjust:'from-font',  
   "&:hover":{
    backgroundColor:'lightyellow'
   }
   
});

const Message=styled('div')({
  display:'grid',
  gridTemplateColumns:'10% 30%  10% 5%',
  width:'100%',
  justifyContent:'space-evenly',
  alignItems:'center',
  "& > *":{
    display:'flex',
    
  }
  
 });


 const Icons=styled('div')({
  display:'flex',
  alignItems:'center'
});