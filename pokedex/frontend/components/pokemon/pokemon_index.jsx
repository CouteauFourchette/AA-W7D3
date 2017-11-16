import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <ul>
        { this.props.pokemon.map( pokemon => <PokemonIndexItem pokemon={pokemon} key={pokemon.name} /> )}
      </ul>
    );
  }
}

export default PokemonIndex;
