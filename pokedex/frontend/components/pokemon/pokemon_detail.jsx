import React, { Component } from 'react';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends Component {

  componentDidMount() {
    const pokemonId = this.props.match.params.pokemon_id;
    this.props.requestOnePokemon(pokemonId);
  }

  componentWillReceiveProps(newProps){
    const pokemonId = newProps.match.params.pokemon_id;
    if (this.props.match.params.pokemon_id !== pokemonId){
      this.props.requestOnePokemon(pokemonId);
    }
  }

  render() {
    const name = this.props.pokemon ? this.props.pokemon.name : '';
    const img = this.props.pokemon ? this.props.pokemon.image_url : '';
    return (
      <div>
        <h1>{ name }</h1>
        <img src={img} />
        <ItemDetailContainer />
      </div>

    );
  }
}

export default PokemonDetail;
