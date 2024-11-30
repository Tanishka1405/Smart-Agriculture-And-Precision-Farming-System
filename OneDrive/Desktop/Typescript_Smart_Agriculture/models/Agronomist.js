"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agronomist {
    constructor(agronomistId, name) {
        this.agronomistId = agronomistId;
        this.name = name;
    }
    analyzeData(sensorData) {
        console.log(`Agronomist ${this.name} is analyzing sensor data: `, sensorData);
        return sensorData.some(data => data.value < 30) ? 'Increase irrigation' : 'Conditions are optimal';
    }
    provideRecommendations(sensorData) {
        const recommendation = this.analyzeData(sensorData);
        console.log(`Agronomist ${this.name} recommends: ${recommendation}`);
        return recommendation;
    }
}
exports.default = Agronomist;
