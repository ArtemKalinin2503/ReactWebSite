import {combineReducers} from "redux";
import productReducer from './productReducer'

//Основной Reducer - это основной reducer - который принимает остальные reducer
export default combineReducers({
    productReducer
})




