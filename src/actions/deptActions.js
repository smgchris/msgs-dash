import{FETCH_DEPTS_ERROR,FETCH_DEPTS_SUCCESS,NEW_DEPT_SUCCESS,NEW_DEPT_ERROR,DELETE_DEPT_ERROR,DELETE_DEPT_SUCCESS
,FETCH_DEPT_USERS_ERROR,FETCH_DEPT_USERS_SUCCESS,} from './types';

//-------------------Fetch depts----------------
export const fetchDeptsSuccess = (depts) => {
    return {
        type: FETCH_DEPTS_SUCCESS,
        payload: depts
    }
}

export const fetchDeptsError = (data) => {
    return {
        type: FETCH_DEPTS_ERROR,
        payload: data,
    }
}

export const fetchDepts = () => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_departments.php')
        .then(res => res.json())
        .then(depts => {
            dispatch(fetchDeptsSuccess(depts))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchDeptsError(errorPayload))

        })
};

//-------------------Fetch depts users----------------
export const fetchDeptUsersSuccess = (deptUsers) => {
    return {
        type: FETCH_DEPT_USERS_SUCCESS,
        payload: deptUsers
    }
}

export const fetchDeptUsersError = (data) => {
    return {
        type: FETCH_DEPT_USERS_ERROR,
        payload: data,
    }
}

export const fetchDeptUsers = (id) => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_dept_users.php?id='+id)
        .then(res => res.json())
        .then(deptUsers => {
            dispatch(fetchDeptUsersSuccess(deptUsers))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchDeptUsersError(errorPayload))

        })
};
//----------- Create dept-----------

export const createDept=(deptData)=>dispatch=>{
    fetch('http://127.0.0.1/lacorniche/api/add_department.php',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(deptData)
    })
    .then(res=>res.json)
    .then(dept=>dispatch({
        type:NEW_DEPT_SUCCESS,
        payload:dept
    }));
};

//----------- Update dept-----------

export const updateDept=(deptData)=>dispatch=>{
    fetch('http://127.0.0.1/lacorniche/api/update_dept.php',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(deptData)
    })
    .then(res=>res.json)
    .then(dept=>dispatch({
        type:NEW_DEPT_SUCCESS,
        payload:dept
    }));
};

//------------------ DELETE----------------------

export const deleteDeptSuccess = (id) => {
    return {
        type: DELETE_DEPT_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteDeptError = (data) => {
    return {
        type: DELETE_DEPT_ERROR,
        payload: data,
    }
}


export const deleteDept = (id) => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/delete_dept?id='+id, {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_DEPT_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_DEPT_ERROR,
            payload: errorPayload
          })

    });
}

//---
export const addingItem = () => {
    return {
        type: 'addingDept',
    }
}