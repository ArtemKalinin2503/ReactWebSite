import {
    ADD_PRODUCT_STARTED,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    FILTER_PRODUCT,
} from '../actions/actionsType'

const initialState = {
    products: [],
    loading: false,
    error: null,
    filterProducts: ""
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case FILTER_PRODUCT:
            return {
                ...state,
                filterProducts: action.payload
            };
        default:
            return state
    }
}