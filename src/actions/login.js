import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, GETALL_REQUEST,
    GETALL_SUCCESS,
    GETALL_FAILURE,
} from './types'



function handleResponse(response) {
    console.log(response)
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
export const fetchRequestsSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}
export function login(unique_username, password) {
    console.log("using fetch");
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST',
            // "Access-Control-Allow-Headers": "X-Requested-With,content-type"
         },
        body: JSON.stringify({ unique_username, password })
    };
    fetch('http://127.0.0.1/lacorniche/api/login.php', requestOptions)
    .then(res => res.json())
        .then(token => { console.log(token)
                // dispatch(fetchProductsSuccess(token))
    
        })
    }
