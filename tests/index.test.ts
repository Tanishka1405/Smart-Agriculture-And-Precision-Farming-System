import { greetFarmer } from "../OneDrive/Desktop/Typescript_Smart_Agriculture/models/index";
test("greetFarmer should return correct greeting", () => {
    expect(greetFarmer("John")).toBe("Welcome to Smart Agriculture, Farmer John!");
  });