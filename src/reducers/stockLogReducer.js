import {
    DELETE_STOCKLOG_ERROR, DELETE_STOCKLOG_SUCCESS, FETCH_STOCKLOGS_ERROR, FETCH_STOCKLOGS_SUCCESS, NEW_STOCKLOG_ERROR, NEW_STOCKLOG_SUCCESS
    , UPDATE_STATUS_STOCKLOG_SUCCESS, UPDATE_STATUS_STOCKLOG_ERROR
} from '../actions/types';

const initiateState = {

    items: [],
    pending: [],
    approved: [],
    declined: [],
    item: {},
    errors: null,
    loading: false,
    approving: false,
    declining:false
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_STOCKLOGS_SUCCESS:
            return {

                ...state,
                items: action.payload,
                pending: action.payload.filter(item => item.status === "3"),
                approved: action.payload.filter(item => item.status === "4"),
                declined: action.payload.filter(item => item.status === "5"),
                errors: null
            }
        case FETCH_STOCKLOGS_ERROR:
            return {
                ...state, errors: action.payload
            }


        case NEW_STOCKLOG_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null
            }
        case NEW_STOCKLOG_ERROR:
            return {
                ...state, errors: action.payload
            }

        case UPDATE_STATUS_STOCKLOG_SUCCESS:
           
            return {
                ...state,
                item: action.payload,
                approving: false,
                declining:false,
                errors: null,
                approved:action.payload.result.status === 4?state.approved.push(action.payload.result):state.approved,
                pending:action.payload.result.status === 4?state.pending.filter(item => item.stocklog_id !== action.payload.result.stocklog_id):state.pending,
            }
        case UPDATE_STATUS_STOCKLOG_ERROR:
            return {
                ...state,
                errors: action.payload
            }

        case 'approving':
            return {
                ...state,
                approving: true
            }
            case 'declining':
                return {
                    ...state,
                    declining:true
                }

        case DELETE_STOCKLOG_SUCCESS:
            const filteredLogs = state.items.filter(item => item.log_id !== action.payload);
            return { ...state, items: filteredLogs };
        case DELETE_STOCKLOG_ERROR:
            return { ...state, errors: action.payload }

        default:
            return state;
    }
}