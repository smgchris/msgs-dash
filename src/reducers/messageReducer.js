import { DELETE_MESSAGE_ERROR, DELETE_MESSAGE_SUCCESS, FETCH_MESSAGES_ERROR, FETCH_MESSAGES_SUCCESS, NEW_MESSAGE_ERROR, NEW_MESSAGE_SUCCESS, DELETING_MESSAGE } from '../actions/types';

let initiateState = {

    items: [],
    item: {},
    errors: null,
    addingItem: "not-adding"
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return {

                ...state,
                items: action.payload,
                errors: null,
                addingItem: "not-adding"
            }
        case FETCH_MESSAGES_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem: "not-adding"
            }


        case NEW_MESSAGE_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null,
                addingItem: "added"

            }
        case NEW_MESSAGE_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem: "not-added"
            }
        case 'addingItem':
            return {
                ...state,
                addingItem: "adding"
            }
        case 'approveSuccess':
            return {
                ...state,
                addingItem: "added"
            }
        case 'approveFailed':
            return {
                ...state,
                addingItem: "not-added"
            }
        case 'unapproveSuccess':
            return {
                ...state,
                addingItem: "added"
            }
        case 'unapproveFailed':
            return {
                ...state,
                addingItem: "not-added"
            }
        case 'rejectSuccess':
            return {
                ...state,
                addingItem: "added"
            }
        case 'rejectFailed':
            return {
                ...state,
                addingItem: "not-added"
            }

        case DELETE_MESSAGE_SUCCESS:
            const filteredMessages = state.items.filter(item => item.message_id !== action.payload);
            return { ...state, items: filteredMessages };
        case DELETE_MESSAGE_ERROR:
            return { ...state, errors: action.payload }

        default:
            return state;
    }
}