import React from 'react'
import Wasit from "../Wasit/Wasit"
import Livescore from "../Livescore/Livescore"
import Form from "../Form/Form"
import Peserta from "../Peserta/Peserta"
import Bagan from "../Bagan/Bagan"
const Detail = ({match}) => {
    return (
        <div style={{paddingTop:60}}>
            <h1>{match.params.nama}</h1>
            {match.params.nama === "WASIT 1"||match.params.nama === "WASIT 2"
            ||match.params.nama === "WASIT 3"||match.params.nama === "WASIT 4"
            ||match.params.nama === "WASIT 5"||match.params.nama === "KETUA PERTANDINGAN"
            ?<Wasit/>:match.params.nama === "LIVE SCORE"?<Livescore/>:
            match.params.nama === "FORM PENDAFTARAN"?<Form/>:
            match.params.nama === "PESERTA"?<Peserta/>:match.params.nama === "BAGAN" ?
            <Bagan/>:
            null}
            
        </div>
    )
}


export default Detail
