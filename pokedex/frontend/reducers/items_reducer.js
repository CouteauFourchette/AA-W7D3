 import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      Object.keys(action.payload.items).forEach( id => {
        const item = action.payload.items[id];
        newState[item.id] = item;
      });
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
