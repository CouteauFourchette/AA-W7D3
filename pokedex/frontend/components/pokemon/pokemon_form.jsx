import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const TYPES = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
];

class PokemonForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "fire",
      image_url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createOnePokemon({pokemon: this.state})
    .then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          placeholder="name" name="name" type="text" value={this.state.name}></input>
        <input onChange={this.handleChange}
          placeholder="attack" name="attack" type="text" value={this.state.attack}></input>
        <input onChange={this.handleChange}
          placeholder="defense" name="defense" type="text" value={this.state.defense}></input>
        <select onChange={this.handleChange} name="poke_type" value={this.state.poke_type} >
          { TYPES.map( type => (
            <option value={type}>{type}</option>
          )) }
        </select>
        <input onChange={this.handleChange}
          placeholder="image url" name="image_url" type="text" value={this.state.image_url}></input>
        <input type="submit" value="Make Pokemon"></input>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
