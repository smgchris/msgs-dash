import { DELETE_STOCKPRODUCT_ERROR, DELETE_STOCKPRODUCT_SUCCESS,FETCH_STOCKPRODUCTS_ERROR,FETCH_STOCKPRODUCTS_SUCCESS, NEW_STOCKPRODUCT_ERROR, NEW_STOCKPRODUCT_SUCCESS } from '../actions/types';

const initiateState={

    items:[],
    item:{},
    errors:null,
    addingItem:"not-adding",
    currentStock:[]
}

export default function(state=initiateState,action){
    switch(action.type){
        case FETCH_STOCKPRODUCTS_SUCCESS:
            const currentStock=action.payload.filter(item=>item.quantity>0);
            return{
                
               ...state,
               items:action.payload,
               currentStock:currentStock,
               addingItem:"not-adding",
               errors:null
            }
        case FETCH_STOCKPRODUCTS_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-adding"
            }


        case NEW_STOCKPRODUCT_SUCCESS:
            return{
                ...state,
               item:action.payload,
               errors:null ,
               addingItem:"added"
            }
        case NEW_STOCKPRODUCT_ERROR:
            return{
                ...state,
                errors:action.payload,
                addingItem:"not-added"
            }

        case 'addingSP':
            return{
                ...state,
                addingItem:"adding"

            }

            
        case DELETE_STOCKPRODUCT_SUCCESS:
            const filteredProducts=state.items.filter(item=>item.product_id!=action.payload);
            return {...state,items: filteredProducts};
        case DELETE_STOCKPRODUCT_ERROR:
            return{...state,errors:action.payload}
            
        default:
            return state;
    }
}