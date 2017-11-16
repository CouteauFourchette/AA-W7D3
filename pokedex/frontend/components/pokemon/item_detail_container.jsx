import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  items: selectPokemonItem(state)
});

export default withRouter(connect(mapStateToProps, null)(ItemDetail));
