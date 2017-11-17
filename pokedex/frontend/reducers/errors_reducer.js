import { RECEIVE_ERRORS } from '../actions/pokemon_actions';

const errorsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.payload;
    default:
      return state;
  }};


export default errorsReducer;
