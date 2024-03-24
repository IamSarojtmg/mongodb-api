const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const connectDB = require("../models/db");
const Products = require("../models/products.model");

beforeAll(async () => {
  await connectDB();
  // await mongoose.connection.dropDatabase();
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
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
  });

  test("Create second new product", async () => {
    const newProduct = {
      name: "PS1",
      quantity: 1,
      price: 1150,
      image: "just an image of ps1",
    };

    const response = await request(app).post("/products").send(newProduct);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
  });
});

describe("Get the products", () => {
  it("Responds with the posted product", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.products)).toBe(true);
  });
});

describe("Get products by ID", () => {
  it("Responds with a single product depending on the id", async () => {
    const newProduct = {
      name: "xbox360",
      quantity: 100,
      price: 200,
      image: "just an image of 360",
    };

    const response = await request(app).post("/products").send(newProduct);

    const respond = await request(app).get(`/products/660013fed2e7420ec6f695f7`);
    expect(respond.status).toBe(200);
    expect(respond.body.product._id).toBe('660013fed2e7420ec6f695f7');
    expect(respond.body.product.name).toBe("xbox360");
  });
});

describe("Update the prodcut by ID", () => {
  it('update the name from ps6 to ps5', async () => {

    let id = '660013fdd2e7420ec6f695f2'

    const updatedName = {
      name: 'Sony Ps5'
    }

    const response = await request(app).put(`/products/${id}`).send(updatedName)

    const respond = await request(app).get(`/products/${id}`)

    expect(respond.body.product.name).toBe('Sony Ps5')

  })
})

describe("Delete the product by id", () => {
  it('404 - deletes the specific product by id and returns no body', async() => {
    let id = '660009b976773921dece005e'

    const response = await request(app).delete(`/products/${id}`)
    if (response.status === 200) {
      expect(response.body.message).toBe(`product with ${id} deleted`)
    } else {
      expect(response.body.message).toBe(`${id} not found`)
    }
    

  })
})

afterAll(async () => {
  await mongoose.connection.close();
});
