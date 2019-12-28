const { books } = require('./mocks');

exports.Book = class Book {
  static getMany() {
    return books;
  }
};
