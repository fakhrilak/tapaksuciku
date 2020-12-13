import { combineReducers } from "redux";


import auth from "./auth";
import kejuaraan from "./kejuaraan";
import daftar from "./daftar"
import table from "./Table"

export default combineReducers({auth,kejuaraan,daftar,table});