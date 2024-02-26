const app = require('../server')
const request = require('supertest')
const mongoose = require('mongoose')

describe('POST /create-products', () => {
    beforeAll(async () => {
        const mongoURI = process.env.TEST_MONGO_URI;
        console.log(mongoURI);
        await mongoose.connect(mongoURI);
        await mongoose.connection.dropDatabase();
    });

    test('Create new product', async () => {
        const newProduct = {
            name: 'PS2',
            quantity: 11,
            price: 150,
            image: 'just an image'
        }
        console.log(newProduct);

        const response = await request(app).post('/products')
    })
})