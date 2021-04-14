import { FETCH_DEPTS_ERROR, FETCH_DEPTS_SUCCESS,FETCH_DEPT_USERS_ERROR, FETCH_DEPT_USERS_SUCCESS, NEW_DEPT_SUCCESS, NEW_DEPT_ERROR,DELETE_DEPT_SUCCESS,DELETE_DEPT_ERROR } from '../actions/types';

const initiateState = {

    items: [],
    item: {},
    deptUsers:[],
    addingItem:"not-adding"
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_DEPTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                errors: null,
                addingItem:"not-adding"
            }
        case FETCH_DEPTS_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem:"not-adding"
            }
        case FETCH_DEPT_USERS_SUCCESS:
                return {
                    ...state,
                    deptUsers: action.payload,
                    errors: null,
                    addingItem:"not-adding"
                }
         case FETCH_DEPT_USERS_ERROR:
                return {
                    ...state, errors: action.payload,
                    addingItem:"not-adding"
                }

        case NEW_DEPT_SUCCESS:
            return {
                ...state,
                item: action.payload,
                addingItem:"added"
            }
        case NEW_DEPT_ERROR:
                return {
                    ...state,
                    
                    addingItem:"not-added"
                }
        case 'addingDept':
            return{
                ...state,
                addingItem:"adding"
            }

        case DELETE_DEPT_SUCCESS:
            const filteredDepts = state.items.filter(item => item.department_id != action.payload);
            return { ...state, items: filteredDepts};
        case DELETE_DEPT_ERROR:
            return { ...state, errors: action.payload }

        default:
            return state;
    }
}