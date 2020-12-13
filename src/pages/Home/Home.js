import React from 'react'
import "./Home.css"
import logo from "../../img/logo1.png"
import About from "../../components/About/About"
import { useMediaQuery } from 'react-responsive'
const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
    return (
        <div className = "Container-Home">
            <div className = "Content-Home">
                <img src={logo}/>
                <h1>PERGURUAN SENI BELADIRI INDONESIA</h1>
                <h2>TAPAK SUCI PUTERA MUHAMMADIYAH</h2>
            </div>
            {isDesktopOrLaptop &&<About/>}
        </div>
    )
}

export default Home
