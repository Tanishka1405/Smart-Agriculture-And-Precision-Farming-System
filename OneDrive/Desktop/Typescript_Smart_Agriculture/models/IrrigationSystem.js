"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IrrigationSystem {
    constructor(irrigationId) {
        this.irrigationId = irrigationId;
        this.status = false;
        this.flowRate = 0;
    }
    adjustWaterFlow(newFlowRate) {
        this.flowRate = newFlowRate;
        console.log(`Irrigation system adjusted water flow to ${this.flowRate}`);
    }
    turnOn() {
        this.status = true;
        console.log(`Irrigation system turned on.`);
    }
    turnOff() {
        this.status = false;
        console.log(`Irrigation system turned off.`);
    }
}
exports.default = IrrigationSystem;
