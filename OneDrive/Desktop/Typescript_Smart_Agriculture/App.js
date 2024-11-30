"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Farmer_1 = __importDefault(require("./models/Farmer"));
const MobileApp_1 = __importDefault(require("./models/MobileApp"));
const EdgeDevice_1 = __importDefault(require("./models/EdgeDevice"));
const Sensor_1 = __importDefault(require("./models/Sensor"));
const IrrigationSystem_1 = __importDefault(require("./models/IrrigationSystem"));
const Agronomist_1 = __importDefault(require("./models/Agronomist"));
const CentralServer_1 = __importDefault(require("./models/CentralServer"));
const SupplyChainManager_1 = __importDefault(require("./models/SupplyChainManager"));
// Instantiate core objects
const farmer = new Farmer_1.default(1, 'John Doe');
const mobileApp = new MobileApp_1.default(101, farmer);
const edgeDevice = new EdgeDevice_1.default(501);
const irrigationSystem = new IrrigationSystem_1.default(201);
const agronomist = new Agronomist_1.default(301, 'Dr. Green');
const centralServer = new CentralServer_1.default();
const supplyChainManager = new SupplyChainManager_1.default();
// Add sensors to edge device
const moistureSensor = new Sensor_1.default(601, 'moisture', 25);
const temperatureSensor = new Sensor_1.default(602, 'temperature', 30);
edgeDevice.addSensor(moistureSensor);
edgeDevice.addSensor(temperatureSensor);
// Farmer uses mobile app to access real-time data
farmer.accessData();
mobileApp.receiveData(edgeDevice);
// Agronomist analyzes data and provides recommendations
const sensorData = edgeDevice.collectData();
const recommendation = agronomist.provideRecommendations(sensorData);
farmer.receiveRecommendations(recommendation);
// Adjust irrigation based on recommendation
if (recommendation === 'Increase irrigation') {
    irrigationSystem.turnOn();
    irrigationSystem.adjustWaterFlow(50);
}
// Central server stores data and processes it
centralServer.storeData(sensorData);
centralServer.processData();
centralServer.sendToAgronomist();
// Supply Chain Manager tracks inventory and optimizes distribution
supplyChainManager.trackInventory(['Seeds', 'Fertilizers']);
supplyChainManager.optimizeDistribution();
// Turn off the irrigation after 5 seconds
setTimeout(() => {
    irrigationSystem.turnOff();
}, 5000);
