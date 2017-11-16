json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
end

json.items @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url
