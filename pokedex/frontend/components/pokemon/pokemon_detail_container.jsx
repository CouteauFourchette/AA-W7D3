import React from 'react';
import { connect } from 'react-redux';
import { selectOnePokemon } from '../../reducers/selectors';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemon: selectOnePokemon(state)
});

const mapDispatchToProps = (dispatch) => (
  { requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
