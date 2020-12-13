import React,{useEffect, useState} from 'react'
import logo from "../../img/logo.png"
import "./Profile.css"
import {Dataa} from "./Data"
import {useHistory} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faInbox, faPlus, faSms, faTrash } from '@fortawesome/free-solid-svg-icons'
import Form from "./Form"
import {getKejuaraan,getKejuaraanId} from "../../redux/actions/kejuaraan"
import {connect} from "react-redux"
import dayjs from "dayjs"

const Profile = ({getKejuaraan,
    kejuaraan:{kejuaraan,error},
    getKejuaraanId,
    auth:{user}
}) => {
    const [show, setshow] = useState(false)
    const [tambah,setTambah] = useState(false)
    const [edit,setEdit] = useState(false)
    const [delet,setDelet] = useState(false)
    const [EditId,setEditId] = useState(false)

    useEffect(()=>{
        getKejuaraan()
    },[tambah])

    

    const Data = [{
        judul: "Jumlah Pertandingan",
        jumlah :kejuaraan.length
    },
    {
        judul: "Jumlah Murid",
        jumlah: "200"
    }
]
let sorted = []
  if(kejuaraan !== 0){
    sorted = [...kejuaraan].sort((a,b)=>{
      return b.id - a.id
    })
  }
const history = useHistory()
const HandlePush =(nama,id)=>{
    history.push(`/pertandingan/${nama}/${id}`)
}

const parsedueDate=(data)=>{
   return dayjs(data).format('MMMM D, YYYY')
}

const HandleTambah = ()=>{
    setTambah(!tambah)
    setEdit(false)
    setDelet(false)
}

const HandleEdit=()=>{
    setEdit(!edit)
    setTambah(false)
    setDelet(false)
}

const HandleDelet=()=>{
    setDelet(!delet)
    setTambah(false)
    setEdit(false)
}

const HandleId=(id)=>{
    getKejuaraanId(id)
    setEditId(true)
    setTimeout(()=>{
        setEditId(false)
    },10000)
}
    return (
        <div className="Container-Profile">
            <div className="Content-Profile">
                <div>
                    <div><img src={logo} onClick={()=>setshow(!show)}/></div>
                    { show && <div>
                        <FontAwesomeIcon 
                        icon={faPlus} 
                        style={{color:'#3399ff',margin:20,fontSize:20}}
                        onClick={()=>HandleTambah()}
                        />
                        <FontAwesomeIcon 
                        icon={faEdit} 
                        style={{color:'green',margin:20,fontSize:20}} 
                        onClick={()=>HandleEdit()}
                        />
                        <FontAwesomeIcon 
                        icon={faTrash} 
                        style={{color:'red',margin:20,fontSize:20}} 
                        onClick={()=>HandleDelet()}
                        />
                    </div>}
                </div>
                <div className="Grid-Buttom">
                    <div>
                        {user && <h1>{user.nama}</h1>}
                    </div>
                    <div className="SubContent">
                        {Data.map((data)=>(
                            <div className="profile" key={data.judul}>
                                <h4>{data.judul}</h4>
                                <h2>{data.jumlah}</h2>
                            </div>
                        ))}                    
                    </div>
                </div>
            </div>
            <div>
               {sorted.map((data)=>(
                   <div key={data.id}>
                       {edit && <FontAwesomeIcon 
                        icon={faEdit} 
                        style={{color:'green',margin:20,fontSize:20}}
                        onClick={()=>HandleId(data.id)}
                        />}
                        {delet && <FontAwesomeIcon 
                        icon={faTrash} 
                        style={{color:'red',margin:20,fontSize:20}}
                        />}
                        <div className="grid-pertandingan"
                        onClick={()=>HandlePush(data.nama,data.id)}
                        >
                       <h1>{data.nama}</h1>
                       <h3>{data.lokasi}</h3>
                       <h3>{parsedueDate(data.dueDate)}</h3>
                       <h3>{data.totPeserta}</h3>
                        </div>
                   </div>
               ))}
            </div>
            <div>
                <Form 
                tambah={tambah} 
                setTambah={HandleTambah} 
                error={error} 
                edit={EditId}
                setEdit={setEditId}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    kejuaraan : state.kejuaraan,
    auth : state.auth
});

export default connect(mapStateToProps, {getKejuaraan,getKejuaraanId})(Profile);