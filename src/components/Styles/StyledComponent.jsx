import styled from 'styled-components';
import { Box, Container, createTheme} from '@mui/material';


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




export const PageContainer=styled(Container)({
  display:'flex',
  // width:'90%',
  // height:'100%',
  justifyContent:'space-evenly',
  alignItems:'center ',
  flexDirection:'row ! important ',
  flexWrap:'nowrap',
  border:'2px solid black',
  overflow:'hidden',
  backgroundColor:'white',
  marginTop:'7%',
  borderRadius:'2em',
  
});


export const OuterContainer=styled(Box)({
  display:'flex ',
  justifyContent:'center',
  alignItems:'center',
  height:'auto',
  paddingBottom:'7%',
  flexDirection:'row',
  
  background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
 
  
})

export const ImageContainer=styled('div')({
  width:'500px',
  height:'500px',
  marginTop:'64px',
  borderRight:'1px solid grey',
  paddingRight:'1em',
 
  
  "& > img":{
    marginTop:'8px',
   
    width:'100%',
    height:"100%",
    objectFit:'contain',
    
    
  }
});

export const defaultTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex'
        },
      },
    },
  },
  
});