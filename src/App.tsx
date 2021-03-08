import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';
import SelectedPokemon from './components/SelectedPokemon';
import FilterPokemon from './components/FilterPokemon';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [filterName, setFilteredPokemon] = useState('');
  const [filterType, setFilteredType] = useState([]);

  const getAllPokemon = async (): Promise<void> => {
    const allPokemon = await axios(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const { results } = allPokemon.data;
    setPokemon(
      await Promise.all(
        results.map(
          async (pokemon: Pokemon): Promise<Pokemon> => {
            const pokemonResponse = await axios(pokemon.url);
            return await pokemonResponse.data;
          }
        )
      )
    );
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getSinglePokemon = (poke: Pokemon) => {
    setSelectedPokemon(poke);
  };

  return (
    <div className="App">
      <h1>POKEDEX!</h1>
      <FilterPokemon
        filterName={filterName}
        filterType={filterType}
        setFilteredPokemon={setFilteredPokemon}
        setFilteredType={setFilteredType}
      />
      <div>
        {pokemon && (
          <PokemonList
            pokemon={pokemon}
            getSinglePokemon={getSinglePokemon}
            filterName={filterName}
            filterType={filterType}
          />
        )}
      </div>
      <div className="pokemon-details">
        <h2>Pokemon details</h2>
        {selectedPokemon && <SelectedPokemon pokemon={selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
