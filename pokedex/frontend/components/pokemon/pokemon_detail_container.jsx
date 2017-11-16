import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectOnePokemon, selectPokemonItems } from '../../reducers/selectors';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemon: selectOnePokemon(state),
  items: selectPokemonItems(state)
});

const mapDispatchToProps = (dispatch) => (
  { requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId)) }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
