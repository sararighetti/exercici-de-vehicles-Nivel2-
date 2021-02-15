class Car {
    plate: any;
    brand: string;
    color: string;
    wheels: Wheel[] = new Array();
  
    constructor(plate: any, brand: string, color: string) {
      this.plate = plate;
      this.brand = brand;
      this.color = color;
    }
    addWheel(wheel: Wheel): void {
      this.wheels.push(wheel);
    }
    
  }
  
  