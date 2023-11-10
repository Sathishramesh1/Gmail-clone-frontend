import styled from 'styled-components';
import { Box} from '@mui/material';


export const Row=styled(Box)({
    display:'grid',
    // gridTemplateColumns:'10% 10% auto 5%',
    gridTemplateColumns:'15%  85%',
     width:'100%',
     placeItems:'center',
     borderBottom:'1px solid gray',
       
     "&:hover":{
      backgroundColor:'lightyellow'
     }
     
});

export const MailContainer=styled('div')({
  display:'flex',
  flexDirection:'column',
    width:"100%",
    height:'100%',
    justifyContent:'flex-start',
  
});

export const Icons=styled('div')({
  display:'flex',
  alignItems:'center',
flexWrap:'nowrap',
});

export const Message=styled('div')({
 display:'grid',
 gridTemplateColumns:'10% 30% 10% 5%',
 width:'100%',
 justifyContent:'space-evenly',
 alignItems:'center'
});