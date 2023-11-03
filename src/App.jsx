
import { useState } from 'react';
import './App.css'
import Layout from './Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignIn from './pages/Login';
import SignUp from './pages/Register';
import Inbox from './components/Inbox';
import { ToastContainer } from 'react-toastify';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import {getToken} from './components/redux-container/slices/emailSlice'
import { useDispatch, useSelector } from 'react-redux';

function App() {


const [token, setToken] = useState(localStorage.getItem('token')||null);

// const logout = () => {
//   localStorage.removeItem('token');
//   setToken('');
// }
   console.log(token)

  return (
    <div>
      
     <BrowserRouter>
      <Routes>

      <Route path='/register' Component={SignUp}/>
        <Route exact path='/' element={<SignIn />}/>
        <Route path='/protected' element={<Inbox/>} >
          
        </Route>

        <Route  path='/forget' Component={Forget}/>
        <Route  path='/reset/:resetToken' Component={Reset}/>
        
      </Routes>
       </BrowserRouter>
       <ToastContainer/>
       </div>
  )
}

export default App
