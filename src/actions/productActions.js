import {
    DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR
    , FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_ERROR
} from './types';

//-------------------Fetch products----------------
export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (data) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: data,
    }
}

export const fetchProducts = () => dispatch => {
    fetch('https://lacorniche.rw/api/get_products.php')
        .then(res => res.json())
        .then(products => {
            dispatch(fetchProductsSuccess(products))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchProductsError(errorPayload))

        })
};

//------------ Create user ---------------------

export const createProduct = productData => dispatch => {
    fetch('https://lacorniche.rw/api/add_product.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json())
        .then(product => 
            dispatch({
                type: NEW_PRODUCT_SUCCESS,
                payload: product
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_PRODUCT_ERROR,
                payload: errorPayload
              })

        });
};

//------------ update product---------------------

export const updateProduct = productData => dispatch => {
    fetch('https://lacorniche.rw/api/update_product.php', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json())
        .then(product => 
            dispatch({
                type: NEW_PRODUCT_SUCCESS,
                payload: product
              })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_PRODUCT_ERROR,
                payload: errorPayload
              })

        });
};

//------------------ DELETE----------------------

export const deleteProductSuccess = (id) => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteProductError = (data) => {
    return {
        type: DELETE_PRODUCT_ERROR,
        payload: data,
    }
}


export const deleteProduct = (id) => dispatch => {
    fetch('https://lacorniche.rw/api/delete_product.php?product_id='+id, {
        method: 'DELETE',
    }).then(() => 
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: id
          })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_PRODUCT_ERROR,
            payload: errorPayload
          })

    });
}
//------
export const addingItem = () => {
    return {
        type: 'addingProduct',
    }
}