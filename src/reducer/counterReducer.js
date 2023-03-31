import { INCREMENT, DECREMENT } from '../action/types';


const INITIAL_STATE = {

  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case INCREMENT:
      console.log('check increment')
      return {

        ...state, count: state.count + 1,

      };

    case DECREMENT:
      console.log('check decrement')
      return {
        ...state, count: state.count - 1,

      };

    default: return state;

  }

};

export default counterReducer;