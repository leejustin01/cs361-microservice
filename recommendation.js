const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');

const PORT = 8000;
const app = express();

var cars;

fs.readFile('cars.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    cars = JSON.parse(data);
});

app.use(express.json());

const getNewestCar = () => {
    let newest = {"year":-1};
    for (car of cars) {
        if (car.year >= newest.year) {
            newest = car;
        }
    }
    return newest;
}

const getHighestMPG = () => {
    let highest = {"averageMPG":-1};
    for (car of cars) {
        if (car.averageMPG >= highest.averageMPG) {
            highest = car;
        }
    }
    return highest;
}

const getLowestCost = () => {
    let lowest = {"dailyCost":1000000000};
    for (car of cars) {
        if (car.dailyCost <= lowest.dailyCost) {
            lowest = car;
        }
    }
    return lowest;
}


app.get('/', async (req, res) => {
    const year = getNewestCar();
    const mpg = getHighestMPG();
    const cost = getLowestCost();

    const arr = [year, mpg, cost];

    res.status(200).json(arr);
});

app.listen(PORT, () => {
    console.log(`Recommendation microservice listening on port ${PORT}...`);
});