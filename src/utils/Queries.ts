import { gql } from '@apollo/client';

export const GET_ALL_QUERY = gql`
	query samplePokeAPIquery (
			$offset: Int,
			$limit: Int
		) {
		pokemon_v2_pokemon(order_by: {id: asc}, offset: $offset, limit: $limit) {
			id
			height
			name
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
					id
				}
			}
			weight
			pokemon_v2_pokemonspecy {
				id
				name
				pokemon_v2_evolutionchain {
					id
					pokemon_v2_pokemonspecies {
						id
						name
					}
				}
				generation_id
			}
			pokemon_v2_pokemonsprites {
				sprites
				id
			}
		}
	}
`;

export const GET_BY_NAME_QUERY = gql`
	query samplePokeAPIquery (
			$limit: Int,
			$name: String
		) {
		pokemon_v2_pokemon(order_by: {id: asc}, limit: $limit, where: {name: {_like: "%ivy%"}}) {
			id
			height
			name
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
					id
				}
			}
			weight
			pokemon_v2_pokemonspecy {
				id
				name
				pokemon_v2_evolutionchain {
					id
					pokemon_v2_pokemonspecies {
						id
						name
					}
				}
				generation_id
			}
			pokemon_v2_pokemonsprites {
				sprites
				id
			}
		}
	}
`;