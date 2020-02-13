//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware } from "redux";
//import thunk for doing asynchronous operations in redux
import thunk from "redux-thunk";
//import reducer from our reducer file
import reducer from "./reducer";
//import your action creators used by dispatchers to alter your global state.
import { fetchData, fetchDataFulfilled, fetchDataRejected } from "./reducer";
import axios from "axios";

//Define your action creators that will be responsible for asynchronouse operatiosn
export const getPerson = () => {
  console.log("getBankPerson");
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {
    console.log("dispatch bank person");
    const viktor = "198511044656";
    const oscar = "198906010056";
    //Then perform your asynchronous operations.
    try {
      const promise = await fetch(
        `http://192.168.1.207:4000/bankdotnet?personalNumber=${oscar}`
      );
      console.log("promise", promise);

      dispatch(fetchData(true));
      //Then use the json method to get json data from api/
      const bankPerson = await promise.json();
      console.log("bank person-----------", bankPerson);

      //Now when the data is retrieved dispatch an action altering redux state.
      dispatch(fetchDataFulfilled(bankPerson));
    } catch (error) {
      console.log("Getting bank person Error---------", error);
      dispatch(fetchDataRejected(error));
    }
  };
};

//Export our store as a default epxport
export default createStore(reducer, applyMiddleware(thunk));
