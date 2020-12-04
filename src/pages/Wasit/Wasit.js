import React from 'react'
import "./Wasit.css"
import {DataBiru,DataKuning} from "./Data"
const Wasit = ({}) => {
    return (
        <div className="Container-Wasit">
            <input
            placeholder="Input Partai"
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
                        <button className="Button-kuning">{data.text}</button>
                    </div>
                ))}
                </div>
                <div className="keyboard-wrapper">
                {DataBiru.map((data)=>(
                    <div>
                        <button className="Button-biru">{data.text}</button>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}

export default Wasit
