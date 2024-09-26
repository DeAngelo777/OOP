// Static

import { Matematika } from "./Matematika.js";

class Car {
    constructor() {
        this.engineOn = false;
    }

    ride () {
        if (this.engineOn === true) {
            console.log('vaziuojam');
        } else {
            console.log('Stovim vietoj - ijunk varikli');
        }
    }

      turnOnEngine() {
        return this.engineOn = true;
    }

      turnOffEngine() {
        return this.engineOn = false;
    }


    static kilometerToMiles(distance) {
        return distance / 1.61;
    }

    static milesToKilometers(distance){
        return distance * 1.61;
    }
    static fuelConsumptionAverage(distance, fuel) {
        return fuel / distance * 100;
    }

}

const masiniukas = new Car();


console.log(Car.kilometerToMiles(100));
console.log(Car.milesToKilometers(100));
console.log(Car.fuelConsumptionAverage(5600, 300));

masiniukas.ride();
masiniukas.turnOnEngine();
masiniukas.ride();





// Kaip galetu atrodyti math alternatyva ?


const matke = new Matematika();

console.log(Matematika.skirtumas(10,2));
console.log(Matematika.sandauga(10,2));
console.log(Matematika.dalmuo(10,2));
console.log(Matematika.suma(10,2));



const Tekstas = {
    PirmaRaide: s => s[0],
    ZodziuKiekis: s => s.split(' ').length,
};

console.log(Tekstas.PirmaRaide('labas'));
console.log(Tekstas.PirmaRaide('as'));
console.log(Tekstas.ZodziuKiekis('labas rytas, Lietuva'));
console.log(Tekstas.ZodziuKiekis('labas'));