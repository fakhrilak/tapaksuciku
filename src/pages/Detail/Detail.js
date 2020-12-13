import React from 'react'
import Wasit from "../Wasit/Wasit"
import Livescore from "../Livescore/Livescore"
import Form from "../Form/Form"
import Peserta from "../Peserta/Peserta"
import Bagan from "../Bagan/Bagan"
import Random from "../Random/Random"
const Detail = ({match}) => {
    return (
        <div style={{paddingTop:60}}>
            <h1>{match.params.nama}</h1>
            {match.params.nama === "WASIT 1"||match.params.nama === "WASIT 2"
            ||match.params.nama === "WASIT 3"||match.params.nama === "WASIT 4"
            ||match.params.nama === "WASIT 5"||match.params.nama === "KETUA"
            ?<Wasit id={match.params.id} nama={match.params.nama}/>:match.params.nama === "LIVE SCORE"?
            <Livescore  id={match.params.id} nama={match.params.nama}/>:match.params.nama === "RANDOM" ?
            <Random id={match.params.id}/>:match.params.nama === "PESERTA"?<Peserta id={match.params.id}/>:match.params.nama === "BAGAN" ?
            <Bagan id={match.params.id}/>:match.params.nama === "FORM"? <Form id={match.params.id}/>: 
            null}
            
        </div>
    )
}


export default Detail
