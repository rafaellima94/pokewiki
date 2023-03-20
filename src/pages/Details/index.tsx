import { useLocation } from 'react-router-dom';
import { Grid, Segment, Container, Card, Image, Popup } from 'semantic-ui-react';
import { Colours, pokemon_v2_pokemon } from 'types/Pokemon';
import capitalize from 'utils/Utils';
import pokeball from 'assets/images/pokeball.png';
import { useEffect, useState } from 'react';

export default function Details() {
	const location = useLocation();
	const { id, name, height, weight, pokemon_v2_pokemonspecy, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes }: pokemon_v2_pokemon = location.state;
	const pokemonsFavorites: string | null = localStorage.getItem('pokemons_favorites');
	const pokemonsFavoritesJson: Number[] = JSON.parse(pokemonsFavorites || '[]');
	const [favorite, setFavorite] = useState<Number>(pokemonsFavoritesJson.includes(id) ? 1 : 0);

	useEffect(() => {
		if (!favorite && pokemonsFavoritesJson.length > 0) {
			let index = pokemonsFavoritesJson.indexOf(id);
			if (index !== -1) {
				pokemonsFavoritesJson.splice(index, 1);
				localStorage.setItem('pokemons_favorites', JSON.stringify(pokemonsFavoritesJson));
			}
		}

		if (favorite) {
			if (!pokemonsFavoritesJson.includes(id)) pokemonsFavoritesJson.push(id);
			localStorage.setItem('pokemons_favorites', JSON.stringify(pokemonsFavoritesJson));
		}
	}, [favorite])

	const addFavorite = () => {
		setFavorite(prev => prev === 0 ? 1 : 0);
	}

	return (
		<Container style={{ paddingTop: 100, paddingBottom: 40 }}>
			<Segment padded style={{ backgroundColor: Colours[pokemon_v2_pokemontypes[0].pokemon_v2_type.name] }}>
				<Grid doubling columns='two' divided container>
					<Grid.Row>
						<Grid.Column width={7}>
							<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} wrapped fluid style={{ backgroundColor: '#fff', borderRadius: 4 }} />
							<Popup content='Favorite' trigger={
								<div style={{ cursor: 'pointer', position: 'absolute', top: 20, left: 30 }} onClick={() => addFavorite()}>
									<Image src={pokeball} size='mini' style={{ filter: `grayscale(${favorite === 0 ? 1 : 0})` }} />
								</div>
							} />
						</Grid.Column>
						<Grid.Column width={9} textAlign='left'>
							<div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: 16, fontWeight: 600 }}>
								<h1 style={{ marginBottom: 0 }}>{capitalize(name)}</h1>
								<small>ID #{id}</small>
								<div style={{ display: 'flex', marginTop: 10 }}>
									<span>Height: </span>
									<span>{height}</span>
								</div>
								<div style={{ display: 'flex' }}>
									<span>Weight: </span>
									<span>{weight}</span>
								</div>
								<div style={{ display: 'flex' }}>
									<span>Generation: </span>
									<span>{pokemon_v2_pokemonspecy.generation_id}</span>
								</div>
								<div style={{ backgroundColor: '#fff', borderRadius: 4 }}>
									<h3 style={{ textAlign: 'center' }}>Evolution Chain</h3>
									<div style={{ display: 'flex', justifyContent: 'space-around' }}>
										{pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.slice().sort((a, b) => a.id - b.id).map((specy, index) =>
											<div key={index}>
												<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specy.id}.png`} wrapped fluid style={{ backgroundColor: '#fff', borderRadius: 4 }} />
												<p style={{ textAlign: 'center' }}>{capitalize(specy.name)}</p>
											</div>
										)}
									</div>
									<div style={{ display: 'flex', padding: 20, justifyContent: 'space-around' }}>
										{pokemon_v2_pokemontypes.map((type, index) =>
											<Card.Description key={index} style={{ flex: 1, maxWidth: 200, textAlign: 'center', borderRadius: 4, padding: 3, fontWeight: 'bold', backgroundColor: Colours[type.pokemon_v2_type.name] }}>{capitalize(type.pokemon_v2_type.name)}</Card.Description>
										)}
									</div>
								</div>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Container >
	)
}