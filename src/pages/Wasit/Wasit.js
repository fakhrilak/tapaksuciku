import React,{useState} from 'react'
import "./Wasit.css"
import {DataBiru,DataKuning} from "./Data"
import socketIOClient from "socket.io-client";

const Wasit = ({id,nama}) => {
    const ENDPOINT = "https://tapaksuci.herokuapp.com/";
    const socket = socketIOClient(ENDPOINT);
    const [babak,setBabak] = useState(1)
    const InputNilai=(nilai,params)=>{
        const data = {
            data:nilai,
            id:id,
            nama:nama,
            params:params,
            babak: babak
        }
        socket.emit("listening",data)    
    }
    return (
        <div className="Container-Wasit">
            <input
            placeholder="Input Partai"
            />
            <input
            placeholder="Input Babak"
            value={babak}
            onChange={e =>setBabak(e.target.value)}
            />
            <div className="monitor">
                <div>
                    <div className="Sudut-Kuning">
                        *Nama Pesilat Sudut Kuning
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th><h3>Babak</h3></th>
                                <th><h3>Katak/Mawar</h3></th> 
                                <th><h3>Harimau</h3></th>
                                <th><h3>Terkaman</h3></th>                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <h3>1</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <h3>2</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <h3>3</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="Sudut-Biru">
                        *Nama Pesilat Sudut Biru
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th><h3>Babak</h3></th>
                                <th><h3>Katak/Mawar</h3></th> 
                                <th><h3>Harimau</h3></th>
                                <th><h3>Terkaman</h3></th>                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <h3>1</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <h3>2</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <h3>3</h3>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div  className="keyboard">
                <div className="keyboard-wrapper">
                {DataKuning.map((data)=>(
                    <div>
                        <button className="Button-kuning"
                        onClick={()=>InputNilai(data.value,"kuning")}
                        >{data.text}</button>
                    </div>
                ))}
                </div>
                <div className="keyboard-wrapper">
                {DataBiru.map((data)=>(
                    <div>
                        <button className="Button-biru"
                         onClick={()=>InputNilai(data.value,"biru")}
                        >{data.text}</button>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}

export default Wasit
