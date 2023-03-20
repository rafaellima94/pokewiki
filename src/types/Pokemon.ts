export interface Pokemon {
	pokemon_v2_pokemon: pokemon_v2_pokemon[],
}

export interface pokemon_v2_pokemon {
	id: number,
	height: number,
	name: string,
	weight: number,
	pokemon_v2_pokemontypes: pokemon_v2_pokemontypes[],
	pokemon_v2_pokemonspecy: pokemon_v2_pokemonspecy,
	pokemon_v2_pokemonsprites: pokemon_v2_pokemonsprites[],
}

interface pokemon_v2_pokemontypes {
	pokemon_v2_type: pokemon_v2_type,
}

interface pokemon_v2_type {
	name: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy',
	id: number,
}

interface pokemon_v2_pokemonspecy {
	id: number,
	name: string,
	generation_id: number,
	pokemon_v2_evolutionchain: pokemon_v2_evolutionchain,
}

interface pokemon_v2_evolutionchain {
	id: number,
	pokemon_v2_pokemonspecies: pokemon_v2_pokemonspecies[],
}

interface pokemon_v2_pokemonspecies {
	id: number,
	name: string,
}

interface pokemon_v2_pokemonsprites {
	id: number,
	sprites: string,
}

export enum Colours {
	normal = '#A8A77A',
	fire = '#EE8130',
	water = '#6390F0',
	electric = '#F7D02C',
	grass = '#7AC74C',
	ice = '#96D9D6',
	fighting = '#C22E28',
	poison = '#A33EA1',
	ground = '#E2BF65',
	flying = '#A98FF3',
	psychic = '#F95587',
	bug = '#A6B91A',
	rock = '#B6A136',
	ghost = '#735797',
	dragon = '#6F35FC',
	dark = '#705746',
	steel = '#B7B7CE',
	fairy = '#D685AD',
};