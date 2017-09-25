const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/expressLists-ng';
const secret = process.env.SECRET || 'secret';

module.exports = { port, dbURI, secret };
