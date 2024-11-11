import React, { useEffect } from 'react';

import { login, logout, selectUser, userSlice } from './features/userSlice';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import { Home } from './Pages/Home/Home';
import Login from  "./Pages/LogIn/Login";
import Signin from './Pages/Signin/Signin';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Profile from './Pages/Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }));
      }
      else{
        dispatch(logout());
      }
    })
   return unsubscribe;
  },[])
  console.log(user);
 
  return (
    <div className="App">
    <ToastContainer
    position="bottom-center"
    theme='dark'
    autoClose={500}

    />

      {
        !user ?
        <Login/>
        :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>} />
           
          </Routes>
        </BrowserRouter>
        
      }
     
    </div>
  );
}

export default App;
