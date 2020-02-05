import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
/*
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,

  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,

  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL*/
} from "../../actions";

const initialState = {
  username: "",
  password: "",
  primaryemail: "",
 /* flows: [],
  isFetching: false,
  error: null,
  isAdded: false,
  isDeleting: false*/
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START: {
        return {
            ...state,
            username: action.payload,
            password: action.payload,
            primaryemail: action.payload
        };
    }
    case CREATE_USER_SUCCESS: {
        return {
            ...state
        };
    }
    case CREATE_USER_FAIL: {
        return {
            ...state,
            error: action.payload.error
        };
    }
    case LOGIN_START: {
      return {
        ...state,
        username: action.payload,
        password: action.payload
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }/*
    case FETCH_DATA_START: {
      return {
        ...state,
        flows: [],
        isFetching: true,
        error: null,
        isAdded: false,
        isDeleting: false
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        flows: action.payload,
        isFetching: false,
        error: null,
        isAdded: false,
        isDeleting: false
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        flows: [],
        isFetching: false,
        error: action.payload,
        isAdded: false,
        isDeleting: false
      };
    }
    case POST_DATA_START: {
      return {
        ...state,
        flows: [],
        isFetching: false,
        error: null,
        isAdded: false,
        isDeleting: false
      };
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        flows: [...state.flows, action.payload],
        isFetching: false,
        error: null,
        isAdded: true,
        isDeleting: false
      };
    }
    case POST_DATA_FAIL: {
      return {
        ...state,
        flows: [],
        isFetching: false,
        error: action.payload,
        isAdded: false,
        isDeleting: false
      };
    }
    case DELETE_DATA_START: {
      return {
        ...state,
        flows: [],
        isFetching: false,
        error: false,
        isAdded: false,
        isDeleting: true
      };
    }
    case DELETE_DATA_SUCCESS: {
      return {
        ...state,
        flows: action.payload,
        isFetching: false,
        error: false,
        isAdded: false,
        isDeleting: false
      };
    }
    case DELETE_DATA_FAIL: {
      return {
        ...state,
        flows: [],
        isFetching: false,
        error: action.payload,
        isAdded: false,
        isDeleting: false
      };
    }*/
    default:
      return state;
  }
};

export default reducer;
