const app = require('../server')
const request = require('supertest')
const mongoose = require('mongoose')
const connectDB = require('../models/db')


describe('POST /create-products', () => {
    beforeAll(async () => {
        await connectDB()
        // const mongoURI = process.env.MONGO_URI;
        // console.log(mongoURI);
        // await mongoose.connect(mongoURI);
        // await mongoose.connection.dropDatabase();
    });

    test('Create new product', async () => {
        const newProduct = {
            name: 'PS3',
            quantity: 11,
            price: 150,
            image: 'just an image'
        }

        const response = await request(app).post('/products')
    })
})