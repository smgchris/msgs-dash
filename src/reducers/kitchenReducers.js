import {
    DELETE_REQUEST_ERROR, DELETE_REQUEST_SUCCESS,
    FETCH_REQUESTS_ERROR, FETCH_REQUESTS_SUCCESS,
    NEW_REQUEST_ERROR, NEW_REQUEST_SUCCESS, FETCH_BUFFET_SUCCESS,
    FETCH_BUFFET_ERROR, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR,
    NEW_BUFFET_ERROR, NEW_BUFFET_SUCCESS

} from '../actions/types';

const initiateState = {
    requests: [],
    approvedRequests: [],
    items: [],
    item: {},
    status:'',
    loading:false,
    errors: null
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_REQUESTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                requests: action.payload.filter(item => item.department_id === "1"),
                approvedRequests: action.payload.filter(item => item.status === "4" && item.department_id === "1"),
                addingItem:"not-adding",
                errors: null
            }
        case FETCH_REQUESTS_ERROR:
            return {
                ...state,
                errors: action.payload,
                addingItem:"not-adding"
            }

        case NEW_REQUEST_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null,
                status:'success',
                loading:false,
                addingItem:"added"
            }

            case 'addingUser':
                return{
                    ...state,
                    addingItem:'adding'
                }
                
        case NEW_REQUEST_ERROR:
            return {
                ...state,
                errors: action.payload,
                addingItem:"not-added"
            }

        case FETCH_BUFFET_SUCCESS:
            return {
                ...state,
                items: action.payload.filter(item => item.menu.is_buffet === "0"),
                errors: null
            }

        case FETCH_BUFFET_ERROR:
            return {
                ...state,
                errors: action.payload
            }

        case NEW_BUFFET_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null
            }

        case NEW_BUFFET_ERROR:
            return {
                ...state,
                errors: action.payload
            }

        case DELETE_REQUEST_SUCCESS:
            const filteredrequests = state.items.filter(item => item.item_id != action.payload);
            return {
                ...state,
                items: filteredrequests
            };

        case DELETE_REQUEST_ERROR:
            return {
                ...state,
                errors: action.payload
            }

        case FETCH_ORDERS_SUCCESS:
            return {

                ...state,
                items: action.payload.filter(item => item.menu.is_buffet === "1"),
                errors: null
            }
        case FETCH_ORDERS_ERROR:
            return {
                ...state, errors: action.payload
            }


        default:
            return state;
    }
}
