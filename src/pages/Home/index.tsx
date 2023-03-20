import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_QUERY, GET_BY_NAME_QUERY } from 'utils/Queries'
import PokemonCard from 'components/PokemonCard';
import { useEffect, useRef, useState } from 'react';
import { Pokemon, pokemon_v2_pokemon } from 'types/Pokemon';
import { Grid, Segment, Container, Dimmer, Loader, Image, Popup, Button } from 'semantic-ui-react';
import { InView } from 'react-intersection-observer';
import pokeball from 'assets/images/pokeball.png';
import { useNavigate } from 'react-router-dom';
import SearchForm from 'components/SearchForm';

export default function Home() {
	const navigate = useNavigate();
	const { data: dataAll, loading: loadingAll, error: errorAll, fetchMore } = useQuery<Pokemon | undefined>(GET_ALL_QUERY, {
		variables: { offset: 0, limit: 40 },
	});
	const [pokemons, setPokemons] = useState<pokemon_v2_pokemon[]>();
	const [executeSearch, { data: dataByName, loading: loadingByName }] = useLazyQuery<Pokemon | undefined>(GET_BY_NAME_QUERY);
	const pokemonNameRef = useRef<HTMLInputElement>(null);

	const filterPokemon = (): void => {
		if (pokemonNameRef.current?.value) {
			executeSearch({
				variables: { limit: 40, name: pokemonNameRef.current.value }
			});

			if (dataByName) setPokemons(dataByName.pokemon_v2_pokemon);
		}
		else setPokemons(dataAll?.pokemon_v2_pokemon);
	}

	useEffect(() => {
		if (dataAll) setPokemons(dataAll.pokemon_v2_pokemon)
	}, [dataAll])

	return (
		<Container style={{ marginTop: 100, paddingBottom: 40 }}>
			{loadingAll || loadingByName ?
				<Dimmer active inverted>
					<Loader size='large'>Loading...</Loader>
				</Dimmer>
				:
				pokemons ?
					<Segment padded>
						<SearchForm ref={pokemonNameRef} filterPokemon={filterPokemon} />
						<Grid doubling columns={5} centered>
							{pokemons.map((pokemon, index) =>
								<Grid.Column key={index}>
									<PokemonCard {...pokemon} />
								</Grid.Column>)}
						</Grid>
						<InView onChange={async (inView) => {
							const currentLength = pokemons.length || 0;

							if (inView) {
								await fetchMore({
									variables: {
										offset: currentLength,
										limit: 40,
									},
								}).then((res) => {
									if (!dataByName) setPokemons(prev => prev && res.data ? [...prev, ...res.data.pokemon_v2_pokemon] : prev);
								})
							}
						}} />
					</Segment>
					:
					null
			}
			<Popup content='Favorites' trigger={
				<Button onClick={() => navigate('/favorites', { state: { pokemons: dataAll } })} style={{ position: 'fixed', bottom: 0, left: '5%' }}>
					<Image src={pokeball} size='mini' />
				</Button>
			} />
		</Container>
	)
}