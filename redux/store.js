import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer, {
  fetchData,
  fetchDataFulfilled,
  fetchDataRejected
} from "./reducer";

export const getPerson = ({ personalNumber }) => {
  return async dispatch => {
    try {
      const promise = await fetch(
        `http://192.168.1.207:4000/bankdotnet?personalNumber=${personalNumber}`
      );
      dispatch(fetchData(true));
      const bankPerson = await promise.json();
      dispatch(fetchDataFulfilled(bankPerson));
    } catch (error) {
      dispatch(fetchDataRejected(error));
    }
  };
};

//Export our store as a default epxport
export default createStore(reducer, applyMiddleware(thunk));
