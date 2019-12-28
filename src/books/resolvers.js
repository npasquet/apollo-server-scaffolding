const { Book } = require('./Book');

exports.resolvers = {
  Query: {
    books: () => Book.getMany(),
  },
};
