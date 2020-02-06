import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'
// Action types.
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAIL = "POST_DATA_FAIL";

export const DELETE_DATA_START = "DELETE_DATA_START";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAIL = "DELETE_DATA_FAIL";

export const UPDATE_FLOW_START = "APPROVE_FLOW_START";
export const UPDATE_FLOW_SUCCESS = "APPROVE_FLOW_SUCCESS";
export const UPDATE_FLOW_FAIL = "APPROVE_FLOW_FAIL";

// Create actions
//LOGIN
export const loginStart = data => ({
  type: LOGIN_START,
  payload: data
});

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  Payload: error
});

function axiosLogin() {
  const clientId = "Sauti";
  const clientSecret = "Sauti";
  return axios.create({
    baseURL: "https://sauti-studios-bw.herokuapp.com/api/auth/login",
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/json"
    }
  });
}

export const login = user => {
  return dispatch => {
    axiosLogin()
      .post(
        "/",
        `grant_type=password&name=${user.name}&password=${user.password}`
      )
      .then(response => {
        dispatch(loginSuccess(response.data));
        console.log("LOGIN SUCCESS", response.data);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("token_type", response.data.token_type);
        localStorage.setItem("username", user.name);
      })
      .catch(error => {
        dispatch(loginFail(error.response));
        console.log("LOGIN ERROR", error, user);
      });
  };
};

//REGISTER
export const createUserStart = user => ({
  type: CREATE_USER_START,
  payload: user
});

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  payload: {
    ...user
  }
});

export const createUserFail = error => ({
  type: CREATE_USER_FAIL,
  payload: {
    error
  }
});

export const signUp = user => {
  return dispatch => {
    dispatch(createUserStart());
    axios
      .post("https://sauti-studios-bw.herokuapp.com/api/auth/register", user)
      .then(response => {
        console.log("SIUGNUP SUCCESS", response);
        dispatch(createUserSuccess(response.data));
        localStorage.setItem("token", response.data.access_token);
        console.log(response);
      })
      .catch(error => {
        dispatch(createUserFail(error.response));
        console.log("SIGNUP ERROR", error);
      });
  };
};
//get data such as description, location, idea, user_id
export const fetchFlow = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get("https://sauti-studios-bw.herokuapp.com/api/inputs/") //this api needs to be change to the backends given api
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

// .post the data, Create action to add flow.
export const addFlow = flow => dispatch => {
  dispatch({ type: POST_DATA_START });

  axios
    .post("https://sauti-studios-bw.herokuapp.com/api/inputs/", flow) //this api needs to be changed as well
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
// to delete a flow
export const deleteFlow = flow => dispatch => {
  dispatch({ type: DELETE_DATA_START });

  axiosWithAuth()
    .delete(`https://sauti-studios-bw.herokuapp.com/api/inputs/2${flow.user_id}`) //this api needs to be changes as well
    .then(res => {
      console.log("deleted item", res.data);
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_DATA_FAIL, payload: err });
    });
};

export const updateFlow = flow => dispatch => {
  dispatch({ type: UPDATE_FLOW_START });

  axiosWithAuth()
    .put(`https://sauti-studios-bw.herokuapp.com/api/inputs/2`, flow) //this api needs to be changes as well
    .then(res => {
      console.log("update item", res.data);
      dispatch({ type: UPDATE_FLOW_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_FLOW_FAIL, payload: err });
    });
};
