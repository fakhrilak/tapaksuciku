import React, { useState } from 'react'
import "./Form.css"
const Form = () => {
    const [gender,setGender]= useState("false")
    const OnChange=(e)=>{
        setGender(e.target.value)
    }

    return (
        <div className="Container-Form">
            <form>
                <div style={{paddingTop:20}}>
                   <input
                placeholder="Nama Lengkap"
                /> 
                </div>
                <div>
                    <input
                placeholder="Kontingen"
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
                    <select>
                        <option>A PA</option>
                        <option>B PA</option>
                        <option>C PA</option>
                        <option>D PA</option>
                        <option>E PA</option>
                        <option>F PA</option>
                        <option>G PA</option>
                        <option>H PA</option>
                        <option>I PA</option>
                    </select>
                </div>}
                {gender === "true"&& 
                <div>
                    <select>
                        <option>A PI</option>
                        <option>B PI</option>
                        <option>C PI</option>
                        <option>D PI</option>
                        <option>E PI</option>
                        <option>F PI</option>
                        <option>G PI</option>
                        <option>H PI</option>
                        <option>I PI</option>
                    </select>
                </div>}
                <div>
                    <button>SUBMIT</button>
                </div>              
            </form>
        </div>
    )
}

export default Form
