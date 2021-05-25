import {
    DELETE_MESSAGE_SUCCESS, DELETE_MESSAGE_ERROR
    , FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_ERROR, NEW_MESSAGE_SUCCESS, NEW_MESSAGE_ERROR
} from './types';

//-------------------Fetch messages----------------
export const fetchMessagesSuccess = (messages) => {
    return {
        type: FETCH_MESSAGES_SUCCESS,
        payload: messages
    }
}

export const fetchMessagesError = (data) => {
    return {
        type: FETCH_MESSAGES_ERROR,
        payload: data,
    }
}

export const fetchMessages = () => dispatch => {
    fetch('http://127.0.0.1:8000/messages/')
        .then(res => res.json())
        .then(messages => {
            dispatch(fetchMessagesSuccess(messages))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchMessagesError(errorPayload))

        })
};
//------------ upload file---------------------

export const uploadFile = formData => dispatch => {
    
    fetch('http://127.0.0.1:8000/upload-file', {
        method: 'POST',
        // headers: {
        //     'content-type': 'multipart/form-data'
        // },
        body: formData
    })
        .then(response => {
            console.log(response)
            dispatch({
                type: NEW_MESSAGE_SUCCESS,
                payload: response
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_MESSAGE_ERROR,
                payload: errorPayload
              })

        });
};
//------------ upload recording---------------------

export const uploadRecording = formData => dispatch => {
    
    fetch('http://127.0.0.1:8000/upload-recording', {
        method: 'POST',
        // headers: {
        //     'content-type': 'multipart/form-data'
        // },
        body: formData
    })
        .then(response => {
            console.log(response)
            dispatch({
                type: NEW_MESSAGE_SUCCESS,
                payload: response
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_MESSAGE_ERROR,
                payload: errorPayload
              })

        });
};
//------------ Create message ---------------------

export const createMessage = messageData => dispatch => {
    fetch('http://127.0.0.1:8000/add-message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(messageData)
    })
        .then(message => {
            
            dispatch({
                type: NEW_MESSAGE_SUCCESS,
                payload: message
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_MESSAGE_ERROR,
                payload: errorPayload
              })

        });
};

//------------ update message---------------------

export const updateMessage = messageData => dispatch => {
    fetch('https://lacorniche.rw/api/update_message.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(messageData)
    })
        .then(res => res.json())
        .then(message => 
            dispatch({
                type: NEW_MESSAGE_SUCCESS,
                payload: message
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_MESSAGE_ERROR,
                payload: errorPayload
              })

        });
};

//------------------ DELETE----------------------

export const deleteMessageSuccess = (id) => {
    return {
        type: DELETE_MESSAGE_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteMessageError = (data) => {
    return {
        type: DELETE_MESSAGE_ERROR,
        payload: data,
    }
}


export const deleteMessage = (id) => dispatch => {
    fetch('https://lacorniche.rw/api/delete_message.php?message_id='+id, {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_MESSAGE_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_MESSAGE_ERROR,
            payload: errorPayload
          })

    });
}

export const approveMessage = (data) => dispatch => {
    fetch('http://127.0.0.1:8000/approve-message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(message => {
            
            dispatch({
                type: 'approveSuccess',
                payload: message
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: 'approveFailed',
                payload: errorPayload
              })

        });
}

export const unapproveMessage = (data) => dispatch => {
    fetch('http://127.0.0.1:8000/unapprove-message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(message => {
            
            dispatch({
                type: 'unapproveSuccess',
                payload: message
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: 'unapproveFailed',
                payload: errorPayload
              })

        });
}

export const rejectMessage = (data) => dispatch => {
    fetch('http://127.0.0.1:8000/reject-message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(message => {
            
            dispatch({
                type: 'rejectSuccess',
                payload: message
              })
            }).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: 'rejectFailed',
                payload: errorPayload
              })

        });
}
//------

export const addingItem = () =>dispatch=> {
    console.log('adding')
    dispatch({
        type: 'addingItem'
          })
}