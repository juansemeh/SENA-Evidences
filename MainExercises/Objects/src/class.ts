import * as readline from 'readline';

// Base class Vehicle
class Vehicle {
    // Private field for VIN (Vehicle Identification Number)
    #vin: string;

    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {
        this.#vin = this.generateVin();
    }

    // Method to generate a random VIN (simplified)
    private generateVin(): string {
        return 'VIN' + Math.floor(Math.random() * 1000000);
    }

    // Method to display vehicle info
    displayInfo(): string {
        return `Vehicle: ${this.year} ${this.make} ${this.model}`;
    }

    // Getter for VIN (read-only)
    getVin(): string {
        return this.#vin;
    }

    // Static method to compare two vehicles by year
    static compareByYear(v1: Vehicle, v2: Vehicle): number {
        return v1.year - v2.year;
    }
}

// Subclass Car extends Vehicle
class Car extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        public doors: number
    ) {
        super(make, model, year);
    }

    // Override displayInfo method (polymorphism)
    displayInfo(): string {
        return `Car: ${this.year} ${this.make} ${this.model} with ${this.doors} doors`;
    }

    // Additional method specific to Car
    honk(): string {
        return 'Beep beep!';
    }
}

// Helper to prompt user input using readline
function promptUser(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

// Exercise functions for menu

async function demoVehicle(): Promise<void> {
    try {
        const vehicle1 = new Vehicle('Toyota', 'Corolla', 2010);
        console.log(vehicle1.displayInfo());
        console.log(`VIN: ${vehicle1.getVin()}`);
    } catch (error) {
        console.error('Error in demoVehicle:', error);
    }
}

async function demoCar(): Promise<void> {
    try {
        const car1 = new Car('Honda', 'Civic', 2018, 4);
        console.log(car1.displayInfo());
        console.log(car1.honk());
        console.log(`VIN: ${car1.getVin()}`);
    } catch (error) {
        console.error('Error in demoCar:', error);
    }
}

async function demoSortVehicles(): Promise<void> {
    try {
        const vehicle1 = new Vehicle('Toyota', 'Corolla', 2010);
        const car1 = new Car('Honda', 'Civic', 2018, 4);
        const vehicle2 = new Vehicle('Ford', 'Focus', 2015);
        const vehicles: Vehicle[] = [vehicle1, car1, vehicle2];
        vehicles.sort(Vehicle.compareByYear);
        let message = 'Vehicles sorted by year:\n';
        vehicles.forEach(v => {
            message += v.displayInfo() + '\n';
        });
        console.log(message);
    } catch (error) {
        console.error('Error in demoSortVehicles:', error);
    }
}

// Dynamic menu loop using readline
async function menu(): Promise<void> {
    let exit = false;
    while (!exit) {
        try {
            const choice = await promptUser(
                "\nSelect a demo to run:\n" +
                "1. Vehicle Demo\n" +
                "2. Car Demo\n" +
                "3. Sort Vehicles Demo\n" +
                "4. Exit\n" +
                "Enter the number of your choice: "
            );

            switch (choice) {
                case "1":
                    await demoVehicle();
                    break;
                case "2":
                    await demoCar();
                    break;
                case "3":
                    await demoSortVehicles();
                    break;
                case "4":
                    exit = true;
                    console.log("Exiting the menu. Goodbye!");
                    break;
                default:
                    console.log("Invalid choice. Please enter a number between 1 and 4.");
            }
        } catch (error) {
            console.error('Unexpected error in menu:', error);
        }
    }
}

// Start the menu
menu();