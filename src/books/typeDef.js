const { gql } = require('apollo-server');

exports.typeDef = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;
