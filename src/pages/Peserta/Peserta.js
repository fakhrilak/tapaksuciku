import React, { useState } from 'react'
import "./Peserta.css"
import {Data,Kelas} from "./Data"
const Peserta = () => {
    const [kelas,setKelas] = useState("ALL")
    let data = []
    if (kelas === "ALL"){
        data = [...Data]
    }      
    else{
       data=Data.filter(e=>e.kelas===kelas) 
    }
    var A = [...data]
    const OnChange=(e)=>{
        setKelas(e.target.value)
    }
    return (
        <div className="Container-Peserta">
            <h3 style={{float:"left"}}>{A.length}</h3>
            <select
            defaultValue={kelas}
            onChange={(e)=>OnChange(e)}
            >
                {Kelas.map((data)=>(
                    <option key={data.kelas} value={data.kelas}>{data.kelas}</option>
                ))}
                
            </select>
            <div className="wrapper-peserta">
                {data.map((data,index)=>(
                    <div key={index} className="card-peserta">
                        <div style={{margin:5}}>
                        <h3>NAMA : {data.nama}</h3>
                        <h4>KONTINGEN : {data.kontingen}</h4>
                        <h5>KELAS : {data.kelas}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Peserta
