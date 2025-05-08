/**
 * Comprehensive JavaScript class example demonstrating:
 * - Class definition with constructor, properties, and methods
 * - Private fields for encapsulation
 * - Static methods and properties
 * - Inheritance with subclass
 * - Polymorphism by overriding methods
 * - Example usage
 * - Loop menu using alert, confirm, and prompt for interaction
 */

// Base class Vehicle
class Vehicle {
    // Private field for VIN (Vehicle Identification Number)
    #vin;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#vin = this.generateVin();
    }

    // Method to generate a random VIN (simplified)
    generateVin() {
        return 'VIN' + Math.floor(Math.random() * 1000000);
    }

    // Method to display vehicle info
    displayInfo() {
        return `Vehicle: ${this.year} ${this.make} ${this.model}`;
    }

    // Getter for VIN (read-only)
    getVin() {
        return this.#vin;
    }

    // Static method to compare two vehicles by year
    static compareByYear(v1, v2) {
        return v1.year - v2.year;
    }
}

// Subclass Car extends Vehicle
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    // Override displayInfo method (polymorphism)
    displayInfo() {
        return `Car: ${this.year} ${this.make} ${this.model} with ${this.doors} doors`;
    }

    // Additional method specific to Car
    honk() {
        return 'Beep beep!';
    }
}

// Exercise functions for menu

function demoVehicle() {
    const vehicle1 = new Vehicle('Toyota', 'Corolla', 2010);
    alert(vehicle1.displayInfo());
    alert(`VIN: ${vehicle1.getVin()}`);
}

function demoCar() {
    const car1 = new Car('Honda', 'Civic', 2018, 4);
    alert(car1.displayInfo());
    alert(car1.honk());
    alert(`VIN: ${car1.getVin()}`);
}

function demoSortVehicles() {
    const vehicle1 = new Vehicle('Toyota', 'Corolla', 2010);
    const car1 = new Car('Honda', 'Civic', 2018, 4);
    const vehicle2 = new Vehicle('Ford', 'Focus', 2015);
    const vehicles = [vehicle1, car1, vehicle2];
    vehicles.sort(Vehicle.compareByYear);
    let message = 'Vehicles sorted by year:\n';
    vehicles.forEach(v => {
        message += v.displayInfo() + '\n';
    });
    alert(message);
}

// Menu loop
function menu() {
    let exit = false;
    while (!exit) {
        const choice = prompt(
            "Select a demo to run:\n" +
            "1. Vehicle Demo\n" +
            "2. Car Demo\n" +
            "3. Sort Vehicles Demo\n" +
            "4. Exit\n" +
            "Enter the number of your choice:"
        );

        switch (choice) {
            case "1":
                demoVehicle();
                break;
            case "2":
                demoCar();
                break;
            case "3":
                demoSortVehicles();
                break;
            case "4":
                exit = true;
                alert("Exiting the menu. Goodbye!");
                break;
            default:
                alert("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

// Start the menu
menu();
