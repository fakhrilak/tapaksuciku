import React, { useEffect, useState } from 'react'
import "./Form.css"
import {connect} from "react-redux"
import {getKejuaraanId} from "../../redux/actions/kejuaraan"
import {postDaftar} from "../../redux/actions/Daftar"
import {Reset} from "../../redux/actions/clear"
const Form = ({daftar:{message,errorDaftar}
    ,id,
    kejuaraan:{kejuaraanId,error},
    getKejuaraanId,
    postDaftar,
    Reset
}) => {
    const [gender,setGender]= useState("false")
    const [formData, setFormData] = useState({
        fullnama: "",
        kontingen: "",
        kelas: "",
    });
    useEffect(()=>{
        if(id !== 0 ){
            getKejuaraanId(id)
        }
        if(message){
            alert(message)
            setFormData({
            fullnama: "",
            kontingen: "",
            kelas: "",
            })
        }
    },[id,message])
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const { fullnama,kontingen,kelas } = formData;

    const OnChange=(e)=>{
        setGender(e.target.value)
    }

    const Onsubmit =(e)=>{
        e.preventDefault();
        postDaftar(fullnama,kelas,kontingen,id)
        setTimeout(()=>{
          Reset()  
        },2000)       
    }
    return kejuaraanId ? (
        <div>
           {kejuaraanId.length !== 0 && <h1>{kejuaraanId.nama}</h1>}
        <div className="Container-Form" >
            <form onSubmit={(e)=>Onsubmit(e)}>
                <div style={{paddingTop:20}}>
                <p>{errorDaftar}</p>
                   <input
                    placeholder="Nama Lengkap"
                    type="text"
                    value={fullnama}
                    name="fullnama"
                    onChange={(e) => onChange(e)}
                    /> 
                </div>
                <div>
                    <input
                    placeholder="Kontingen"
                    type="text"
                    value={kontingen}
                    name="kontingen"
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <div>
                    <select 
                    defaultValue={gender}
                    onChange={(e)=>OnChange(e)}
                    >
                        <option value="false">Laki-Laki</option>
                        <option value="true">Perempuan</option>
                    </select>
                </div>
                {gender === "false" && <div>
                    <select
                    name="kelas"
                    value={kelas}
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
                {gender === "true"&& 
                <div>
                    <select
                    name="kelas"
                    value={kelas}
                    onChange={(e) => onChange(e)}
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
                <div>
                    <button>SUBMIT</button>
                </div>              
            </form>
        </div>
        </div>
    ):null
}

const mapStateToProps = (state) => ({
    daftar :state.daftar,
    kejuaraan :state.kejuaraan
});

export default connect(mapStateToProps, {getKejuaraanId,postDaftar,Reset})(Form);
