export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchOnePokemon = (pokemonId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemonId}`
  });
};

export const createOnePokemon = (pokemon) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pokemon/',
    data: pokemon
  });
};
