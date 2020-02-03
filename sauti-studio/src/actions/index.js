import axios from "axios";
import { axiosWithAuth } from "../localStorage/axiosWithAuth";

// Action types.
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAIL = "POST_DATA_FAIL";

export const DELETE_DATA_START = "DELETE_DATA_START";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAIL = "DELETE_DATA_FAIL";

export const APPROVE_FLOW_START = "APPROVE_FLOW_START";
export const APPROVE_FLOW_SUCCESS = "APPROVE_FLOW_SUCCESS";
export const APPROVE_FLOW_FAIL = "APPROVE_FLOW_FAIL";

// Create action to fetch flow.
export const fetchFlow = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get("https://reqres.in/api/unknown") //this api needs to be change to the backends given api
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err
      });
      console.log(err);
    });
};

// Create action to add flow.
export const addFlow = flow => dispatch => {
  dispatch({ type: POST_DATA_START });

  axios
    .post("https://reqres.in/api/unknown", flow) //this api needs to be changed as well
    .then(res => {
      dispatch({
        type: POST_DATA_SUCCESS,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: POST_DATA_FAIL,
        payload: err
      });
      console.log(err);
    });
};

export const deleteFlow = flow => dispatch => {
  dispatch({ type: DELETE_DATA_START });

  axiosWithAuth()
    .delete(`https://reqres.in/api/unknown/${flow.id}`)
    .then(res => {
      console.log("deleted item", res.data);
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_DATA_FAIL, payload: err });
    });
};
