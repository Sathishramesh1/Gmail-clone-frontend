import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, DialogContent, FormLabel, IconButton, InputBase, Paper, styled } from '@mui/material';
import { Field, Form } from 'formik';
import axios from "axios";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useApi from '../hook/useApi';
import { API_URLS } from '../service/globalUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setInbox } from './redux-container/slices/emailSlice';

function MailForm(props) {
   
    const [file,setFile]=useState(null);

    const dispatch=useDispatch();
    const token=useSelector((state)=>state.email.user.token);

//getting token from local storage
// const token=localStorage.getItem('token');
    const [mail,setMail ]=useState({
      to:'',
      subject:'',
      content:'',
      attachment:'',
    });
    
//file upload api
const file_load=useApi(API_URLS.uploadFile);
    
// api for mail sending
const mail_send=useApi(API_URLS.compose);
    

//function for file upload
    const uploadFile=async(e)=>{
      e.stopPropagation();
      e.preventDefault();
      let data = new FormData();
      data.set("sample_file", file);

     try {
    const res= await file_load.call(data,token);
    console.log(res);
    console.log(res.data.secure_url);
    document.getElementById('file-name').setAttribute('href',res.data.secure_url);
    setMail({...mail,attachment:`${res.data.secure_url}`});
    console.log({...mail});
    } catch (error) {
      console.log(error);
    }
     }
    
     //function to handle file selection
    const handleSelectFile = (e) =>{
      setFile(e.target.files[0]);
  }

  //function to handle to mail details
  const handleChange=(e)=>{
  setMail({...mail,[e.target.name]:e.target.value});
  // console.log(mail);
  props.setdatafromChild({...mail});
    }

  //function to send mail
    const handleSend=async(e)=>{
      e.stopPropagation();
      e.preventDefault();
      props.handlex();
      try {
        const res= await mail_send.call(mail,token);
        console.log(res);
          
        console.log("from send");
      } catch (error) {        
        console.log(error);
      }
    }

useEffect(()=>{
if(props.value){
  document.getElementById('to').value=props.value.to||"";
  document.getElementById('subject').value=props.value.subject||"";
  document.getElementById('content').value=props.value.content||"";
  
if(props.setClicked){
  document.getElementById('send').onclick=function(){
    props.setClicked(true);
    // console.log("from mail");
  }
}

}
},[])
  

  return (
    <Box
      component="form"
      sx={{
        width:"500px",
        '& > :not(style)': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      encType="multipart/form-data"
      method='post'
    >
        <FormField>
      <ToField >
      <FormLabel htmlFor='to'>To  </FormLabel>
        <InputBase
    placeholder="Recipient"
    name="to"
    id='to'
    onChange={handleChange}
    maxRows={10}
    style={{width:'100%'}}
    
     
    />
      </ToField>
      
      <ToField >
      <InputBase
    placeholder="Subject"
    name="subject"
    id='subject'
    onChange={handleChange}
    style={{width:'100%'}}
    />

      </ToField>
      <ToField >
      
      <InputBase fullWidth 
      id="content" 
      placeholder=''
       multiline
       rows={10}
      variant="standard" 
      name='content'
     
      onChange={handleChange}
      
      />
      </ToField>
       {file&&<p >
         <a id='file-name'
        target='new'
        >{file.name}</a> 
        
      <IconButton onClick={()=>setFile(null)}>x</IconButton>
      </p>} 
      
      <input type='file' id='file' name='file'
       onChange={handleSelectFile}
       multiple={false}
      />
      <Upload onClick={uploadFile}>
        upload
      </Upload>

      </FormField>
          
      <ButtonWrap>
            <ButtonGroup>
          <Button autoFocus   variant="contained" color="primary"
          onClick={handleSend}
          id='send'
          >
            Send  
          </Button>
          <Button size='small'>
            <ExpandMoreIcon/>
          </Button>
          </ButtonGroup>
          
          
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        
      >
        <MoreVertIcon />
      </IconButton>
         
      <Button>
            <DeleteForeverIcon/>
          </Button>
          </ButtonWrap>
    </Box>
  )
}

export default MailForm

const ToField=styled(Box)({
   display:"flex",
   justifyContent:'flex-start',
   alignItems:'center',
   gap:10,
    borderBottom:"1px solid rgba(0, 0, 0, 0.12)",
    borderRadius:0,
    marginBottom:10,
    "input":{
      width:'100%',
    }
  
});

const FormField=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'stretch',
  "&>:last-child":{
    borderBottom:'none'
  }      
});

const ButtonWrap=styled(Box)({
  display:'flex',
  flexDirection:'row',
});



const Upload=styled(Button)({
     width:'min-content',
     padding:'2px',
     margin:'4px',
     background:'green',
     color:'white' ,
    "&:hover":{
     background:'green',

    },
    "&:focus":{
      border:'none',
      outline:'none'
        }
});