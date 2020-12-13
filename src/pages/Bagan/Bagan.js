import React, { useState,useEffect } from 'react'
import Bracket from '../../components/Bracket/Bracket'
import "./Bagan.css"
import {Stabilize} from "./Starbilizer"
import {connect} from "react-redux"
import {getKejuaraan, getKejuaraanId} from "../../redux/actions/kejuaraan"
import {getTable} from "../../redux/actions/Table"
const Bagan = ({
    getKejuaraanId,
    getTable,
    id,
    kejuaraan:{kejuaraanId:{Daftars}},
    table:{table},
}) => {
    const [gender,setGender]= useState("LK")
    const [kelas,setKelas]=useState("A PA")
    const [height,setHeight] =useState(0)
    useEffect(()=>{
        getKejuaraanId(id)
        getTable(id)
    },[])
    

    const OnChange=(e)=>{
        setGender(e.target.value)
    }
    const onChange=(e)=>{
        setKelas(e.target.value)
    }
    let filtered = []
    let tables = []
    if(table){
        filtered = table.filter((data)=>data.kelas === kelas)
        tables = table.filter((data)=>data.kelas === kelas)      
    }
     

    return (
        <div className="Container-Bagan" style={{minHeight:height}}>
           <select
            defaultValue={gender}
            onChange={(e)=>OnChange(e)}
            >
                <option value="LK">Laki-Laki</option>
                <option value="PR">Perempuan</option>
            </select>
            {gender === "LK" && <div>
                    <select
                    name="kelas"
                    value={kelas}
                    style={{position:"absolute",left:0,top:250}}
                    onChange={(e) => onChange(e)}
                    >
                        <option value="" unselectable >Select Kelas Laki-Laki</option>
                        <option value="A PA">A PA</option>
                        <option value="B PA">B PA</option>
                        <option value="C PA">C PA</option>
                        <option value="D PA">D PA</option>
                        <option value="E PA">E PA</option>
                        <option value="F PA">F PA</option>
                        <option value="G PA">G PA</option>
                        <option value="H PA">H PA</option>
                        <option value="I PA">I PA</option>
                    </select>
                </div>}
                {gender === "PR"&& 
                <div>
                    <select
                    name="kelas"
                    value={kelas}
                    onChange={(e) => onChange(e)}
                    style={{position:"absolute",left:0,top:250}}
                    >
                        <option value="" unselectable >Select Kelas Perempuan</option>
                        <option value="A PI">A PI</option>
                        <option value="B PI">B PI</option>
                        <option value="C PI">C PI</option>
                        <option value="D PI">D PI</option>
                        <option value="E PI">E PI</option>
                        <option value="F PI">F PI</option>
                        <option value="G PI">G PI</option>
                        <option value="H PI">H PI</option>
                        <option value="I PI">I PI</option>
                    </select>
                </div>}
            {tables.length > 0 && table &&<Bracket data={Stabilize(filtered)} table={tables} setHeight={setHeight}/>}
        </div>
    )
}
const mapStateToProps = (state) => ({
    kejuaraan : state.kejuaraan,
    daftar : state.daftar,
    table : state.table
});

export default connect(mapStateToProps, {getKejuaraanId,getTable})(Bagan);
