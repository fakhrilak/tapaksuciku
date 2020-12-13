import React,{useEffect, useState} from 'react'
import {postTable,getTable} from "../../redux/actions/Table"
import {connect} from "react-redux"
const Table = ({filtered,postTable,id,table,getTable,kelas,trigres,setTrigers}) => {
    const [triger, settriger] = useState(false)
    useEffect(()=>{
        Random(filtered)
    },[triger,table])
    const Random = (arr)=>{
        var rand, temp, i;   
        for (i = arr.length - 1; i > 0; i -= 1) {
            rand = Math.floor((i + 1) * Math.random());
            temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        return arr
    }
    const HandlePost=()=>{
        postTable(id,filtered,kelas)
        setTrigers(!trigres)
    }
    return (
        <div>
            <div>
                <button onClick={()=>settriger(!triger)}>RANDOM</button>
            </div>
            <div>
                <button style={{float:"right"}} onClick={()=>HandlePost()}>CREATE TABLE</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>NAMA</th>
                        <th>KELAS</th>
                        <th>KONTINGEN</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((data)=>(
                        <tr>
                            <td>{data.nama}</td>
                            <td style={{width:100}}>{data.kelas}</td>
                            <td style={{width:400}}>{data.kontingen}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            
        </div>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {postTable,getTable})(Table);
