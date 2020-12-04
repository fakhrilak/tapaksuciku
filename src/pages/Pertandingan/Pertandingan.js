import React from 'react'
import "./Pertandingan.css"
import {Data} from "./Data"
import {useHistory} from "react-router-dom"

const Pertandingan = ({match}) => {
    const history = useHistory()
    const HandlePush =(nama)=>{
        history.push(`/detail/${nama}`)
    }
    return (
        <div style={{paddingTop:100}}>
        <h1>{match.params.nama}</h1>
        <div className="Container-Pertandingan">     
            {Data.map((data)=>(
                <div className="Content-Pertandingan"
                onClick={()=>HandlePush(data.judul)}
                >
                    <h1>{data.judul}</h1>
                </div>
            ))}
        </div>
        </div>
    )
}


export default Pertandingan