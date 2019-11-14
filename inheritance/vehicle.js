var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }
    Vehicle.prototype.getVehicleInfo = function () {
        return 'Vehicle: ' + this.type + ' - Model: ' + this.model + ' - Color: ' + this.color;
    };
    return Vehicle;
}());
// Basic inheritance using super:
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, type, color, horsePower) {
        var _this = _super.call(this, model, type, color) || this;
        _this.horsePower = horsePower;
        return _this;
    }
    Car.prototype.getCar = function () {
        return _super.prototype.getVehicleInfo.call(this);
    };
    Car.prototype.getPower = function () {
        return this.horsePower;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, type, color) {
        return _super.call(this, model, type, color) || this;
    }
    Truck.prototype.getTruck = function () {
        return _super.prototype.getVehicleInfo.call(this);
    };
    return Truck;
}(Vehicle));
var car = new Car('Honda 2019', 'Car', 'Black', 1300);
console.log(car.getCar());
var truck = new Truck('Yamaha', 'Truck', 'White');
console.log(truck.getTruck());
