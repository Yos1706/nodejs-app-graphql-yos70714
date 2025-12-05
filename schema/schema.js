const { buildSchema } = require('graphql');

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

const root = {
  getGreeting: () => {
    return 'Hello World! (GraphQL is Running)';
  },
  getUser: ({ id }) => {
    return {
      id: id,
      name: \`User-\${id}\`,
      status: 'Active',
      source: 'GraphQL Mock Data'
    };
  }
};

module.exports = {
  schema,
  root 
};
