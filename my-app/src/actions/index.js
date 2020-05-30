import axios from 'axios';
import {ADD_PRODUCT_STARTED, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE} from './actionsType'

const addProductStarted = () => ({type: ADD_PRODUCT_STARTED})
const addProductSuccess = (payload) => ({type: ADD_PRODUCT_SUCCESS, payload: payload})
const addProductFailure = (error) => ({type: ADD_PRODUCT_FAILURE, payload: {error}})


//Thunk
const addProduct = () => {
    return dispatch => {
        dispatch(addProductStarted());
        axios
            .get(`https://product-e5e71.firebaseio.com/products.json`,{ //Ссылка на БД: https://console.firebase.google.com/project/product-e5e71/database/product-e5e71/data/~2Fproducts
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then(res => {
                dispatch(addProductSuccess(res.data))
            })
            .catch(err => {
                dispatch(addProductFailure(err.message))
            });
    }
}

export {
    addProductStarted,
    addProductSuccess,
    addProductFailure,
    addProduct
}