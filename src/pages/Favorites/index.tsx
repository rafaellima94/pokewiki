import PokemonCard from 'components/PokemonCard';
import { Pokemon } from 'types/Pokemon';
import { Grid, Segment, Container } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

const Favorites = () => {
	const location = useLocation();
	const pokemonsFavorites: string | null = localStorage.getItem('pokemons_favorites');
	const pokemonsFavoritesJson: Number[] = JSON.parse(pokemonsFavorites || '[]');
	const { pokemon_v2_pokemon }: Pokemon = location.state.pokemons;
	const pokemons = pokemon_v2_pokemon.filter((el) => {
		return pokemonsFavoritesJson.some((f) => {
			return f === el.id;
		});
	});

	return (
		<Container style={{ marginTop: 100, paddingBottom: 40 }}>
			<Segment padded>
				<h1>Favorites Pokemons</h1>
				<Grid doubling columns={5} centered>
					{pokemons.map((pokemon, index) =>
						<Grid.Column key={index}>
							<PokemonCard {...pokemon} />
						</Grid.Column>)}
				</Grid>
			</Segment>
		</Container>
	)
}

export default Favorites;