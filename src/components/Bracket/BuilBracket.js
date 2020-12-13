import React, { useEffect, useState } from 'react'
import "./Bracket.css"
import axios from "axios"
const Bracket2 = ({table,layer,setHeight}) => {
    
    let grup = []
    
    ///inisialisasi state
    const [index,setIndex]=useState(0)
    const [kuning,setKuning]=useState(0)
    const [biru,setBiru]=useState(0)

    ///margeData and table
    if(table){
        let start = -2
        let end = -1
        let left = 0
        let top = 0
        let toptetap =100
        let space = 50
        let analisis = 100
        for(let a = 1;a < layer.length;a++){
            left+=300
            if(a>0){
             analisis+=analisis
             space+=space
             }
             top = toptetap
             top = top -space
            for(let b = 0; b<layer[a];b++){
             start += 2
             end += 2
             top += analisis
             grup.push({kuning:{nama:table[start].nama,
                 nilai:table[start].nilai},
                 biru:{nama:table[end].nama,
                 nilai:table[end].nilai},
                 css:{top:top,left:left}})
            }
        }
    }
  

    const OnChange=(e)=>{
        setIndex(e.target.value)
    }
    const Kuning=(e)=>{
        setKuning(e.target.value)
    }
    const Biru=(e)=>{
        setBiru(e.target.value)
    }

    setHeight(grup[layer[1]-1].css.top)
    return (
        <div className="Container-BuilBracket" style={{minHeight:grup[layer[1]-1].css.top}}>        
            {/* <div>
                <input
            placeholder="Kuning"
            value={kuning}
            onChange={e=>Kuning(e)}
            />
            </div>
            <div>
                <input
            placeholder="Biru"
            value={biru}
            onChange={e=>Biru(e)}
            />
            </div> */}
            {/* <select
            defaultValue={index}
            onChange={(e)=>OnChange(e)}
            >
                {grup.map((data,index)=>(
                    <option key={index} value={index}>A{index}</option>
                ))}
                
            </select> */}
         <div className="Container-BuilBracket">
            {grup.map((data,index)=>(
               <div style={{position:"absolute",top:data.css.top,left:data.css.left}} key={index}>
                   <h3>A{index}</h3>
                   <div className="display-table">
                       <div className="nama-wrapper1">
                            {data.kuning.nama}
                            {data.kuning.kontingen}
                        </div>
                        <div className="score-wrapper1">
                            {data.kuning.nilai}
                        </div>
                   </div>
                   <div className="display-table">
                       <div className="nama-wrapper2">
                            {data.biru.nama}
                            {data.biru.kontingen}
                        </div>
                        <div className="score-wrapper2">
                            {data.biru.nilai}
                        </div>
                   </div>
                </div> 
            ))}
        </div>
                
        </div>
    )
}

export default Bracket2
