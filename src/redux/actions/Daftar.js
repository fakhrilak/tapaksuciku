import {POST_DAFTAR_FAIL,
POST_DAFTAR_SUCCESS,
GET_DAFTAR_FAIL,
GET_DAFTAR_SUCCESS,
PATCH_DAFTAR_FAIL,
PATCH_DAFTAR_SUCCESS,
DELET_DAFTAR_FAIL,
DELET_DAFTAR_SUCCESS} from "./types"

import { API, setAuthToken } from "../../config/api";

export const getDaftar=()=>async(dispatch)=>{
    try{
        const res = await API.get("/daftar");
        dispatch({
        type: GET_DAFTAR_SUCCESS,
        payload: res.data.data,
        });
    }catch(err){
        dispatch({
            type: GET_DAFTAR_FAIL,
            payload: err.response.data
        })
    }
}

export const postDaftar=(nama,kelas,kontingen,KejuaraanId)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        nama,
        kelas,
        kontingen,
        KejuaraanId
      });
    try{
        const res = await API.post("/daftar",body,config)
        dispatch({
            type:POST_DAFTAR_SUCCESS,
            payload:res.data.message
        })
    }catch(err){
        dispatch({
            type:POST_DAFTAR_FAIL,
            payload:err.response.data.error.message
        })
    }
}

export const setDaftar=(data)=>async(dispatch)=>{
    dispatch({
        type:"SET_ID_NAMA_SUCCESS",
        payload:data
    })
}