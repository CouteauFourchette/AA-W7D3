import { fetchAllPokemon, fetchOnePokemon, createOnePokemon } from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveOnePokemon = payload => ({
  type: RECEIVE_ONE_POKEMON,
  payload: payload
});

export const requestOnePokemon = (pokemonId) => dispatch => (
  fetchOnePokemon(pokemonId).then(payload => dispatch(receiveOnePokemon(payload)))
);

export const makeOnePokemon = (pokemon) => dispatch => (
  createOnePokemon(pokemon).then(payload => dispatch(receiveOnePokemon(payload)), errors => dispatch(receiveErrors(errors)))
);

export const receiveErrors = payload => ({
  type: RECEIVE_ERRORS,
  payload: payload
});
