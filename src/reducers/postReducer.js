import { DELETE_POST_ERROR, DELETE_POST_SUCCESS, FETCH_POSTS_JSON_ERROR, FETCH_POSTS_JSON_SUCCESS,FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS, NEW_POST_ERROR, NEW_POST_SUCCESS, DELETING_POST } from '../actions/types';

let initiateState = {

    items: [],
    postsJson: [],
    pickedNode:{},
    isModalOpen:false,
    item: {},
    errors: null,
    addingItem: "not-adding",
}

export default function (state = initiateState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {

                ...state,
                items: action.payload,
                errors: null,
                addingItem: "not-adding",
                
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem: "not-adding"
            }
        case FETCH_POSTS_JSON_SUCCESS:
            return {

                ...state,
                postsJson: action.payload,
                errors: null,
                addingItem: "not-adding"
            }
        case FETCH_POSTS_JSON_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem: "not-adding"
            }


        case NEW_POST_SUCCESS:
            return {
                ...state,
                item: action.payload,
                errors: null,
                addingItem: "added",
                


            }
        case NEW_POST_ERROR:
            return {
                ...state, errors: action.payload,
                addingItem: "not-added"
            }
        case 'addingPost':
            return {
                ...state,
                addingItem: "adding"
            }
        case 'pickNode':
            return{
                ...state,
                pickedNode:action.payload,
                isModalOpen:false
            }

        case DELETE_POST_SUCCESS:
            const filteredPosts = state.items.filter(item => item.id !== action.payload);
            return { ...state, items: filteredPosts };
        case DELETE_POST_ERROR:
            return { ...state, errors: action.payload }

        default:
            return state;
    }
}