"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Farmer {
    constructor(farmerId, name) {
        this.farmerId = farmerId;
        this.name = name;
    }
    accessData() {
        console.log(`${this.name} is accessing real-time data from the farm.`);
    }
    controlIrrigation(mobileApp) {
        console.log(`${this.name} is controlling the irrigation system via the mobile app.`);
        mobileApp.sendCommand("irrigation");
    }
    receiveRecommendations(recommendation) {
        console.log(`${this.name} received a recommendation: ${recommendation}`);
    }
}
exports.default = Farmer;
