import React from 'react'
import "./Bracket.css"
const Bracket2 = ({data,table,layer}) => {

   for(let a = 0; a<data.length;a++){
       table[a].nama = data[a].nama
       table[a].nilai = data[a].nilai
   } 
   let grup = []
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
        grup.push({kuning:{nama:table[start].nama,nilai:table[start].nilai},
            biru:{nama:table[end].nama,nilai:table[end].nilai},
            css:{top:top,left:left}
        })
       }
   }

    return (
        <div className="Container-BuilBracket"> 
            {grup.map((data,index)=>(
               <div style={{position:"absolute",top:data.css.top,left:data.css.left}} key={index}>
                   <h3>A{index}</h3>
                   <div className="display-table">
                       <div className="nama-wrapper1">
                            {data.kuning.nama}
                        </div>
                        <div className="score-wrapper1">
                            {data.kuning.nilai}
                        </div>
                   </div>
                   <div className="display-table">
                       <div className="nama-wrapper2">
                            {data.biru.nama}
                        </div>
                        <div className="score-wrapper2">
                            {data.biru.nilai}
                        </div>
                   </div>
                </div> 
            ))}
                
        </div>
    )
}

export default Bracket2
