import React,{useEffect,useState} from 'react'
import { Data } from '../../pages/Peserta/Data'
import "./Bracket.css"
import Buildbracket from "./BuilBracket"
import axios from "axios"
const Bracket = ({data,table,setHeight}) => {
    const [triger,setTriger] = useState(false)
    useEffect(() => {

    }, [triger,!triger])

    const layer = []

        let param = data

        while (param !== 1) {
            param = param/2
            layer.push(param)
        }
    return (
        <div className="Container-Bracket">
            {table.length >0 && <div>
                <Buildbracket
                table = {table}
                layer = {layer}
                triger={triger}
                setTriger={setTriger}
                setHeight={setHeight}
                />
            </div>}
        </div>
    )
}

export default Bracket
