export const  Stabilize = (data)=>{
    if(data.length < 4){
        return 4
    }else if(data.length < 8){
        return 8
    }else if(data.length < 16){
        return 16
    }else if(data.length <32){
        return 32
    }
}