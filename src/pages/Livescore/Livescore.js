import React from 'react'
import "./Livescore.css"
import {Data,Body} from "./Data"
const Livescore = () => {
    
    return (
        <div className="Container-LiveScore">
            <table>
                <thead>
                    <tr>
                        {Data.map((data)=>(
                            <th>
                                <h3>{data.judul}</h3>
                                <th className="LS-Kuning">{data.subjudul1}</th>
                                <th className="LS-Biru">{data.sabjudul2}</th>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {Body.map((data)=>(
                   <tr>
                    <h3>{data.babak}</h3>
                    <td>
                        <td className="TD-Kuning">{data.judul1}</td>
                        <td className="TD-Biru">{data.judul2}</td>
                    </td>
                    <td>
                        <td className="TD-Kuning">{data.judul1}</td>
                        <td className="TD-Biru">{data.judul2}</td>
                    </td>
                    <td>
                    <td className="TD-Kuning">{data.judul1}</td>
                        <td className="TD-Biru">{data.judul2}</td>
                    </td>
                    <td>
                    <td className="TD-Kuning">{data.judul1}</td>
                        <td className="TD-Biru">{data.judul2}</td>
                    </td>
                    <td>
                    <td className="TD-Kuning">{data.judul1}</td>
                        <td className="TD-Biru">{data.judul2}</td>
                    </td>
                </tr> 
                ))}
                
                </tbody>
            </table>
        </div>
    )
}

export default Livescore
