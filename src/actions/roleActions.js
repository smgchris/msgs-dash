import{FETCH_ROLES_ERROR,FETCH_ROLES_SUCCESS,FETCH_ROLE_USERS_ERROR,FETCH_ROLE_USERS_SUCCESS,NEW_ROLE_SUCCESS, NEW_ROLE_ERROR} from './types';

//-------------------Fetch roles----------------
export const fetchRolesSuccess = (roles) => {
    return {
        type: FETCH_ROLES_SUCCESS,
        payload: roles
    }
}

export const fetchRolesError = (data) => {
    return {
        type: FETCH_ROLES_ERROR,
        payload: data,
    }
}

export const fetchRoles = () => dispatch => {
    fetch('https://lacorniche.rw/api/get_roles.php')
        .then(res => res.json())
        .then(roles => {
            dispatch(fetchRolesSuccess(roles))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchRolesError(errorPayload))

        })
};

//-------------------Fetch ----------------
export const fetchRoleUsersSuccess = (roleUsers) => {
    return {
        type: FETCH_ROLE_USERS_SUCCESS,
        payload: roleUsers
    }
}

export const fetchRoleUsersError = (data) => {
    return {
        type: FETCH_ROLE_USERS_ERROR,
        payload: data,
    }
}

export const fetchRoleUsers = (id) => dispatch => {
    fetch('https://lacorniche.rw/api/get_role_users.php?id='+id)
        .then(res => res.json())
        .then(roleUsers => {
            dispatch(fetchRoleUsersSuccess(roleUsers))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchRoleUsersError(errorPayload))

        })
};

// ----- create role
export const createRole=(roleData)=>dispatch=>{
    fetch('link.com',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(roleData)
    })
    .then(res=>res.json)
    .then(role=>dispatch({
        type:NEW_ROLE_SUCCESS,
        payload:role
    }));
};

// ----- update role
export const updateRole=(roleData)=>dispatch=>{
    fetch('link.com',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(roleData)
    })
    .then(res=>res.json)
    .then(role=>dispatch({
        type:NEW_ROLE_SUCCESS,
        payload:role
    }));
};