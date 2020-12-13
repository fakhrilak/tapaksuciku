import React, { useState,useEffect} from 'react'
import "./Peserta.css"
import {Data,Kelas} from "./Data"
import {connect} from "react-redux"
import {getKejuaraanId} from "../../redux/actions/kejuaraan"
import gambar from "../../img/logo.png"
const Peserta = ({kejuaraan:{kejuaraanId:{Daftars}},id,getKejuaraanId}) => {
    const [kelas,setKelas] = useState("ALL")
    useEffect(() => {
        getKejuaraanId(id)
    }, [])
    let data = []
    if(Daftars){
        if (kelas === "ALL"){
        data = [...Daftars]
    }      
    else{
       data = Daftars.filter(data => data.kelas === kelas) 
    }
    }
    
    var A = [...data]
    const OnChange=(e)=>{
        setKelas(e.target.value)
    }
    console.log(data)
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
                     <div className="col-md-3 col-sm-6" key={index}>
                        <div className="our-team">
                                <div className="pic">
                                    <img src={gambar}/>
                                </div>
                                <div className="team-contenT">
                                    <h3 className="title">{data.nama}</h3>
                                    <span className="post">{data.kontingen}{", "} {data.kelas}</span>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    kejuaraan : state.kejuaraan,
    daftar : state.daftar,
    table : state.table
});

export default connect(mapStateToProps, {getKejuaraanId})(Peserta);
