import React, { Component } from 'react';

class PokemonDetail extends Component {
  componentDidMount() {
    const pokemonId = this.props.match.params.pokemon_id;
    this.props.requestOnePokemon(pokemonId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1></h1>
      </div>

    );
  }
}

export default PokemonDetail;
// {this.props.pokemon.name}
