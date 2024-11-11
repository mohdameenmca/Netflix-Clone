import React from 'react'
import Nav from '../../Components/Navigation/Nav'
import './Profile.css'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const Profile = () => {
    const user = useSelector(selectUser);
    
    const logout=()=>{
        toast.error("Logging out...",{theme:"colored",hideProgressBar: true})
        signOut(auth)

    }
  return (
    <div className='profile'>
        <Nav/>
        <div className='Profile_body'>
            <div className='profile_header'>
            <h2>Edit Profile</h2>
        <img src='https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589'
         alt='Avator' className='edit_logo'/>
         </div>
         <div className='profile_info'>
            <h4>{user.email}</h4>
            <h3>Plans</h3>
            <button onClick={logout} >Sign Out</button>
         </div>
        </div>
    </div>
  )
}

export default Profile