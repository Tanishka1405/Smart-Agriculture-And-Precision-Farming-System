"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SupplyChainManager {
    constructor() {
        this.inventory = [];
        this.distributionPlan = [];
    }
    trackInventory(inventoryItems) {
        this.inventory = inventoryItems;
        console.log(`Supply Chain Manager is tracking inventory: ${inventoryItems}`);
    }
    optimizeDistribution() {
        this.distributionPlan = this.inventory.map(item => `Deliver ${item} to nearest distribution point.`);
        console.log(`Supply Chain Manager optimized distribution plan: `, this.distributionPlan);
        return this.distributionPlan;
    }
}
exports.default = SupplyChainManager;
