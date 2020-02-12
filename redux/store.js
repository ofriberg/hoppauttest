//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware } from "redux";
//import thunk for doing asynchronous operations in redux
import thunk from "redux-thunk";
//import reducer from our reducer file
import reducer from "./reducer";
//import your action creators used by dispatchers to alter your global state.
import {
  fetchData,
  fetchDataFulfilled,
  fetchDataRejected,
  fetchDataPerson,
  fetchDataFulfilledPerson,
  fetchDataRejectedPerson
} from "./reducer";
import axios from "axios";
import superagent from "superagent";

const wait = ms => new Promise(r => setTimeout(r, ms));
//Define your action creators that will be responsible for asynchronouse operatiosn
export const getBankPerson = () => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const promise = await wait(4000).then(() =>
        fetch("http://192.168.10.219:4000/bankTest?personalNumber=198906010056")
      );

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

export const getPerson = () => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const promise = await wait(4000).then(() =>
        fetch("http://192.168.10.219:4000/test")
      );

      dispatch(fetchDataPerson(true));
      //Then use the json method to get json data from api/
      const person = await promise.json();
      console.log("person-----------", person);
      //Now when the data is retrieved dispatch an action altering redux state.
      dispatch(fetchDataFulfilledPerson(person));
    } catch (error) {
      console.log("Getting person Error---------", error);
      dispatch(fetchDataRejectedPerson(error));
    }
  };
};

//Export our store as a default epxport
export default createStore(reducer, applyMiddleware(thunk));
