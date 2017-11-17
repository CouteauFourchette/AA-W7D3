import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { makeOnePokemon } from '../../actions/pokemon_actions';
import { selectErrors } from '../../reducers/selectors';
import PokemonForm from './pokemon_form';

const mapStateToProps = (state) => (
  { errors: selectErrors(state) }
);

const mapDispatchToProps = (dispatch) => (
  { createOnePokemon: (pokemon) => dispatch(makeOnePokemon(pokemon)) }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonForm));
