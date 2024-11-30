import Farmer from './models/Farmer';
import MobileApp from './models/MobileApp';
import EdgeDevice from './models/EdgeDevice';
import Sensor from './models/Sensor';
import IrrigationSystem from './models/IrrigationSystem';
import Agronomist from './models/Agronomist';
import CentralServer from './models/CentralServer';
import SupplyChainManager from './models/SupplyChainManager';

// Instantiate core objects
const farmer = new Farmer(1, 'John Doe');
const mobileApp = new MobileApp(101, farmer);
const edgeDevice = new EdgeDevice(501);
const irrigationSystem = new IrrigationSystem(201);
const agronomist = new Agronomist(301, 'Dr. Green');
const centralServer = new CentralServer();
const supplyChainManager = new SupplyChainManager();

// Add sensors to edge device
const moistureSensor = new Sensor(601, 'moisture', 25);
const temperatureSensor = new Sensor(602, 'temperature', 30);
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
