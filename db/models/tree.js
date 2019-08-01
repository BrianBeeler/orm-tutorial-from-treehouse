const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Tree extends Sequelize.Model {};

    Tree.init({
        name: Sequelize.STRING,
        height: Sequelize.INTEGER
    }, {sequelize});

    return Tree
}