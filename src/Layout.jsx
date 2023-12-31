import React from 'react'
import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import RigthSideIcon from './components/RigthSideIcon';
import MailHeader from './components/MailComponent/MailHeader';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Paper from '@mui/material/Paper';


function Layout({children}) {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
      setOpenDrawer((prevState) => !prevState);
    };
  

  return (
    <>
    <LayoutWrapper style={{}}>
      <Header toggleDrawer={toggleDrawer} />
      
      
      <Main>
      <LeftIconBarWrapper>
        {/* <LeftIconBar/> */}
        <Sidebar openDrawer={openDrawer}/>
      </LeftIconBarWrapper>
      <MainBodyWrapper style={openDrawer?{marginLeft:250,paddingLeft:0}:{width:"100%"}}  >
        <EmailTopBar>
         <MailHeader/>
         
        </EmailTopBar>
        <TabBar>
          <TabBarItems>
          <div>
            <div>
            <InboxIcon />
            </div>
            Primary</div>
          <div>
            <div>
            <LocalOfferOutlinedIcon/>
            </div>
            Promotion</div>
          <div>
            <div>
            <GroupOutlinedIcon/>
            </div>
            Social</div>
          <div>
            <div>
            <InfoOutlinedIcon/>
            </div>
            Updates</div>
          </TabBarItems>
        </TabBar>
      <MailContainer >
      {/* <Box sx={{display:'flex', width:'98%'}}>
         
      </Box> */}
     {children}
        </MailContainer>
          
      </MainBodyWrapper>
      <RigthSideIconBar>
         <RigthSideIcon/>
      </RigthSideIconBar>
      </Main>
      
      </LayoutWrapper>
      
    </>
  )
}

export default Layout



const LayoutWrapper=styled(Paper)({
    display:"grid",
    gridTemplateRows:'auto auto',
    position:'fixed', 
    width:'100%',
    
   
   })
   
   const Main=styled(Box)({
    
     display:"grid",
     // flexDirection:'row',
     gridTemplateColumns:"0% auto 5%",
     border:'2px solid red',

    //  height:'100%',
     width:'100%',
    height:'100%',
    '@media (max-width: 600px)': {
      height:'1450px',
    },
     
     
    
    })
   const RigthSideIconBar=styled(Box)({
      display:'flex',
      flexDirection:'column',
     
      height:'100%',
      backgroundColor:"#f2f5fa"
    });
   
    const LeftIconBarWrapper=styled(Box)({
     display:'flex',
     flexDirection:'column',
     height:'100vh',
      width:'min-content'
     // background:'yellow'
   });
   
    
   const EmailTopBar=styled(Box)({
    display:'flex',
    flexDirection:'row',
    height:'50px',
   //  backgroundColor:'none',
    paddingLeft:10,
    borderRadius:'20px 20px 0 0'
   });
   
   const TabBar=styled(Box)({
     display:'flex',
     width:'100%',
     height:50,
    //  background:'grey'
   
   });
   
   const TabBarItems=styled('div')({
      display:'grid',
      gridTemplateColumns:'25% 25% 25% 25%',
      width:'100%',
      justifyContent:'space-between',
      alignItems:'center',
      
  

      
      "& >*":{
        display:'flex',
       padding:" 10px 0 10px 0",
       gap:'10px',
       
        
      },
      "&>*:hover":{
        backgroundColor:'#f5f5f5',
        borderBottom:'3px solid blue'
      }
      
   });
   
   const MailContainer=styled(Box)({
     display: 'flex', 
     flexDirection:'column', 
     background:'#f5f5f5',
     height:'100%',
     borderRadius:'20px',
     borderTopLeftRadius:0,
     borderTopRightRadius:0 ,
     overflowY:'scroll',
     flexWrap:'nowrap',
     color:'black',
     
     
   
   });
   
   const MainBodyWrapper=styled('div')({
     
     height:'100%',
      display:'flex',
      flexDirection:'column',
      width:'auto',
      
   })