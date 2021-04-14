import { FETCH_SUPPLIERS_SUCCESS, FETCH_SUPPLIERS_ERROR,FETCH_SUPPLIER_ERROR,FETCH_SUPPLIER_SUCCESS, NEW_SUPPLIER_SUCCESS, NEW_SUPPLIER_ERROR } from '../actions/types';

const initiateState = {

    items: [],
    item: {},
    error: {},
    addingItem:'not-adding'
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_SUPPLIERS_SUCCESS:
            return {

                ...state,
                items: action.payload,
                errors: null,
                addingItem:"not-adding"
            }
        case FETCH_SUPPLIERS_ERROR:
            return {
                ...state, errors: action.payload
            }

        case FETCH_SUPPLIER_SUCCESS:
            return {

                ...state,
                item: action.payload,
                errors: null
            }
        case FETCH_SUPPLIER_ERROR:
            return {
                ...state, errors: action.payload
            }


        case NEW_SUPPLIER_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null,
                addingItem:"added"
            }
        case NEW_SUPPLIER_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem:"not-added"
            }
        
        case 'addingSupplier':
                return{
                    ...state,
                    addingItem:"adding"
                }

        default:
            return state;
    }
}