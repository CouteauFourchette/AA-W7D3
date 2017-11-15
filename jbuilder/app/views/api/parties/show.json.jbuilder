json.extract! @party, :name, :location

json.guests @party.guests do |guest|
  json.extract! guest, :name
  json.gifts guest.gifts, :title
end


# j
