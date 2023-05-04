const request = require("supertest");
const app = require("../app");

const baseUrl='http://127.0.0.1'

describe("GET /parquear", () => {
    it("Prueba de que retorna 200", async () => {
        const response = await request(baseUrl).get("/parquear");
        expect(response.statusCode).toBe(200);
        });

    it("Prueba de que retorna data", async () => {
        const response = await request(baseUrl).get("/parquear");
        expect(response.body.Parqueos.length >= 1).toBe(true);
    });
});

describe("POST /parquear", () => {
    it("Prueba de que retorna 200", async () => {
    const Parqueo = {
        ID_Vehiculo:"1",
        ID_Parqueo:"2"
    }
    const response = await request(baseUrl).post("/parquear").send(Parqueo);
    expect(response.statusCode).toBe(201);
    });
});