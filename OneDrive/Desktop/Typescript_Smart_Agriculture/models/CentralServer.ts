class CentralServer {
    serverId: number;
    storage: any[] = [];
    processedData: any[] = [];
  
    storeData(data: any) {
      this.storage.push(data);
      console.log('Central Server stored data: ', data);
    }
  
    processData() {
      this.processedData = this.storage.map(item => ({
        ...item,
        processed: true,
      }));
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
  
  export default CentralServer;
  