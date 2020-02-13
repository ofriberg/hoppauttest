const initialState = {
  user: {},
  loading: false,
  errorMessage: ""
};

// Action types
const GET_USER = "GET_USER";
const GET_USER_FULFILLED = "GET_USER_FULFILLED";
const GET_USER_REJECTED = "GET_USER_REJECTED";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: action.payload };
    case GET_USER_FULFILLED:
      return { ...state, user: action.payload, loading: action.loading };
    case GET_USER_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    default:
      return state;
  }
};

// Acction creators
export const fetchData = bool => {
  return {
    type: GET_USER,
    payload: bool
  };
};

export const fetchDataFulfilled = data => {
  return {
    type: GET_USER_FULFILLED,
    payload: data,
    loading: false
  };
};

export const fetchDataRejected = error => {
  return {
    type: GET_USER_REJECTED,
    payload: error,
    loading: false
  };
};

export default reducer;
