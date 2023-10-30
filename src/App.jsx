
import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Box, List } from '@mui/material';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import { ListItemButton } from '@mui/material';

function App() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
       <Layout style={{position:'fixed', width:'100%'}}>
      <Header toggleDrawer={toggleDrawer} />
      
      <Sidebar openDrawer={openDrawer}/>
      <Main>
      <IconBar>
        iconbar
      </IconBar>
      <Box sx={{paddingLeft:0, height:'100vh',background:'blue', overflowY:""}} >
        <Box>
          selct iocn
        </Box>
      <Box sx={{ display: 'flex', flexDirection:'column', width:'100%',
    background:'green',height:'50px'
    }}>
      <Box sx={{display:'grid', gridTemplateColumns:"10% 30% auto 5%"}}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>

      </Box>
        </Box>
          
      </Box>
      <SideIcon>

      </SideIcon>
      </Main>
      
      </Layout>
      </>
  )
}

export default App


const Layout=styled(Box)({
 display:"flex",
 flexDirection:'column',

 

})

const Main=styled(Box)({
  display:"grid",
  // flexDirection:'row',
  gridTemplateColumns:"6% auto 5%",
  border:'2px solid red',
  height:'100vh',
 
 })
const SideIcon=styled(Box)({
   display:'flex',
   flexDirection:'column',
   background:'red',
   height:'100vh'
 });

 const IconBar=styled(Box)({
  display:'flex',
  flexDirection:'column',
  height:'100vh',
  background:'#f5f5f5'
})

 