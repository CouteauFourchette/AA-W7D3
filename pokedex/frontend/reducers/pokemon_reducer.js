import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


function pokemonReducer(state={}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      return {[action.payload.pokemon.id]: action.payload.pokemon};
    default:
      return state;
  }
}

export default pokemonReducer;
