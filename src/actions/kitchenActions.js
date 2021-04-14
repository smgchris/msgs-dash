import {
    DELETE_REQUEST_SUCCESS, DELETE_REQUEST_ERROR
    , FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_ERROR, 
    NEW_REQUEST_SUCCESS, NEW_REQUEST_ERROR, 
    FETCH_BUFFET_SUCCESS, FETCH_BUFFET_ERROR,
    NEW_BUFFET_SUCCESS,NEW_BUFFET_ERROR,
    FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR,

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
    fetch('http://127.0.0.1/lacorniche/api/get_stock_logs.php')
        .then(res => res.json())
        .then(requests => {
            dispatch(fetchRequestsSuccess(requests))
        })
        .catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchRequestsError(errorPayload))

        })
};

//------------ make request ---------------------

export const createRequest = userData => dispatch => {
     console.log(JSON.stringify(userData));
    fetch('http://127.0.0.1/lacorniche/api/add_stock_log.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => 
            dispatch({
                type: NEW_REQUEST_SUCCESS,
                payload: user
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

//-----------------UPDATE-----------------
export const updateRequest = userData => dispatch => {
    console.log(JSON.stringify(userData));
   fetch('http://127.0.0.1/lacorniche/api/update_stock_log.php', {
       method: 'PUT',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(userData)
   })
       .then(res => res.json())
       .then(user => 
           dispatch({
               type: NEW_REQUEST_SUCCESS,
               payload: user
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
    fetch('https://jsonplaceholder.typicode.com/users/1', {
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

// ---------------fetch buffet -------------
export const fetchBuffetSuccess = (buffet) => {
    return {
        type: FETCH_BUFFET_SUCCESS,
        payload: buffet
    }
}

export const fetchBufetError = (data) => {
    return {
        type: FETCH_BUFFET_ERROR,
        payload: data,
    }
}

export const fetchBuffet = () => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_orders.php')
        .then(res => res.json())
        .then(Buffet => {
            dispatch(fetchBuffetSuccess(Buffet))
        })
        // .catch((error) => {

        //     const errorPayload = {};

        //     errorPayload['message'] = error.response.data.message;
        //     errorPayload['status'] = error.response.status;

        //     dispatch(fetchRequestsError(errorPayload))

        // })
};

//----------buffet request ---------------
export const buffetRequest = userData => dispatch => {
    console.log(JSON.stringify(userData));
   fetch('http://127.0.0.1/lacorniche/api/add_order.php', {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(userData)
   })
       .then(res => res.json())
       .then(user => 
           dispatch({
               type: NEW_BUFFET_SUCCESS,
               payload: user
             })
       ).catch((error) => {
           const errorPayload = {};
           errorPayload['message'] = error.response.data.message;
           errorPayload['status'] = error.response.status;

           dispatch({
               type: NEW_BUFFET_ERROR,
               payload: errorPayload
             })

       });
};


// ---------------orders------------------
export const fetchOrdersSuccess = (users) => {
    console.log("success");
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: users
    }
}

export const fetchOrdersError = (data) => {
    return {
        type: FETCH_ORDERS_ERROR,
        payload: data,
    }
}

export const fetchorders = () => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_orders.php')
        .then(res => res.json())
        .then(orders => {
            dispatch(fetchOrdersSuccess(orders))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchOrdersError(errorPayload))

        })
};