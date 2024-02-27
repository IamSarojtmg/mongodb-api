const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const connectDB = require("../models/db");

beforeAll(async () => {
  await connectDB();
  await mongoose.connection.dropDatabase();
});
describe("POST /create-products", () => {
    
    test("Create new product", async () => {
        const newProduct = {
            name: "PS6",
            quantity: 11,
            price: 150,
            image: "just an image",
        };
        
        const response = await request(app).post("/products").send(newProduct);
        console.log(response.body);
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});