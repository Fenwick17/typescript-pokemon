import { ChangeEvent } from 'react';
import { pokemonTypes } from '../pokemonTypes';

interface PokemonFilter {
  filterName: string;
  filterType: string[];
  setFilteredPokemon: Function;
  setFilteredType: Function;
}

export default function FilterPokemon({
  filterName,
  filterType,
  setFilteredPokemon,
  setFilteredType,
}: PokemonFilter) {
  function handleCheckbox(event: ChangeEvent<HTMLInputElement>) {
    if (!filterType.includes(event.target.value)) {
      setFilteredType([...filterType, event.target.value]);
    } else {
      setFilteredType(filterType.filter((type) => type !== event.target.value));
    }
  }
  return (
    <div className="pokemon-filter">
      <div className="pokemon-search">
        <label htmlFor="pokemon-search">Find a pokemon</label>
        <input
          type="text"
          name="pokemon-search"
          id="pokemon-search"
          value={filterName}
          onChange={(evt) => setFilteredPokemon(evt.target.value)}
        />
      </div>
      <div>
        <p>Filter by type:</p>
        {pokemonTypes.map((type: string) => (
          <div>
            <input
              type="checkbox"
              id={`type-${type}`}
              name={`type-${type}`}
              value={type}
              checked={filterType.includes(type)}
              onChange={(evt) => handleCheckbox(evt)}
            />
            <label htmlFor={`type-${type}`}>{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
