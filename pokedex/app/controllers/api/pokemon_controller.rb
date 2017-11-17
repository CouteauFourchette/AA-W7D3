class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      p @pokemon.errors.full_messages
      render json: @pokemon.errors.full_messages
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:attack, :defense, :image_url, :name, :poke_type)
  end
end
