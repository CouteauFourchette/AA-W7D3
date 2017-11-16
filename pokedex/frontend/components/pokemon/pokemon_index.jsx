import React, { Component } from 'react';

class PokemonIndex extends Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <ul>UL is here
        { this.props.pokemon.map( pokemon => <li key={pokemon.name}>{pokemon.name}</li> )}
      </ul>
    );
  }
}

export default PokemonIndex;
