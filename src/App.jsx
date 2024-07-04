// import counterSlice  from './features';
import HomeScreen from './screens/HomeScreen'
import React,{useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import {auth} from "./firebase"
import {useDispatch,useSelector} from "react-redux"
import {login,logout,selectUser} from './features/userSlice'



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // User is logged in
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      } else{
      // User is logged out
        dispatch(logout())
      }
    })
    // Clean up subscription on unmount
    return unsubscribe

  },[dispatch])

  return (
    <div className="app">
      <Router>
        {!user ?(
          <LoginScreen/>
        ):(
          <Routes>
            <Route exact path = "/" element={<HomeScreen/>}/>
            <Route  path = "/profile" element={<ProfileScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
