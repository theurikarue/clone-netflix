import React, {useState , useEffect } from 'react'
import './Nav.css'
import netflix_logo from './netflix_logo.png'
import { Navigate, useNavigate } from 'react-router-dom'


const Nav = () => {
const [show,handleShow] = useState(false)
const navigate = useNavigate()

const transitionNavBar=()=>{
    if(window.scrollY>100){
        handleShow(true)
    }else{
        handleShow(false)
    }
}
useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar)
    return()=> window.removeEventListener("scroll",transitionNavBar)
},[])
    return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
                onClick={()=> navigate("/")}
                className='nav__logo'
                src={netflix_logo} />
            <img
                onClick={()=> navigate("/profile")}
                className='nav__avatar' 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
        </div>
        
    </div>
  )
}

export default Nav
