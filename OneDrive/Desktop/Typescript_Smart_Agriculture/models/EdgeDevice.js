"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EdgeDevice {
    constructor(deviceId) {
        this.sensors = [];
        this.deviceId = deviceId;
    }
    addSensor(sensor) {
        this.sensors.push(sensor);
    }
    collectData() {
        return this.sensors.map(sensor => sensor.getData());
    }
    processData() {
        const data = this.collectData();
        console.log("Edge Device is processing data locally: ", data);
        return data;
    }
    sendDataToApp() {
        const processedData = this.processData();
        return processedData;
    }
}
exports.default = EdgeDevice;
