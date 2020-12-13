import{
    DELET_TABLE_FAIL,
    DELET_TABLE_SUCCESS,
    GET_TABLE_FAIL,
    GET_TABLE_SUCCESS,
    PATCH_TABLE_FAIL,
    PATCH_TABLE_SUCCESS,
    POST_TABLE_FAIL,
    POST_TABLE_SUCCESS
}from "./types"

import { API, setAuthToken } from "../../config/api";


export const getTable=(KejuaraanId)=>async(dispatch)=>{
    try{
        const res = await API.get(`/table/${KejuaraanId}`);
        dispatch({
        type: GET_TABLE_SUCCESS,
        payload: res.data.data,
        });
    }catch(err){
        console.log(err)
        dispatch({
        type: GET_TABLE_FAIL,
        payload: err.response
        });
    }
}

export const postTable=(id,data,kelas)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        data:data,
        KejuaraanId:id,
        kelas:kelas
      });
    try{
        const res = await API.post("/table", body, config);
        dispatch({
        type: POST_TABLE_SUCCESS,
        payload: res.data.message,
        });
    }catch(err){
        dispatch({
        type: POST_TABLE_FAIL,
        payload: err.response.data
        });
    }
}

export const editTable=()=>async(dispatch)=>{

    try{
        const res = await API.post("/table");
        dispatch({
        type: PATCH_TABLE_SUCCESS,
        payload: res.data,
        });
    }catch(err){
        const res = await API.post("/table");
        dispatch({
        type: PATCH_TABLE_FAIL,
        payload: res.data,
        });
    }
}
