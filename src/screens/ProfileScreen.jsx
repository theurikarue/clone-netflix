import React from 'react'
import Nav from "../Nav"
import './ProfileScreen.css'
import {auth} from "../firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import PlanScreen from './PlanScreen'


const ProfileScreen = () => {
    const user = useSelector(selectUser)

    return (
        <div className='profileScreen'>
            <Nav/>
            <div className="profileScreen__body">
                <div className="profile"></div>
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>

                            <PlanScreen/>

                            <button 
                                onClick={()=>auth.signOut()}
                                className='profileScreen__signOut' >Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileScreen