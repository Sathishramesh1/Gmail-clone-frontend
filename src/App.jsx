
import { useState } from 'react';
import './App.css'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import SignIn from './pages/Login';
import SignUp from './pages/Register';
import Inbox from './pages/Inbox';
import { ToastContainer } from 'react-toastify';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import { useDispatch, useSelector } from 'react-redux';
import SingleMail from './pages/SingleMail';
import Send from './pages/Send';
import ErrorPage from './pages/ErrorPage';
import Draft from './pages/Draft';
import Starred from './pages/Starred';
import Important from './pages/Important';
import Trash from './pages/Trash';

function App() {

const token=useSelector((state)=>state.email.user.token);




  return (
    <div>
     
     <BrowserRouter>
      <Routes>

      <Route path='/register' Component={SignUp}/>
        <Route exact path='/' element={<SignIn />}/>
        <Route  path='/inbox' element={token?<Inbox/>:<Navigate to='/'></Navigate>} >
        </Route>
        <Route path='/:type/:messageid' element={<SingleMail/>}></Route>
      <Route  path='/send' element={<Send/>} />
      <Route path='/draft' Component={Draft}/>
      <Route  path='/starred' Component={Starred} />
      <Route  path='/important' Component={Important} />
      <Route path='/trash' Component={Trash}/>
        <Route  path='/forget' Component={Forget}/>
        <Route  path='/reset/:resetToken' Component={Reset}/>
        
        <Route path='*' Component={ErrorPage}/>
      </Routes>
       </BrowserRouter>
       <ToastContainer/>
       
       </div>
  )
}

export default App
