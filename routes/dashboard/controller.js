const Car = require('./model');

async function createCar(req, res) {
    try {
        const {brand, model, year} = req.body;
        const newCar = await Car.create({
            brand,
            model,
            year,
        });
        res.status(201).json(newCar);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Define other CRUD operations as needed

module.exports = {
    createCar,
    // Export other CRUD operations
};