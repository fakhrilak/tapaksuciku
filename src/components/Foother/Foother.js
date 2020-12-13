import React from 'react'
import "./Foother.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Foother = () => {
    return (
        <div className="Container-Foother">
            <footer>
                <p>	&copy; 2020 Zilog-Corporation | Make with ❤️ using ReactJs</p>
                <a href="https://www.facebook.com/assyroh.kaffah/" target="_blank">
                <FontAwesomeIcon 
                        icon={faFacebook} 
                        style={{color:'#1877f2',margin:20,fontSize:20}}
                        />
                </a>
                <a href="https://twitter.com/FakhrilAK/" target="_blank">
                <FontAwesomeIcon 
                        icon={faTwitter} 
                        style={{color:'#1da1f2',margin:20,fontSize:20}}
                        />
                </a>
                <a href="https://www.instagram.com/fakhrilak/" target="_blank">
                <FontAwesomeIcon 
                        icon={faInstagram} 
                        style={{color:'#c32aa3',margin:20,fontSize:20}}
                        />
                </a>
                <a href="https://www.youtube.com/feed/my_videos/" target="_blank">
                <FontAwesomeIcon 
                        icon={faLinkedin} 
                        style={{color:'#0a66c2',margin:20,fontSize:20}}
                        />
                </a>
                <a href="https://www.youtube.com/feed/my_videos/" target="_blank">
                <FontAwesomeIcon 
                        icon={faYoutube} 
                        style={{color:'#ff0000',margin:20,fontSize:20}}
                        />
                </a>
            </footer>
        </div>
        
    )
}

export default Foother