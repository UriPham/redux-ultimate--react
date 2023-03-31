import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../action/types';


const INITIAL_STATE = {
  listUsers: []
};

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case FETCH_USER_REQUEST:
      return {
        ...state
      };

    case FETCH_USER_SUCCESS:
      console.log('>>>', action.data)
      return {
        ...state,
        listUsers: action.data

      };

    case FETCH_USER_ERROR:
      return {
        ...state

      };

    default: return state;

  }

};

export default userReducer;