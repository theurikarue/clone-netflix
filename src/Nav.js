import React, {useState , useEffect } from 'react'
import './Nav.css'
import netflix_logo from './netflix_logo.png'

const Nav = () => {
const [show,handleShow] = useState(false)
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
                className='nav__logo'
                src={netflix_logo} alt='netflix logo'/>
            <img
                className='nav__avatar' 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar image'/>
        </div>
        <h1></h1>
    </div>
  )
}

export default Nav
