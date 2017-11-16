import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const pokemonIds = Object.keys(state.entities.pokemon);
  return pokemonIds.map(id => state.entities.pokemon[id]);
};
