import {
    DELETE_USER_SUCCESS, DELETE_USER_ERROR
    , FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, NEW_USER_SUCCESS, NEW_USER_ERROR, CREATING_USER
} from './types';
2
//-------------------Fetch users----------------
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = (data) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: data,
    }
}


export const fetchUsers = () => dispatch => {
    fetch('https://lacorniche.rw/api/get_users.php')
        .then(res => res.json())
        .then(users => {
            dispatch(fetchUsersSuccess(users))

        }).catch((error) => {

            const errorPayload = {};

            // errorPayload['message'] = error.response.data.message;
            // errorPayload['status'] = error.response.status;

            dispatch(fetchUsersError(errorPayload))

        })
};

//------------ Create user ---------------------
export const creatingUser = () => {
    return {
        type: CREATING_USER,
        
    }
}
export const createUser = userData => dispatch => {

    fetch('https://lacorniche.rw/api/register_user.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => 
        
               dispatch({
                type: NEW_USER_SUCCESS,
                payload: user
              })
            
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_USER_ERROR,
                payload: errorPayload
              })

        });
};

//------------ Update user ---------------------

export const updateUser = userData => dispatch => {

    fetch('https://lacorniche.rw/api/update_user.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => 
        
               dispatch({
                type: NEW_USER_SUCCESS,
                payload: user
              })
            
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_USER_ERROR,
                payload: errorPayload
              })

        });
};

//------------------ DELETE----------------------

export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteUserError = (data) => {
    return {
        type: DELETE_USER_ERROR,
        payload: data,
    }
}


export const deleteUser = (id) => dispatch => {

    fetch('https://lacorniche.rw/api/delete_user?id='+id, {

        method: 'DELETE',
        
    }).then(() => 
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_USER_ERROR,
            payload: errorPayload
          })

    });
}

//--------
export const addingItem = () => {
    return {
        type: 'addingUser',
    }
}
