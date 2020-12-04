import React, { useState } from 'react'
import Bracket from '../../components/Bracket/Bracket'
import {Kelas} from "../Peserta/Data"
import "./Bagan.css"
const Bagan = () => {
    const [kelas,setKelas]=useState("APA")
    const OnChange=(e)=>{
        setKelas(e.target.value)
    }
    const data =[
        {
            nama:"1",
            nilai:"a"
        },
        {
            nama:"2",
            nilai:"b"
        },
        {
            nama:"3",
            nilai:"a"
        },
        {
            nama:"4",
            nilai:"b"
        },
        {
            nama:"1",
            nilai:"a"
        },
        {
            nama:"2",
            nilai:"b"
        },
        {
            nama:"3",
            nilai:"a"
        },
        {
            nama:"4",
            nilai:"b"
        }
        
    ]
    const cek =[
        {
            nama:"1",
            nilai:"a"
        },
        {
            nama:"2",
            nilai:"b"
        },
        {
            nama:"1",
            nilai:"a"
        },
        {
            nama:"2",
            nilai:"b"
        }
    ]
    return (
        <div className="Container-Bagan">
            <select
            defaultValue={kelas}
            onChange={(e)=>OnChange(e)}
            >
                {Kelas.map((data)=>(
                    <option key={data.kelas} value={data.kelas}>{data.kelas}</option>
                ))}
                
            </select>
            {kelas === "APA" && <div>
                <Bracket data={data}/>
            </div>}
            {kelas === "BPA"&&<div>
                <Bracket data={cek}/>
            </div>}
            
        </div>
    )
}

export default Bagan
