import { FC, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Colours, pokemon_v2_pokemon } from 'types/Pokemon';
import { useNavigate } from 'react-router-dom';
import capitalize from 'utils/Utils';

const PokemonCard: FC<pokemon_v2_pokemon> = ({ id, name, height, weight, pokemon_v2_pokemonspecy, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes }: pokemon_v2_pokemon) => {
	const [hover, setHover] = useState<boolean>(false);
	const navigate = useNavigate();

	const toggleHover = () => setHover(prev => !prev);

	return (
		<div onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => navigate('/details', { state: { id, name, height, weight, pokemon_v2_pokemonspecy, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes } })}>
			<Card style={{ cursor: 'pointer' }}>
				{hover ?
					<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} wrapped ui={false} />
					:
					<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} wrapped ui={false} />
				}
				<Card.Content>
					<Card.Header>{capitalize(name)}</Card.Header>
					<Card.Meta>ID #{id}</Card.Meta>
					<Card.Description>
						Generation {pokemon_v2_pokemonspecy.generation_id}
					</Card.Description>
				</Card.Content>
				<Card.Content extra style={{ display: 'flex' }}>
					{pokemon_v2_pokemontypes.map((type, index) =>
						<Card.Description key={index} style={{ flex: 1, textAlign: 'center', borderRadius: 4, padding: 3, fontWeight: 'bold', backgroundColor: Colours[type.pokemon_v2_type.name] }}>{capitalize(type.pokemon_v2_type.name)}</Card.Description>
					)}
				</Card.Content>
			</Card>
		</div>
	)
}

export default PokemonCard;