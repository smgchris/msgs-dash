import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS,FETCH_PRODUCTS_ERROR,FETCH_PRODUCTS_SUCCESS, NEW_PRODUCT_ERROR, NEW_PRODUCT_SUCCESS,DELETING_PRODUCT} from '../actions/types';

let initiateState={

    items:[],
    item:{},
    errors:null,
    addingItem:"not-adding"
}

export default function(state=initiateState,action){
    switch(action.type){
        case FETCH_PRODUCTS_SUCCESS:
            return{
                
               ...state,
               items:action.payload ,
               errors:null,
               addingItem:"not-adding"
            }
        case FETCH_PRODUCTS_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-adding"
            }


        case NEW_PRODUCT_SUCCESS:
            return{
                ...state,
               item:action.payload,
               errors:null,
               addingItem:"added"

            }
        case NEW_PRODUCT_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-added"
            }
        case 'addingProduct':
            return{
                ...state,
                addingItem:"adding"
            }
            
        case DELETE_PRODUCT_SUCCESS:
            const filteredProducts=state.items.filter(item=>item.product_id!==action.payload);
            return {...state,items: filteredProducts};
        case DELETE_PRODUCT_ERROR:
            return{...state,errors:action.payload}
            
        default:
            return state;
    }
}