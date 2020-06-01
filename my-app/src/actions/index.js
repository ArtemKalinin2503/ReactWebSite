import axios from 'axios';
import {ADD_PRODUCT_STARTED,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAILURE,
        FILTER_PRODUCT,
        SELECT_PRODUCT
} from './actionsType'

const addProductStarted = () => ({type: ADD_PRODUCT_STARTED})
const addProductSuccess = (payload) => ({type: ADD_PRODUCT_SUCCESS, payload: payload})
const addProductFailure = (error) => ({type: ADD_PRODUCT_FAILURE, payload: {error}})
const onFilterProducts = (payload) => ({type: FILTER_PRODUCT, payload: payload})
const onSelectProduct = (payload) => ({type: SELECT_PRODUCT, payload: payload})

//Thunk
const addProduct = (value) => { //Параметр value это id выбраного продукта
    let paramsDataResponse; //В данную пременную приходит id продукта (если это нужно и его передают)
    if (!value && value !== 0) {
        paramsDataResponse = '';
    } else {
        paramsDataResponse = value
    }
    return dispatch => {
        dispatch(addProductStarted());
        axios
            .get(`https://product-e5e71.firebaseio.com/products/${paramsDataResponse}.json`,{ //Ссылка на БД: https://console.firebase.google.com/project/product-e5e71/database/product-e5e71/data/~2Fproducts
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
    addProduct,
    onFilterProducts,
    onSelectProduct
}