import React,{useState} from 'react'
import "./Navbar.css"
import {Link,useHistory} from "react-router-dom"
import { connect } from "react-redux";
import {handleLogout} from '../../redux/actions/auth'
import {Link as Linkto} from "react-scroll"
import { useMediaQuery } from 'react-responsive'
import Sidebar from './Sidebar';

const Navbar = ({register,login,auth:{isAuthenticated},handleLogout}) => {
    const [show,setShow] = useState(false)
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    let history =useHistory()
    return (
        <div className="Container-Navbar">
            {!isPortrait && 
            <ul>
                {!isAuthenticated && <li><button onClick={()=>login()}>Login</button></li>}
                {!isAuthenticated && <li><button onClick={()=>register()}>Register</button></li>}
                {isAuthenticated && <li><button onClick={()=>handleLogout()}>Log Out</button></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                <li ><Linkto to="about" smooth={true} duration={1000}>About</Linkto></li>
                <li ><Link to ="/">Home</Link></li>
            </ul>}

                {isPortrait && <Sidebar  
                login={login}
                register={register}
                handleLogout={handleLogout}
                isAuthenticated={isAuthenticated}
                />}
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, {handleLogout})(Navbar);