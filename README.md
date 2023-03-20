
# PokeWiki

#### Projeto de listagem de Pokemons realizado utilizando:

- React Js
- Typescript
- [Apollo](https://www.apollographql.com/)
- Graphql
- [Semantic UI](https://react.semantic-ui.com/)
- [React Router](https://reactrouter.com/en/main)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)

O projeto foi desenvolvido com objetivo de consumir uma [API Pokemon](https://pokeapi.co/) e listar os Pokemons. Foi utilizado o React Router para navegação, Apollo para consumo da API GraphQL, React Intersection Observer para paginação e monitoramento do scroll do usuário e Semantic UI para facilitar o desenvolvimento do design das páginas.

A aplicação consiste em dois ecrãs. Home, onde há uma listagem paginada dos Pokemons, com um input para busca por nome e Details que exibe as informações específicas de cada Pokemon. Pelo fato das informações utilizadas na tela Home e Details serem muito semelhantes, foi optado por realizar uma busca com todos os dados e enviar um objeto populado entre as páginas, ao invés de realizar um request com ID nos Details.

## Instalação

Utilizando npm

```bash
  npm install
  npm start
```
    