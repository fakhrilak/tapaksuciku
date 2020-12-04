import React from 'react'
import logo from "../../img/logo.png"
import "./Profile.css"
import {Dataa} from "./Data"
import {useHistory} from "react-router-dom"

const Profile = () => {
    const Data = [{
        judul: "Jumlah Pertandingan",
        jumlah :Dataa.length
    },
    {
        judul: "Jumlah Murid",
        jumlah: "200"
    }
]
const history = useHistory()
const HandlePush =(nama,id)=>{
    history.push(`/pertandingan/${nama}/${id}`)
}
    return (
        <div className="Container-Profile">
            <div className="Content-Profile">
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <div>
                        <h1>PD TS 01 KOTA YOGYAKARTA</h1>
                    </div>
                    <div className="SubContent">
                        {Data.map((data)=>(
                            <div className="profile" >
                                <h4>{data.judul}</h4>
                                <h2>{data.jumlah}</h2>
                            </div>
                        ))}                    
                    </div>
                </div>
            </div>
            <div>
               {Dataa.map((data)=>(
                   <div className="grid-pertandingan"
                   onClick={()=>HandlePush(data.judul,data.id)}
                   >
                       <h1>{data.judul}</h1>
                       <h3>{data.lokasi}</h3>
                       <h3>{data.waktu}</h3>
                       <h3>{data.jumlah}</h3>
                   </div>
               ))}
            </div>
        </div>
    )
}

export default Profile