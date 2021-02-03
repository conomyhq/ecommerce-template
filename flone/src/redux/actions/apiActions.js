import axios from 'axios';

export const API_START = 'API_START' 
export const API_SUCCESS = 'API_SUCCESS' 
export const API_ERROR = 'API_ERROR' 
export const API_CLEAR = 'API_CLEAR' 


const URL = 'https://us-central1-conomy-6cc91.cloudfunctions.net/api'

export const apiStart = (resource) => ({
  type: API_START,
  resource,
});

export const apiSuccess = (resource, data) => ({
  type: API_SUCCESS,
  payload: { data },
  resource,
});

export const apiError = (resource, error) => ({
  type: API_ERROR,
  payload: { error },
  resource,
});

export const apiClear = (resource) => ({
  type: API_CLEAR,
  resource,
});

function handleErrors(response) {
  const { status } = response;
  // console.log(response);

  if (status !== 200) {
    throw Error(response);
  }
  return response;
}

export const apiRequest = (resource, params) => {
  const {
    path,
    headers,
    data,
    ...other
  } = params;

  return (dispatch) => {
    dispatch(apiStart(resource));
    return axios({
      url: `${URL}${path}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
      ...other,
    })
      .then(handleErrors)
      .then((response) => {
        dispatch(apiSuccess(resource, { data: response.data, status: response.status }));
        return { data: response.data, status: response.status };
      })
      .catch((error) => dispatch(apiError(resource, error)));
  };
};

export const createTransaction = (data) => apiRequest('createTransaction', {
  method: 'POST',
  path: '/transactions/authorization',
  data: {
    "cardNumber": data.cardNumber,
    "title": data.title,
    "type": data.type,
    "amount": data.amount,
 
  }
});

export const getTransactions = () => apiRequest('getTransactions', {
  method: 'GET',
  path: '/transactions',
});


export const clearCreateTrx = () => apiClear('createTransaction')