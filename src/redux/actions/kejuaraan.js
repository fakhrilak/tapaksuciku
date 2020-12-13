import {GET_KEJUARAAN_FAIL,
GET_KEJUARAAN_SUCCESS,
POST_KEJUARAAN_FAIL,
POST_KEJUARAAN_SUCCESS,
PATCH_KEJUARAAN_FAIL,
PATCH_KEJUARAAN_SUCCESS,
DELET_KEJUARAAN_FAIL,
DELET_KEJUARAAN_SUCCESS} from "./types"
import { API, setAuthToken } from "../../config/api";

export const getKejuaraan = ()=>async(dispatch)=>{
    try{
        const res = await API.get("/kejuaraan");
        dispatch({
        type: GET_KEJUARAAN_SUCCESS,
        payload: res.data.data,
        });
    }catch(err){
        dispatch({
        type: GET_KEJUARAAN_FAIL,
        payload: err.response.data
        });
    }
}

export const getKejuaraanId = (id)=>async(dispatch)=>{
    console.log(id,"id")
    try{
        const res = await API.get(`/kejuaraan/${id}`);
        dispatch({
        type: "GET_KEJUARAANID_SUCCESS",
        payload: res.data.data,
        });
    }catch(err){
        dispatch({
        type: "GET_KEJUARAANID_FAIL",
        payload: err.response
        });
    }
}

export const postKejuaraan=(nama,dueDate,lokasi)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        nama,
        lokasi,
        dueDate
      });
    try{
        const res = await API.post("/kejuaraan", body, config);
        dispatch({
        type: POST_KEJUARAAN_SUCCESS,
        payload: res.data,
        });
    }catch(err){
        dispatch({
            type: POST_KEJUARAAN_FAIL,
            payload: err.response.data
            });
    }
}

export const patchKejuaraan=(nama,dueDate,lokasi)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        nama,
        lokasi,
        dueDate
      });
    try{
        const res = await API.patch("/kejuaraan", body, config);
        dispatch({
        type: PATCH_KEJUARAAN_SUCCESS,
        payload: res.data,
        });
    }catch(err){
        dispatch({
            type: PATCH_KEJUARAAN_FAIL,
            payload: err.response.data
            });
    }
}