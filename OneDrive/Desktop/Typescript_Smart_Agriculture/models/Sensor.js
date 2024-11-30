"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sensor {
    constructor(sensorId, type, value) {
        this.sensorId = sensorId;
        this.type = type;
        this.value = value;
    }
    measureData(newValue) {
        this.value = newValue;
        console.log(`Sensor ${this.sensorId} measured new ${this.type} data: ${this.value}`);
    }
    getData() {
        return { sensorId: this.sensorId, type: this.type, value: this.value };
    }
}
exports.default = Sensor;
