import React ,{useState,useEffect}from 'react'
import "./Livescore.css"
import {Data} from "./Data"
import socketIOClient from "socket.io-client";
import Body from "./Body"

const Livescore = ({id,nama}) => {
    const [nilai,setNilai] = useState({
        nilai1_kuning1:0,
        nilai2_kuning1:0,
        nilai3_kuning1:0,
        nilai4_kuning1:0,
        nilai5_kuning1:0,
        nilai1_kuning2:0,
        nilai2_kuning2:0,
        nilai3_kuning2:0,
        nilai4_kuning2:0,
        nilai5_kuning2:0,
        nilai1_kuning3:0,
        nilai2_kuning3:0,
        nilai3_kuning3:0,
        nilai4_kuning3:0,
        nilai5_kuning3:0,
        nilai1_biru1:0,
        nilai2_biru1:0,
        nilai3_biru1:0,
        nilai4_biru1:0,
        nilai5_biru1:0,
        nilai1_biru2:0,
        nilai2_biru2:0,
        nilai3_biru2:0,
        nilai4_biru2:0,
        nilai5_biru2:0,
        nilai1_biru3:0,
        nilai2_biru3:0,
        nilai3_biru3:0,
        nilai4_biru3:0,
        nilai5_biru3:0,
    })
    const ENDPOINT = "https://tapaksuci.herokuapp.com/";
    const socket = socketIOClient(ENDPOINT);
    useEffect(() => {
        socket.on(`WASIT 1${id}kuning`,data=>{
            if (data.babak === 1){
                let a = nilai.nilai1_kuning1 += data.nilai
                setNilai({...nilai,nilai1_kuning1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai1_kuning2 += data.nilai
                setNilai({...nilai,nilai1_kuning2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai1_kuning3 += data.nilai
                setNilai({...nilai,nilai1_kuning3 : a})
            }          
        })
        socket.on(`WASIT 2${id}kuning`,data=>{
            console.log(data)
            if (data.babak === 1){
                let a = nilai.nilai2_kuning1 += data.nilai
                setNilai({...nilai,nilai2_kuning1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai2_kuning2 += data.nilai
                setNilai({...nilai,nilai2_kuning2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai2_kuning3 += data.nilai
                setNilai({...nilai,nilai2_kuning3 : a})
            } 
        })
        socket.on(`WASIT 3${id}kuning`,data=>{
            if (data.babak === 1){
                let a = nilai.nilai3_kuning1 += data.nilai
                setNilai({...nilai,nilai3_kuning1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai3_kuning2 += data.nilai
                setNilai({...nilai,nilai3_kuning2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai3_kuning3 += data.nilai
                setNilai({...nilai,nilai3_kuning3 : a})
            }
        })
        socket.on(`WASIT 4${id}kuning`,data=>{
            if (data.babak === 1){
                let a = nilai.nilai4_kuning1 += data.nilai
                setNilai({...nilai,nilai4_kuning1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai4_kuning2 += data.nilai
                setNilai({...nilai,nilai4_kuning2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai4_kuning3 += data.nilai
                setNilai({...nilai,nilai4_kuning3 : a})
            }
        })
        socket.on(`WASIT 5${id}kuning`,data=>{
            if (data.babak === 1){
                let a = nilai.nilai5_kuning1 += data.nilai
                setNilai({...nilai,nila5_kuning1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai5_kuning2 += data.nilai
                setNilai({...nilai,nilai5_kuning2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai5_kuning3 += data.nilai
                setNilai({...nilai,nilai5_kuning3 : a})
            }
        })
        //Biru
        socket.on(`WASIT 1${id}biru`,data=>{
            if (data.babak === 1){
                let a = nilai.nilai1_biru1 += data.nilai
                setNilai({...nilai,nilai1_biru1 : a})
            }else if(data.babak === 2){
                let a = nilai.nilai1_biru2 += data.nilai
                setNilai({...nilai,nilai1_biru2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai1_biru3 += data.nilai
                setNilai({...nilai,nilai1_biru3 : a})
            }           
        })
        socket.on(`WASIT 2${id}biru`,data=>{
            if(data.babak === 1){
                let a = nilai.nilai2_biru1 += data.nilai
                setNilai({...nilai,nilai2_biru1 : a})
            }else  if(data.babak === 2){
                let a = nilai.nilai2_biru2 += data.nilai
                setNilai({...nilai,nilai2_biru2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai2_biru3 += data.nilai
                setNilai({...nilai,nilai2_biru3 : a})
            }  
        })
        socket.on(`WASIT 3${id}biru`,data=>{
            if(data.babak === 1){
                let a = nilai.nilai3_biru1 += data.nilai
                setNilai({...nilai,nilai3_biru1 : a})
            }else  if(data.babak === 2){
                let a = nilai.nilai3_biru2 += data.nilai
                setNilai({...nilai,nilai3_biru2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai3_biru3 += data.nilai
                setNilai({...nilai,nilai3_biru3 : a})
            } 
        })
        socket.on(`WASIT 4${id}biru`,data=>{
            if(data.babak === 1){
                let a = nilai.nilai4_biru1 += data.nilai
                setNilai({...nilai,nilai4_biru1 : a})
            }else  if(data.babak === 2){
                let a = nilai.nilai4_biru2 += data.nilai
                setNilai({...nilai,nilai4_biru2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai4_biru3 += data.nilai
                setNilai({...nilai,nilai4_biru3 : a})
            } 
        })
        socket.on(`WASIT 5${id}biru`,data=>{
            if(data.babak === 1){
                let a = nilai.nilai5_biru1 += data.nilai
                setNilai({...nilai,nilai5_biru1 : a})
            }else  if(data.babak === 2){
                let a = nilai.nilai5_biru2 += data.nilai
                setNilai({...nilai,nilai5_biru2 : a})
            }else if(data.babak === 3){
                let a = nilai.nilai5_biru3 += data.nilai
                setNilai({...nilai,nilai5_biru3 : a})
            } 
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    
    return (
        <div className="Container-LiveScore">
            <table>
                <thead>
                    <tr>
                        {Data.map((data,index)=>(
                            <th key={index}>
                                <h3>{data.judul}</h3>
                                <th className="LS-Kuning">{data.subjudul1}</th>
                                <th className="LS-Biru">{data.sabjudul2}</th>
                            </th>
                        ))}
                    </tr>
                </thead>
                <Body nilai={nilai}/>
            </table>
        </div>
    )
}

export default Livescore
