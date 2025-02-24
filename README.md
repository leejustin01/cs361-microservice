# Car Recommendation Microservice
Car recommendation microservice implemented by Justin Lee for Ohm Thakor.

## Overview
This microservice provides car recommendations based on three criteria:
- The newest car by year
- The car with the highest average miles per gallon (MPG)
- The car with the lowest daily rental cost

## Communication Contract
### Requesting Data
To request car recommendations, send a GET request to the root endpoint (/).

Example request using fetch:
```javascript
import fetch from 'node-fetch';

const request = async () => {
  const response = await fetch('http://localhost:8000/');  // Requests data
  const data = await response.json();  // Receives data as an array
}
```
### Receiving Data
The response is a JSON array containing the three objects representing the three recommended cars. The array is extracted from the response in the line from above:
```javascript
  const data = await response.json();
```
Here is an example response:
```json
[
  {
    id: 8,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    bodyStyle: 'Sedan',
    dailyCost: 105,
    imageUrl: '/images/tesla-3.webp',
    description: 'An electric sedan with cutting-edge technology and performance.',
    drivetrain: 'AWD',
    averageMPG: 'Electric'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    bodyStyle: 'Sedan',
    dailyCost: 45,
    imageUrl: '/images/honda-civic.png',
    description: 'A sporty and stylish sedan with excellent handling and comfort.',
    drivetrain: 'FWD',
    averageMPG: 34
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    bodyStyle: 'Sedan',
    dailyCost: 40,
    imageUrl: '/images/toyota-corolla.png',
    description: 'A reliable and fuel-efficient sedan, perfect for daily commutes.',
    drivetrain: 'FWD',
    averageMPG: 32
  }
]
```
## UML Sequence Diagram
![image](https://github.com/user-attachments/assets/200c5210-ffde-42e9-bb48-9742ffdf0ecd)

## Running the Microservice
1. Install Node.js if not already installed
2. Install dependencies:
```bash
npm install
```
3. Start the microservice:
```bash
npm start
```
or
```bash
node recommendation.js
```
4. The microservice is currently configured to be available at http://localhost:8000/ 
