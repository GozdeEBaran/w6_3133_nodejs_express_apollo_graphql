import { gql } from 'graphql-tag';

const movieSchema = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  type Query {
    getAllMovies: [Movie]
    getMovieById(id: ID!): Movie
    getMoviesByDirector(director_name: String!): [Movie]
  }

  type Mutation {
    insertMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie

    updateMovie(
      id: ID!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    deleteMovieById(id: ID!): Movie
  }
`;

export default movieSchema;
