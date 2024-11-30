"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MobileApp {
    constructor(appId, farmer) {
        this.appId = appId;
        this.farmer = farmer;
    }
    sendCommand(command) {
        console.log(`Mobile App sent command: ${command}`);
    }
    receiveData(edgeDevice) {
        const data = edgeDevice.sendDataToApp();
        console.log(`Mobile App received data from edge device: ${JSON.stringify(data)}`);
    }
    processLocally(data) {
        console.log("Mobile App processing data locally: ", data);
    }
}
exports.default = MobileApp;
