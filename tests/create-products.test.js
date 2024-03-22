const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const connectDB = require("../models/db");
const Products = require("../models/products.model");

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
  it.only("Responds with a single product depending on the id", async () => {
    const newProduct = {
      name: "xbox360",
      quantity: 100,
      price: 200,
      image: "just an image of 360",
    };

    const response = await request(app).post("/products").send(newProduct);

    console.log(response.body);

    let id = await Products.findOne();
    console.log(id.id);
    const respond = await request(app).get(`/products/${id.id}`);
    expect(respond.status).toBe(200);
    expect(respond.body.product._id).toBe(id.id);
    expect(respond.body.product.name).toBe("xbox360");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
