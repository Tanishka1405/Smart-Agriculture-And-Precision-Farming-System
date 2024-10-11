class SupplyChainManager {
    managerId: number;
    inventory: string[] = [];
    distributionPlan: string[] = [];
  
    trackInventory(inventoryItems: string[]) {
      this.inventory = inventoryItems;
      console.log(`Supply Chain Manager is tracking inventory: ${inventoryItems}`);
    }
  
    optimizeDistribution() {
      this.distributionPlan = this.inventory.map(item => `Deliver ${item} to nearest distribution point.`);
      console.log(`Supply Chain Manager optimized distribution plan: `, this.distributionPlan);
      return this.distributionPlan;
    }
  }
  
  export default SupplyChainManager;
  