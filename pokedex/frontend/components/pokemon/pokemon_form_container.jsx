import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { makeOnePokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';


const mapDispatchToProps = (dispatch) => (
  { createOnePokemon: (pokemon) => dispatch(makeOnePokemon(pokemon)) }
);

export default withRouter(connect(null, mapDispatchToProps)(PokemonForm));
