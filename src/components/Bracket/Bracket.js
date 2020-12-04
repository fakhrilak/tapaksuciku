import React from 'react'
import { Data } from '../../pages/Peserta/Data'
import "./Bracket.css"
import Buildbracket from "./BuilBracket"

const Bracket = ({data}) => {
    
    const layer = []

        let param = data.length * 2

        while (param !== 1) {
            param = param/2
            layer.push(param)
        }    
        
        let result = []
        let tot = []
        let left = 0
        let top = 200
        for(let a=0;a<layer.length;a++){            
            for(let b = 0;b<layer[a];b++){
                tot.push({
                        nama:"",
                        nilai:""
                    })
            }
        }
    return (
        <div className="Container-Bracket">
            <div>
                <Buildbracket
                heigh={top}
                width={left}
                data ={data}
                table = {tot}
                layer = {layer}
                />
            </div>
        </div>
    )
}

export default Bracket
