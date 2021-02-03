import {
  API_START,
  API_SUCCESS,
  API_ERROR,
  API_CLEAR,
} from '../actions/apiActions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload.data,
      };
    case API_ERROR:
      return {
        ...state,
        isLoading: false,
        data: {},
        ...action.payload.error,
      };
    case API_CLEAR:
      return undefined;
    default:
      return {
        ...state,
      };
  }
};

const ApiReducer = (state = {}, action) => {
  const { type, resource } = action;
  if (!/^API_/.test(type)) return state;
  const key = resource;
  const apiState = state[key] || {};
  return {
    ...state,
    [key]: reducer(apiState, action),
  };
};

export default ApiReducer;
