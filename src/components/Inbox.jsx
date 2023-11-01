import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styled from 'styled-components';
import { Box, InputBase } from '@mui/material';

function Inbox() {
  const [inbox,setInbox]=useState([{
    name:'sathish',
    from:'sathishrameshkec@gmail',
    to:'nandha@gmail.com',
    subject:'inbox mail',
    content:'checking the inbox layout',
    date:'1/11/2023'
  },
  {
    name:'sathish',
    from:'sathishrameshkec@gmail',
    to:'nandha@gmail.com',
    subject:'inbox mail',
    content:'checking the inbox layout',
    date:'1/11/2023'
  },
  {
    name:'sathish',
    from:'sathishrameshkec@gmail',
    to:'nandha@gmail.com',
    subject:'inbox mail',
    content:'checking the inbox layout',
    date:'1/11/2023'
  }
  ]);

// useEffect(()=>{
//  const res= axios.get()
//   setInbox(res)

// },[])



  return (
    <RowContainer>
       {inbox.map((message)=>(
         <Row key={message.name}> 
         <div>
            <InputBase type='checkbox' />
            
         {/* {message.starred?:} */}
        
         </div>
         <div>{message.name}</div>
         <div>{message.subject}</div>
         <div>{message.date}</div>


         </Row>
       ))}
</RowContainer>
  );
}

export default Inbox

const Row=styled(Box)({
    display:'grid',
    gridTemplateColumns:'10% 10% auto 5%',
     width:'100%',
     placeItems:'center',
     fontSizeAdjust:'from-font'
     
});

const RowContainer=styled('div')({
    width:"100%",
    marginRight:50
})