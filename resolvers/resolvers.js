import MovieModel from '../models/Movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
const movieResolvers = {
  Query: {
    // a. Get all movies
    getAllMovies: async () => {
      return await MovieModel.find();
    },

    // b. Get movie by ID
    getMovieById: async (_, { id }) => {
      return await MovieModel.findById(id);
    },

    // c. Get movies by Director name using static methods
    getMoviesByDirector: async (_, { director_name }) => {
      return await MovieModel.findByDirector(director_name);
    },
  },

  Mutation: {
    // a. Insert new movie
    insertMovie: async (_, args) => {
      const movie = new MovieModel(args);
      return await movie.save();
    },

    // b. Update movie
    updateMovie: async (_, { id, ...fields }) => {
      return await MovieModel.findByIdAndUpdate(id, fields, { new: true });
    },

    // c. Delete movie by ID
    deleteMovieById: async (_, { id }) => {
      return await MovieModel.findByIdAndDelete(id);
    },
  },
};

export default movieResolvers;
