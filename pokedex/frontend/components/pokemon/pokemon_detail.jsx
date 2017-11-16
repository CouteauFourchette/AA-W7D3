import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends Component {

  componentDidMount() {
    const pokemonId = this.props.match.params.pokemon_id;
    setTimeout(() => this.props.requestOnePokemon(pokemonId), 500);
  }

  componentWillReceiveProps(newProps){
    const pokemonId = newProps.match.params.pokemon_id;

    if (this.props.match.params.pokemon_id !== pokemonId){
      this.props.requestOnePokemon(pokemonId);
    }
  }

  render() {
    const pokemonId = this.props.match.params.pokemon_id;
    if(this.props.pokemon){
      return (
        <div className="pokemon-detail">
          <h1>{this.props.pokemon.name }</h1>
          <div className="img-description">
            <img src={this.props.pokemon.image_url} />
            <div>
              <p>Attack: {this.props.pokemon.attack} </p>
              <p>Defense: {this.props.pokemon.defense} </p>
              {this.props.pokemon.moves.map( move => (
                <p>Move: {move}</p>
              ))}
            </div>
          </div>

          <ul className="item-list">
            { this.props.items.map(item => (
                <li><NavLink to={`/pokemon/${pokemonId}/items/${item.id}`}><img src={item.image_url}/></NavLink></li>
            ))}
          </ul>
          <Route path={`/pokemon/${pokemonId}/items/:itemId`} component={ItemDetailContainer} />
        </div>
      );
    }else{
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
  }
}

export default PokemonDetail;

// {
