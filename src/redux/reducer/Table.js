import{
    DELET_TABLE_FAIL,
    DELET_TABLE_SUCCESS,
    GET_TABLE_FAIL,
    GET_TABLE_SUCCESS,
    PATCH_TABLE_FAIL,
    PATCH_TABLE_SUCCESS,
    POST_TABLE_FAIL,
    POST_TABLE_SUCCESS
}from "../actions/types"

const initialState = {
    table:[],
    loading: true,
    error:true,
    message:""
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case POST_TABLE_SUCCESS:
            return{
                message:payload,
                loading:false
            }
        case POST_TABLE_FAIL:
            return{
                error:payload,
                loading:false
            }
        case GET_TABLE_SUCCESS:
            return{
                table:payload,
                loading:false
            }
        case GET_TABLE_FAIL:
            return{
                error:payload,
                loading:false
            }
        default:
        return state;
    }
 }