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
      attack: "",
      defense: "",
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
      <div className='new-pokemon'>
        { this.props.errors.map(error => error) }
        <h1>New Pokemon</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input onChange={this.handleChange}
            placeholder="name" name="name" type="text" value={this.state.name}></input>
        </label>
        <label>Attack
          <input onChange={this.handleChange}
            placeholder="i.e. 72" name="attack" type="text" value={this.state.attack}></input>
        </label>
        <label>Defense
          <input onChange={this.handleChange}
            placeholder="i.e. 72" name="defense" type="text" value={this.state.defense}></input>
        </label>
        <label>Type
          <select onChange={this.handleChange} name="poke_type" value={this.state.poke_type} >
            { TYPES.map( type => (
              <option value={type} key={type}>{type}</option>
            )) }
          </select>
        </label>
        <label>Image URL
          <input onChange={this.handleChange}
            placeholder="image url" name="image_url" type="text" value={this.state.image_url}></input>
        </label>
        <input type="submit" value="Make Pokemon"></input>
      </form>
      </div>
    );
  }
}

export default withRouter(PokemonForm);
