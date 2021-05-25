import { CREATING_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS,FETCH_USERS_ERROR,FETCH_USERS_SUCCESS, NEW_USER_ERROR, NEW_USER_SUCCESS,SELECTED_USER } from '../actions/types';

const initiateState={

    items:[],
    item:{},
    errors:null,
    status:'',
    loading:false
}


export default function(state=initiateState,action){
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            return{
                
               ...state,
               items:action.payload ,
               errors:null,
               addingItem:"not-adding"
            }
        case FETCH_USERS_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-adding"
            }
        
        case 'addingUser':
            return{
                ...state,
                addingItem:'adding'
            }

        case NEW_USER_SUCCESS:
            return{
                ...state,
               item:action.payload,
               errors:null,
               status:'success',
               loading:false,
               addingItem:"added"
            }
        case NEW_USER_ERROR:
            return{
                ...state,errors:action.payload,
                addingItem:"not-added"
            }



        
        case SELECTED_USER:
            return{
                item: action.payload
            }

            
        case DELETE_USER_SUCCESS:
            const filteredUsers=state.items.filter(item=>item.user_id!=action.payload);
            return {...state,items: filteredUsers};
        case DELETE_USER_ERROR:
            return{...state,errors:action.payload}
            
        default:
            return state;
    }
}