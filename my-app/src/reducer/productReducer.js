import {
    ADD_PRODUCT_STARTED,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    FILTER_PRODUCT,
    SELECT_PRODUCT
} from '../actions/actionsType'

const initialState = {
    products: [],
    loading: false,
    error: null,
    filterProducts: "",
    selectProduct: null
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        //Action Начало загрузки данных
        case ADD_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        //Action Загрузки данных
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            };
        //Action Ошибки загрузки данных
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        //Action для Фильтрации данных
        case FILTER_PRODUCT:
            return {
                ...state,
                filterProducts: action.payload
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                products: [],
                selectProduct: action.payload
            };
        default:
            return state
    }
}