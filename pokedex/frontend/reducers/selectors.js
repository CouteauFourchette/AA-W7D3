import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const pokemonIds = Object.keys(state.entities.pokemon);
  return pokemonIds.map(id => state.entities.pokemon[id]);
};

export const selectOnePokemon = (state) => {
  return state.entities.pokemon[state.ui.pokemonId];
};

export const selectPokemonItems = (state) => {
  const itemIds = Object.keys(state.entities.items);
  return itemIds.map(id =>state.entities.items[id]);
};

export const selectPokemonItem = (state, itemId) => {
  console.log(state.entities.items);
  return state.entities.items[itemId];
};
