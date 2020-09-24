const { ApolloServer, gql } = require('apollo-server');
const DbClient = require('./db');

const typeDefs = gql`
  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe
  }

  type Mutation {
    createRecipe(
      title: String!
      imageUrl: String
      estimatedTime: Int
      serves: Int
      ingredients: [String!]
      steps: [String!]
    ): Recipe!
    updateRecipe(
      id: ID!
      title: String!
      imageUrl: String
      estimatedTime: Int
      serves: Int
      ingredients: [String!]
      steps: [String!]
    ): Recipe!
    deleteRecipe(id: ID!): ID
  }

  type Recipe {
    id: ID!
    title: String!
    imageUrl: String
    estimatedTime: Int
    serves: Int
    ingredients: [String!]
    steps: [String!]
  }
`;

const resolvers = {
  Query: {
    recipe: (_, { id }, { db }) => db.getRecipe(id),
    recipes: (_, __, { db }) => db.getRecipes(),
  },
  Mutation: {
    createRecipe: (_, fields, { db }) => db.addRecipe(fields),
    updateRecipe: (_, fields, { db }) => db.updateRecipe(fields),
    deleteRecipe: (_, { id }, { db }) => db.deleteRecipe(id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db: new DbClient() },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
