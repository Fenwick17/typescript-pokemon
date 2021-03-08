interface SelectedPokemon {
  pokemon: Pokemon;
}

function getHeights(heightInDecimetre: number): string {
  const heightInCentimetres = heightInDecimetre * 10;
  const heightInMetres = heightInDecimetre / 10 + 'm';
  const heightInInches = Number((heightInCentimetres / 2.54).toFixed(0));
  const feet = Math.floor(heightInInches / 12);
  const inches = heightInInches - feet * 12;
  return `${feet}'${inches}" ${heightInMetres}`;
}

export default function SelectedPokemon({ pokemon }: SelectedPokemon) {
  return (
    <div>
      <p className="pokemon-name">{pokemon.name}</p>
      <p>#{pokemon.id}</p>
      <h3>Type</h3>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => {
          if (ability.is_hidden === true) {
            return <li key={index}>{ability.ability.name} (hidden)</li>;
          } else {
            return <li key={index}>{ability.ability.name}</li>;
          }
        })}
      </ul>
      <h3>Stats</h3>
      <h4>Height</h4>
      <p>{getHeights(pokemon.height)}</p>
      <h4>Weight</h4>
      <p></p>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li className={`stat-${stat.stat.name}`} key={index}>
            {stat.base_stat} {stat.stat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
