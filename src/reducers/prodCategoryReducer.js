import { DELETE_PRODUCTCATEG_ERROR, DELETE_PRODUCTCATEG_SUCCESS,FETCH_PRODUCTCATEGS_ERROR,FETCH_PRODUCTCATEGS_SUCCESS, NEW_PRODUCTCATEG_ERROR, NEW_PRODUCTCATEG_SUCCESS } from '../actions/types';

const initiateState={

    items:[],
    item:{},
    errors:null,
    addingItem:"not-adding"
}

export default function(state=initiateState,action){
    switch(action.type){
        case FETCH_PRODUCTCATEGS_SUCCESS:
            return{
                
               ...state,
               items:action.payload ,
               errors:null,
               addingItem:"not-adding"
            }
        case FETCH_PRODUCTCATEGS_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-adding"
            }


        case NEW_PRODUCTCATEG_SUCCESS:
            return{
                ...state,
               item:action.payload,
               errors:null ,
               addingItem:"added"
            }
        case NEW_PRODUCTCATEG_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-added"
            }
        case 'addingItem':
            return{
                ...state, 
                addingItem:"adding"
            }

            
        case DELETE_PRODUCTCATEG_SUCCESS:
            const filteredProducts=state.items.filter(item=>item.product_id!=action.payload);
            return {...state,items: filteredProducts};
        case DELETE_PRODUCTCATEG_ERROR:
            return{...state,errors:action.payload}
            
        default:
            return state;
    }
}