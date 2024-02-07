const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbconfig');

const Car = sequelize.define('Car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
    },
});

Car.sync();

// `sequelize.define` also returns the model
console.log(Car === sequelize.models.Car); // true

module.exports = Car;