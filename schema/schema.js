const { buildSchema } = require('graphql');

// Define el esquema GraphQL
const schema = buildSchema(`
  type User {
    id: Int
    name: String
    status: String
    source: String
  }

  type Query {
    getGreeting: String
    getUser(id: Int!): User
  }
`);

// Implementa los resolvers para los endpoints definidos
const root = {
  getGreeting: () => {
    return 'Hello World! (GraphQL is Running)';
  },
  getUser: ({ id }) => {
    // CORRECCIÓN DE SINTAXIS: Usamos comillas invertidas (backticks) sin caracteres de escape.
    return {
      id: id,
      name: `User-${id}`, // <<--- ESTA LÍNEA ES LA CORRECCIÓN
      status: 'Active',
      source: 'GraphQL Mock Data'
    };
  }
};

module.exports = {
  schema,
  root
};
