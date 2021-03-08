interface Pokemon {
  name: string;
  url: string;
  id: number;
  abilities: [
    {
      is_hidden: true;
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  height: number;
  weight: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
