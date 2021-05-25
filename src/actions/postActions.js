import {
    DELETE_POST_SUCCESS, DELETE_POST_ERROR
    , FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,FETCH_POSTS_JSON_SUCCESS, FETCH_POSTS_JSON_ERROR, NEW_POST_SUCCESS, NEW_POST_ERROR
} from './types';

//-------------------Fetch posts----------------
export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsError = (data) => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: data,
    }
}

export const fetchPosts = () => dispatch => {
    fetch('http://127.0.0.1:8000/ivr_prompts/')
        .then(res => res.json())
        .then(posts => {
            dispatch(fetchPostsSuccess(posts))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['post'] = error.response.data.post;
            errorPayload['status'] = error.response.status;

            dispatch(fetchPostsError(errorPayload))

        })
};

//-------------------Fetch posts in json format for tree----------------
export const fetchPostsJsonSuccess = (posts) => {
    return {
        type: FETCH_POSTS_JSON_SUCCESS,
        payload: posts
    }
}

export const fetchPostsJsonError = (data) => {
    return {
        type: FETCH_POSTS_JSON_ERROR,
        payload: data,
    }
}

export const fetchPostsJson = () => dispatch => {
    fetch('http://127.0.0.1:8000/posts_json/')
        .then(res => res.json())
        .then(posts => {
            dispatch(fetchPostsJsonSuccess(posts))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['post'] = error.response.data.post;
            errorPayload['status'] = error.response.status;

            dispatch(fetchPostsJsonError(errorPayload))

        })
};

//------------ Create post ---------------------

export const createPost = postData => dispatch => {
    fetch('http://127.0.0.1:8000/add-post', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(post => {
            
            dispatch({
                type: NEW_POST_SUCCESS,
                payload: post
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['post'] = error.response.data.post;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_POST_ERROR,
                payload: errorPayload
              })

        });
};

//------------ update post---------------------

export const updatePost = postData => dispatch => {
    fetch('https://lacorniche.rw/api/update_post.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => 
            dispatch({
                type: NEW_POST_SUCCESS,
                payload: post
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['post'] = error.response.data.post;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_POST_ERROR,
                payload: errorPayload
              })

        });
};

//------------------ DELETE----------------------

export const deletePostSuccess = (id) => {
    return {
        type: DELETE_POST_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deletePostError = (data) => {
    return {
        type: DELETE_POST_ERROR,
        payload: data,
    }
}


export const deletePost = (postData) => dispatch => {
    fetch('http://127.0.0.1:8000/delete-post', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(() => 
        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: postData.id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['post'] = error.response.data.post;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_POST_ERROR,
            payload: errorPayload
          })

    });
}
//------
export const addingItem = () => {
    return {
        type: 'addingPost',
    }
}

//-----------
export const pickNode = (node) =>dispatch=> {
    dispatch({
        type: 'pickNode',
        payload: node
      })
}