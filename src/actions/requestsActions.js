import {
    DELETE_REQUEST_SUCCESS, DELETE_REQUEST_ERROR
    , FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_ERROR, NEW_REQUEST_SUCCESS, NEW_REQUEST_ERROR
} from './types';

//-------------------Fetch requests----------------
export const fetchRequestsSuccess = (requests) => {
    return {
        type: FETCH_REQUESTS_SUCCESS,
        payload: requests
    }
}

export const fetchRequestsError = (data) => {
    return {
        type: FETCH_REQUESTS_ERROR,
        payload: data,
    }
}

export const fetchRequests = () => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_users.php')
        .then(res => res.json())
        .then(requests => {
            dispatch(fetchRequestsSuccess(requests))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchRequestsError(errorPayload))

        })
};

//------------ Create request ---------------------

export const createRequest = requestData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/requests', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(res => res.json())
        .then(request => 
            dispatch({
                type: NEW_REQUEST_SUCCESS,
                payload: request
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_REQUEST_ERROR,
                payload: errorPayload
              })

        });
};

//------------------ DELETE----------------------

export const deleteRequestSuccess = (id) => {
    return {
        type: DELETE_REQUEST_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteRequestError = (data) => {
    return {
        type: DELETE_REQUEST_ERROR,
        payload: data,
    }
}


export const deleteRequest = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/requests/1', {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_REQUEST_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_REQUEST_ERROR,
            payload: errorPayload
          })

    });
}