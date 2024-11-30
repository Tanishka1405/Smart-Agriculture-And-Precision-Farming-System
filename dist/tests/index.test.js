"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../OneDrive/Desktop/Typescript_Smart_Agriculture/models/index");
test("greetFarmer should return correct greeting", () => {
    expect((0, index_1.greetFarmer)("John")).toBe("Welcome to Smart Agriculture, Farmer John!");
});
