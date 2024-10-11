class Agronomist {
    agronomistId: number;
    name: string;
  
    constructor(agronomistId: number, name: string) {
      this.agronomistId = agronomistId;
      this.name = name;
    }
  
    analyzeData(sensorData: any[]): string {
      console.log(`Agronomist ${this.name} is analyzing sensor data: `, sensorData);
      return sensorData.some(data => data.value < 30) ? 'Increase irrigation' : 'Conditions are optimal';
    }
  
    provideRecommendations(sensorData: any[]): string {
      const recommendation = this.analyzeData(sensorData);
      console.log(`Agronomist ${this.name} recommends: ${recommendation}`);
      return recommendation;
    }
  }
  
  export default Agronomist;
  