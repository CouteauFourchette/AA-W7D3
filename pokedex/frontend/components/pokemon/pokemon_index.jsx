import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router';


class PokemonIndex extends Component {
  componentWillMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <div className="pokedex">
        <ul>
          { this.props.pokemon.map( pokemon => <PokemonIndexItem pokemon={pokemon} key={pokemon.name} /> )}
        </ul>
        <Route path="/pokemon/:pokemon_id" component={PokemonDetailContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
