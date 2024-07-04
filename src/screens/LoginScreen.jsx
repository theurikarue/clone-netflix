import React, {useState} from 'react'
import './LoginScreen.css'
import netflix from "../netflix_logo.png"
import SignupScreen from './SignupScreen'



const LoginScreen = () => {
const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img 
                className='loginScreen__logo'
                src={netflix} 
                alt="netflix logo" />
        
                <button 
                    // onClick={()=>}
                    className="loginScreen__button">
                    Sign In
                </button>
                <div className="loginScreen__gradient"/>
        </div>
        <div className="loginScreen__body">
            {signIn ? (
            <SignupScreen />
            ) : (
            <>
                <h1>Unlimited films, TV Programmes and more.</h1>
                <h2>Watch Anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen__input">
                <form onSubmit={(e) => { e.preventDefault(); alert('Sign In'); }}>
                    <input type="email" placeholder='Email Address' />
                    <button 
                    onClick={() => setSignIn(true)} 
                    className="loginScreen__getStarted"
                    >
                    GET STARTED
                    </button>
                </form>
                </div>
            </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen