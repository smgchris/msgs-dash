import {
    DELETE_PRODUCTCATEG_SUCCESS, DELETE_PRODUCTCATEG_ERROR
    , FETCH_PRODUCTCATEGS_SUCCESS, FETCH_PRODUCTCATEGS_ERROR, NEW_PRODUCTCATEG_SUCCESS, NEW_PRODUCTCATEG_ERROR
} from './types';

//-------------------Fetch categoruies----------------
export const fetchProductCategsSuccess = (categories) => {
    return {
        type: FETCH_PRODUCTCATEGS_SUCCESS,
        payload: categories
    }
}

export const fetchProductCategsError = (data) => {
    return {
        type: FETCH_PRODUCTCATEGS_ERROR,
        payload: data,
    }
}

export const fetchProductCategs = () => dispatch => {
    console.log("here");
    fetch('http://127.0.0.1/lacorniche/api/get_categories.php')
        .then(res => res.json())
        .then(categories => {
            dispatch(fetchProductCategsSuccess(categories))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchProductCategsError(errorPayload))

        })
};

//------------ Create user ---------------------

export const createProductCateg = categoryData => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/add_category.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(res => res.json())
        .then(category => 
            dispatch({
                type: NEW_PRODUCTCATEG_SUCCESS,
                payload: category
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_PRODUCTCATEG_ERROR,
                payload: errorPayload
              })

        });
};

//------------ Update user ---------------------

export const updateCateg = categoryData => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/update_category.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(res => res.json())
        .then(category => 
            dispatch({
                type: NEW_PRODUCTCATEG_SUCCESS,
                payload: category
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_PRODUCTCATEG_ERROR,
                payload: errorPayload
              })

        });
};
//------------------ DELETE----------------------

export const deleteProductCategSuccess = (id) => {
    return {
        type: DELETE_PRODUCTCATEG_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteProductCategError = (data) => {
    return {
        type: DELETE_PRODUCTCATEG_ERROR,
        payload: data,
    }
}


export const deleteProductCateg = (id) => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/delete_category.php', {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_PRODUCTCATEG_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_PRODUCTCATEG_ERROR,
            payload: errorPayload
          })

    });
}

//------
export const addingItem = () => {
    return {
        type: 'addingCategory',
    }
}