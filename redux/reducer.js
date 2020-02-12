//Define your initialState
const initialState = {
  //Have a people array responsible for getting the data and setting to the array.
  bankPerson: {},
  person: {},
  //Have the loading state indicate if it's done getting data.
  loading: true,
  //Have state for error message for recieving an error.
  errorMessage: ""
};

//Define your action types
//Initiate the api call
const GET_PERSON = "GET_PERSON";

const GET_BANK_PERSON = "GET_BANK_PERSON";
//Gets the players on api call is fullfilled
const GET_PERSON_FULFILLED = "GET_PERSON_FULFILLED";
const GET_BANK_PERSON_FULFILLED = "GET_BANK_PERSON_FULFILLED";
//When there is a error return an errror action type.
const GET_PERSON_REJECTED = "GET_PERSON_REJECTED";
const GET_BANK_PERSON_REJECTED = "GET_BANK_PERSON_REJECTED";

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON:
      return { ...state, loading: action.payload };
    case GET_BANK_PERSON:
      return { ...state, loading: action.payload };
    case GET_BANK_PERSON_FULFILLED:
      return { ...state, bankPerson: action.payload, loading: action.loading };
    case GET_PERSON_FULFILLED:
      return { ...state, person: action.payload, loading: action.loading };
    case GET_BANK_PERSON_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    case GET_PERSON_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    default:
      return state;
  }
};

//Define your action create that set your loading state.
export const fetchDataPerson = bool => {
  //return a action type and a loading state indicating it is getting data.
  return {
    type: GET_PERSON,
    payload: bool
  };
};
export const fetchData = bool => {
  //return a action type and a loading state indicating it is getting data.
  return {
    type: GET_BANK_PERSON,
    payload: bool
  };
};

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilledPerson = data => {
  //Return a action type and a loading to false, and the data.
  return {
    type: GET_PERSON_FULFILLED,
    payload: data,
    loading: false
  };
};
export const fetchDataFulfilled = data => {
  //Return a action type and a loading to false, and the data.
  return {
    type: GET_BANK_PERSON_FULFILLED,
    payload: data,
    loading: false
  };
};

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejectedPerson = error => {
  //Return a action type and a payload with a error
  return {
    type: GET_PERSON_REJECTED,
    payload: error,
    loading: false
  };
};
export const fetchDataRejected = error => {
  //Return a action type and a payload with a error
  return {
    type: GET_BANK_PERSON_REJECTED,
    payload: error,
    loading: false
  };
};

//Export the reducer as a default export
export default reducer;
