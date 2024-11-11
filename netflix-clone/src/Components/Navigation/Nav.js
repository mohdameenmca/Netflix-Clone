import React, { useEffect, useState } from 'react'
import logo from '../../Asset/Netflix_logo.png'
import "./Nav.css"
import { Link } from 'react-router-dom';
const Nav = () => {
    const [show,setShow]=useState(false);

    function scrollHandler(){
        if(window.scrollY>=100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler);
        return(()=>window.removeEventListener("scroll",scrollHandler))
    },[])

  return (
    <nav className={`nav ${show && "nav_transtion"}`}>
        <div className='nav_content'>
        <Link to='/'>
        <img src={logo} 
        alt='Application Logo' className='nav_logo' />
        </Link>
           <Link to='/profile'>
        <img src='https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589'
         alt='Avator' className='nav_avator'/>
         </Link>
        </div>
    </nav>
  )
}

export default Nav