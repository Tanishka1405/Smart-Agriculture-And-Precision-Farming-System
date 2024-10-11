class Sensor {
    sensorId: number;
    type: string; // moisture, temperature, etc.
    value: number;
  
    constructor(sensorId: number, type: string, value: number) {
      this.sensorId = sensorId;
      this.type = type;
      this.value = value;
    }
  
    measureData(newValue: number) {
      this.value = newValue;
      console.log(`Sensor ${this.sensorId} measured new ${this.type} data: ${this.value}`);
    }
  
    getData() {
      return { sensorId: this.sensorId, type: this.type, value: this.value };
    }
  }
  
  export default Sensor;
  