import {
    DELETE_STOCKLOG_SUCCESS, DELETE_STOCKLOG_ERROR
    , FETCH_STOCKLOGS_SUCCESS, FETCH_STOCKLOGS_ERROR,UPDATE_STATUS_STOCKLOG_SUCCESS,
    UPDATE_STATUS_STOCKLOG_ERROR, NEW_STOCKLOG_SUCCESS, NEW_STOCKLOG_ERROR
} from './types';

//-------------------Fetch stockLogs----------------
export const fetchStockLogsSuccess = (stockLogs) => {
    return {
        type: FETCH_STOCKLOGS_SUCCESS,
        payload: stockLogs
    }
}

export const fetchStockLogsError = (data) => {
    return {
        type: FETCH_STOCKLOGS_ERROR,
        payload: data,
    }
}

export const fetchStockLogs = () => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/get_stock_logs.php')
        .then(res => res.json())
        .then(stockLogs => {
            dispatch(fetchStockLogsSuccess(stockLogs))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchStockLogsError(errorPayload))

        })
};

//------------ Create stockLog ---------------------

export const createStockLog = stockLogData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/stockLogs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(stockLogData)
    })
        .then(res => res.json())
        .then(stockLog =>
            dispatch({
                type: NEW_STOCKLOGS_SUCCESS,
                payload: stockLog
            })
        ).catch((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch({
                type: NEW_STOCKLOGS_ERROR,
                payload: errorPayload
            })

        });
};

//------------------ DELETE----------------------

export const deleteStockLogSuccess = (id) => {
    return {
        type: DELETE_STOCKLOGS_SUCCESS,
        payload: {
            id: id,
        }
    }
}

export const deleteStockLogError = (data) => {
    return {
        type: DELETE_STOCKLOGS_ERROR,
        payload: data,
    }
}


export const deleteStockLog = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/stockLogs/1', {
        method: 'DELETE',
    }).then(() =>
        dispatch({
            type: DELETE_STOCKLOGS_SUCCESS,
            payload: id
        })
    ).catch((error) => {
        const errorPayload = {};

        errorPayload['message'] = error.response.data.message;
        errorPayload['status'] = error.response.status;

        dispatch({
            type: DELETE_STOCKLOGS_ERROR,
            payload: errorPayload
        })

    });
}

//------------------ update STATUS of stock request ----------//
export const updateStatusStockLogSuccess = (stockLogs) => {
    return {
        type: UPDATE_STATUS_STOCKLOG_SUCCESS,
        payload: stockLogs
    }
}

export const updateStatusStockLogError = (data) => {
    return {
        type: UPDATE_STATUS_STOCKLOG_ERROR,
        payload: data,
    }
}
export const updateStatusStockLog = (stock_log) => dispatch => {
    fetch('http://127.0.0.1/lacorniche/api/update_status_stock_log.php'
        , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(stock_log)
        })
        .then(res => res.json())
        .then(stockLogs => {
            dispatch(updateStatusStockLogSuccess(stockLogs))

        }).catch((error) => {

            const errorPayload = {};

            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(updateStatusStockLogError(errorPayload))

        })
};

//------
export const updateApproving = (id) => {
    if(id===4)
    return {
        type: 'approving',
    }

    if(id===5)
    return{
        type:'declining',
    }
}