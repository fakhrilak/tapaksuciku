import {GET_KEJUARAAN_FAIL,
    GET_KEJUARAAN_SUCCESS,
    POST_KEJUARAAN_FAIL,
    POST_KEJUARAAN_SUCCESS,
    PATCH_KEJUARAAN_FAIL,
    PATCH_KEJUARAAN_SUCCESS,
    DELET_KEJUARAAN_FAIL,
    DELET_KEJUARAAN_SUCCESS} from "../actions/types"
    const initialState = {
        kejuaraan:[],
        kejuaraanId:[],
        loading: true,
        error:null,
        message:""
      };
      
 export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case POST_KEJUARAAN_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                message:payload.message
            }
        case POST_KEJUARAAN_FAIL:
            return{
                ...state,
                error:payload.error.message,
                loading:false
            }
        case GET_KEJUARAAN_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                kejuaraan:payload
            }
        case "GET_KEJUARAANID_SUCCESS":
            return{
                ...state,
                kejuaraanId:payload
            }
        case "GET_KEJUARAANID_FAIL":
            return{
                ...state,
                error:payload
            }
        case PATCH_KEJUARAAN_FAIL:{
            return{
                ...state,
                error:payload.error.message,
                loading:false
            }
        }
        case PATCH_KEJUARAAN_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                message:payload.message
            }
        case "CLEAR MASSAGE":
            return{
                ...state,
                error:payload,
                message:payload
            }
        case "LOGOUT":
            return{
                kejuaraan:[],
                kejuaraanId:"",
                loading: true,
                error:null,
                message:""
            }
        default:
        return state;
    }
 }