import {POST_DAFTAR_FAIL,
    POST_DAFTAR_SUCCESS,
    GET_DAFTAR_FAIL,
    GET_DAFTAR_SUCCESS,
    PATCH_DAFTAR_FAIL,
    PATCH_DAFTAR_SUCCESS,
    DELET_DAFTAR_FAIL,
    DELET_DAFTAR_SUCCESS} from "../actions/types"

    const initialState = {
        AllDaftar:[],
        loading: true,
        errorDaftar:null,
        message:null,
        id:"",
        nama:"",
      };
    
      export default function (state = initialState, action) {
        const { type, payload } = action;
      
        switch (type) {
            case POST_DAFTAR_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    errorDaftar:"",
                    message:payload
                }
            case POST_DAFTAR_FAIL:
                return{
                    ...state,
                    errorDaftar:payload,
                    loading:false
                }
            case GET_DAFTAR_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:null,
                    kejuaraan:payload
                }
            case "SET_ID_NAMA_SUCCESS":
                return{
                    ...state,
                    id:payload.id,
                    nama:payload.nama
                }
            case "CLEAR MASSAGE":
                return{
                    ...state,
                    errorDaftar:payload,
                    message:payload
                }
            default:
            return state;
        }
     }