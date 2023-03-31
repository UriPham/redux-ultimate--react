import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../action/types';


const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false
};

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case FETCH_USER_SUCCESS:
      // console.log('>>>', action.data)
      return {
        ...state,
        listUsers: action.data,
        isLoading: false,
        isError: false
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default: return state;

  }

};

export default userReducer;