import {
    DELETE_STOCKPRODUCT_SUCCESS, DELETE_STOCKPRODUCT_ERROR
    , FETCH_STOCKPRODUCTS_SUCCESS, FETCH_STOCKPRODUCTS_ERROR, NEW_STOCKPRODUCT_SUCCESS, NEW_STOCKPRODUCT_ERROR
} from './types';

//-------------------Fetch users----------------
export const fetchStockProductsSuccess = (users) => {
    console.log("success");
    return {
        type: FETCH_STOCKPRODUCTS_SUCCESS,
        payload: users
    }
}

export const fetchStockProductsError = (data) => {
    return {
        type: FETCH_STOCKPRODUCTS_ERROR,
        payload: data,
    }
}

export const fetchStockProducts = () => dispatch => {
    console.log("i am here");
    fetch('http://127.0.0.1/lacorniche/api/get_stock_products.php')
        .then(res => res.json())
        .then(stockProducts => {
            dispatch(fetchStockProductsSuccess(stockProducts))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchStockProductsError(errorPayload))

        })
};

//------------ Create user ---------------------

export const createStockProduct = stockProductData => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/add_stock_product.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(stockProductData)
    })
        .then(res => res.json())
        .then(stockProduct => 
            dispatch({
                type: NEW_STOCKPRODUCT_SUCCESS,
                payload: stockProduct
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_STOCKPRODUCT_ERROR,
                payload: errorPayload
              })

        });
};
//------------ update stock product ---------------------

export const updateStockProduct = stockProductData => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/update_stock_product.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(stockProductData)
    })
        .then(res => res.json())
        .then(stockProduct => 
            dispatch({
                type: NEW_STOCKPRODUCT_SUCCESS,
                payload: stockProduct
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_STOCKPRODUCT_ERROR,
                payload: errorPayload
              })

        });
};
//------------------ DELETE----------------------

export const deleteStockProductSuccess = (id) => {
    return {
        type: DELETE_STOCKPRODUCT_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteStockProductError = (data) => {
    return {
        type: DELETE_STOCKPRODUCT_ERROR,
        payload: data,
    }
}


export const deleteStockProduct = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_STOCKPRODUCT_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_STOCKPRODUCT_ERROR,
            payload: errorPayload
          })

    });
}
//----------------

export const addingItem = () => {
    return {
        type: 'addingSP',
    }
}