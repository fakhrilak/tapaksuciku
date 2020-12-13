import React from 'react'
import "./Pertandingan.css"
import {Data} from "./Data"
import {useHistory} from "react-router-dom"
import {connect} from "react-redux"
import {setDaftar} from "../../redux/actions/Daftar"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useMediaQuery } from 'react-responsive'

const Pertandingan = ({match,setDaftar}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const history = useHistory()

    const HandlePush =(nama)=>{
        history.push(`/detail/${nama}/${match.params.id}`)  
        const data = {nama:match.params.nama,id:match.params.id}
        setDaftar(data)
    }
    return (
        <div style={{paddingTop:100}}>
        <h1>{match.params.nama}</h1>
        {isDesktopOrLaptop&& !isPortrait && <div className="Container-Pertandingan">
            {Data.map((data)=>(
                <div className="Content-Pertandingan"
                onClick={()=>HandlePush(data.judul)}
                >
                    <h1>{data.judul}</h1>
                </div>
            ))}
        </div>}
        {isPortrait&&
        <div style={{margin:20}}>
        <Slider autoplay={3000}>
                {Data.map((data)=>(
                    <div className="Content-Pertandingan"
                    onClick={()=>HandlePush(data.judul)}
                    >
                        <h1>{data.judul}</h1>
                    </div>
                ))}
        </Slider>
        </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setDaftar})(Pertandingan);