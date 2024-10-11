import EdgeDevice from './EdgeDevice';
import Farmer from "./Farmer";

class MobileApp {
  appId: number;
  farmer: Farmer;

  constructor(appId: number, farmer: Farmer) {
    this.appId = appId;
    this.farmer = farmer;
  }

  sendCommand(command: string) {
    console.log(`Mobile App sent command: ${command}`);
  }

  receiveData(edgeDevice: EdgeDevice) {
    const data = edgeDevice.sendDataToApp();
    console.log(`Mobile App received data from edge device: ${JSON.stringify(data)}`);
  }

  processLocally(data: any) {
    console.log("Mobile App processing data locally: ", data);
  }
}

export default MobileApp;
