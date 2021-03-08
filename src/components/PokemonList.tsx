import React from 'react';
import { textChangeRangeIsUnchanged } from 'typescript';

interface PokemonList {
  pokemon: Pokemon[];
  getSinglePokemon: Function;
  filterName: string;
  filterType: string[];
}

export default function PokemonList({
  pokemon,
  getSinglePokemon,
  filterName,
  filterType,
}: PokemonList) {
  return (
    <>
      <h2>Pokemon</h2>
      <div className="pokemon-list">
        {pokemon
          .filter(({ name }) =>
            name.toLowerCase().includes(filterName.toLowerCase())
          )
          .filter(({ types }) =>
            types.some(({ type: { name } }) => filterType.includes(name))
          )
          .map((poke: Pokemon) => (
            <div
              key={poke.name}
              className="single-pokemon"
              onClick={() => getSinglePokemon(poke)}
            >
              <img
                src={poke.sprites.other['official-artwork']['front_default']}
              />
              <p className="pokemon-name">{poke.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}
