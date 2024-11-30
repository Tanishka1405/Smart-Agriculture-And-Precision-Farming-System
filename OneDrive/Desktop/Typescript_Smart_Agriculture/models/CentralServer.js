"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CentralServer {
    constructor() {
        this.storage = [];
        this.processedData = [];
    }
    storeData(data) {
        this.storage.push(data);
        console.log('Central Server stored data: ', data);
    }
    processData() {
        this.processedData = this.storage.map(item => (Object.assign(Object.assign({}, item), { processed: true })));
        console.log('Central Server processed data: ', this.processedData);
        return this.processedData;
    }
    sendToAgronomist() {
        const processedData = this.processData();
        console.log('Data sent to Agronomist for further analysis.');
        return processedData;
    }
    sendToSupplyChain() {
        const processedData = this.processData();
        console.log('Data sent to Supply Chain Manager.');
        return processedData;
    }
}
exports.default = CentralServer;
