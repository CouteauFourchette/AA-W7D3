import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

function uiReducer(state={}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return { pokemonId: action.payload.pokemon.id };
    default:
      return state;
  }
}

export default uiReducer;
