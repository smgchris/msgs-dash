import { DELETE_REQUEST_ERROR, DELETE_REQUEST_SUCCESS,FETCH_REQUESTS_ERROR,FETCH_REQUESTS_SUCCESS, NEW_REQUEST_ERROR, NEW_REQUEST_SUCCESS } from '../actions/types';

const initiateState={

    items:[],
    item:{},
    errors:null
}

export default function(state=initiateState,action){
    switch(action.type){
        case FETCH_REQUESTS_SUCCESS:
            return{
                
               ...state,
               items:action.payload ,
               errors:null
            }
        case FETCH_REQUESTS_ERROR:
            return{
                ...state,errors:action.payload
            }


        case NEW_REQUEST_SUCCESS:
            return{
                ...state,
               item:action.payload,
               errors:null 
            }
        case NEW_REQUEST_ERROR:
            return{
                ...state,errors:action.payload
            }

            
        case DELETE_REQUEST_SUCCESS:
            const filteredRequests=state.items.filter(item=>item.request_id!=action.payload);
            return {...state,items: filteredRequests};
        case DELETE_REQUEST_ERROR:
            return{...state,errors:action.payload}
            
        default:
            return state;
    }
}