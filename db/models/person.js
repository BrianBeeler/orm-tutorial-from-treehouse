const Sequalize = require('sequelize');

module.exports = (sequelize) => {

    class Person extends Sequalize.Model {}
    Person.init({
        name: Sequalize.STRING,
        age: Sequalize.INTEGER,
        retirementDate: Sequalize.DATEONLY
    }, {sequelize});

    return Person
}
