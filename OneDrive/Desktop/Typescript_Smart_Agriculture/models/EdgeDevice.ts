import Sensor from './Sensor';

class EdgeDevice {
  deviceId: number;
  sensors: Sensor[] = [];

  constructor(deviceId: number) {
    this.deviceId = deviceId;
  }

  addSensor(sensor: Sensor) {
    this.sensors.push(sensor);
  }

  collectData() {
    return this.sensors.map(sensor => sensor.getData());
  }

  processData() {
    const data = this.collectData();
    console.log("Edge Device is processing data locally: ", data);
    return data;
  }

  sendDataToApp() {
    const processedData = this.processData();
    return processedData;
  }
}

export default EdgeDevice;
