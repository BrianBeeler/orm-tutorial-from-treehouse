const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db',
    logging: false
})

const db = {
    sequelize,
    Sequelize,
    models: {}
}

db.models.Movie = require('./models/movies.js')(sequelize);
db.models.Person = require('./models/person.js')(sequelize);
db.models.Tree = require('./models/tree.js')(sequelize);

module.exports = db;