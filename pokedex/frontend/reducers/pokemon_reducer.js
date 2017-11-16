import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


function pokemonReducer(state={}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
    newState = {[action.payload.pokemon.id]: action.payload.pokemon};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default pokemonReducer;
