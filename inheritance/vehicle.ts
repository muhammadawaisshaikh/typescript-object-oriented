class Vehicle {
    model: string;
    type: string;
    color: string;

    constructor(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }

    getVehicleInfo() {
        return 'Vehicle: '+this.type+' - Model: '+this.model+' - Color: '+this.color;
    }
}

// Basic inheritance using super:
class Car extends Vehicle {

    horsePower: number;

    constructor(model, type, color, horsePower){
        super(model, type, color);
        this.horsePower = horsePower;
    }

    getCar() {
       return super.getVehicleInfo();
    }

    getPower() {
        return this.horsePower;
    }
}

class Truck extends Vehicle {

    constructor(model, type, color){
        super(model, type, color);
    }

    getTruck() {
       return super.getVehicleInfo();
    }
}

let car = new Car('Honda 2019', 'Car', 'Black', 1300);
console.log(car.getCar());

let truck = new Truck('Yamaha', 'Truck', 'White');
console.log(truck.getTruck());