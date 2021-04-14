import{FETCH_SUPPLIERS_ERROR,FETCH_SUPPLIERS_SUCCESS,FETCH_SUPPLIER_ERROR,FETCH_SUPPLIER_SUCCESS,NEW_SUPPLIER_SUCCESS,NEW_SUPPLIER_ERROR} from './types';

//-------------------Fetch suppliers----------------
export const fetchSuppliersSuccess = (suppliers) => {
    return {
        type: FETCH_SUPPLIERS_SUCCESS,
        payload: suppliers
    }
}

export const fetchSuppliersError = (data) => {
    return {
        type: FETCH_SUPPLIERS_ERROR,
        payload: data,
    }
}

export const fetchSuppliers = () => dispatch => {
    fetch('https://lacorniche.rw/api/get_suppliers.php')
        .then(res => res.json())
        .then(suppliers => {
            
            dispatch(fetchSuppliersSuccess(suppliers))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchSuppliersError(errorPayload))

        })
};

//-------------------Fetch supplier----------------
export const fetchSupplierSuccess = (supplier) => {
    return {
        type: FETCH_SUPPLIER_SUCCESS,
        payload: supplier
    }
}

export const fetchSupplierError = (data) => {
    return {
        type: FETCH_SUPPLIER_ERROR,
        payload: data,
    }
}

export const fetchSupplier = (id) => dispatch => {
    alert("id "+id)
    fetch('https://lacorniche.rw/api/get_supplier?supplier_id='+id)
        .then(res => res.json())
        .then(supplier => {
            dispatch(fetchSupplierSuccess(supplier))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchSupplierError(errorPayload))

        })
};

// ----- create supplier

export const createSupplier=(supplierData)=>dispatch=>{
    fetch('https://lacorniche.rw/api/add_supplier.php',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(supplierData)
    })
    .then(res=>res.json)
    .then(supplier=>dispatch({
        type:NEW_SUPPLIER_SUCCESS,
        payload:supplier
    }));
};

// ----- update supplier

export const updateSupplier=(supplierData)=>dispatch=>{
    fetch('https://lacorniche.rw/api/update_supplier.php',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(supplierData)
    })
    .then(res=>res.json)
    .then(supplier=>dispatch({
        type:NEW_SUPPLIER_SUCCESS,
        payload:supplier
    }));
};

//--------
export const addingItem = () => {
    return {
        type: 'addingSupplier',
    }
}