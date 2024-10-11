import MobileApp from "./MobileApp";

class Farmer {
    farmerId: number;
    name: string;
  
    constructor(farmerId: number, name: string) {
      this.farmerId = farmerId;
      this.name = name;
    }
  
    accessData() {
      console.log(`${this.name} is accessing real-time data from the farm.`);
    }
  
    controlIrrigation(mobileApp: MobileApp) {
      console.log(`${this.name} is controlling the irrigation system via the mobile app.`);
      mobileApp.sendCommand("irrigation");
    }
  
    receiveRecommendations(recommendation: string) {
      console.log(`${this.name} received a recommendation: ${recommendation}`);
    }
  }
  
  export default Farmer;
  