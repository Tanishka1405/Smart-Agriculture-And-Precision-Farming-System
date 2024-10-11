class IrrigationSystem {
    irrigationId: number;
    status: boolean;
    flowRate: number;
  
    constructor(irrigationId: number) {
      this.irrigationId = irrigationId;
      this.status = false;
      this.flowRate = 0;
    }
  
    adjustWaterFlow(newFlowRate: number) {
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
  
  export default IrrigationSystem;
  