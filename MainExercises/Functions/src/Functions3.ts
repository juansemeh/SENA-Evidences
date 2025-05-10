import * as readline from 'readline';

// Configure readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input
const question = (prompt: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
};

// Function to clear console
const clearConsole = (): void => {
    console.clear();
};

// Ternary Operations
function checkCoffeeWithMilk(): void {
    const coffee = "Milk";
    console.log(coffee === "Milk" ? "It's coffee with milk" : "It's not coffee with milk");
}

function checkCoffeeTemperature(): void {
    const coffeeTemperature = 40;
    console.log(coffeeTemperature >= 30 ? "The coffee is hot" : "The coffee is cold");
}

function checkCoffeeCream(): void {
    const hasCream = true;
    const creamType = "Whiskey";
    const message = hasCream ? `The coffee has ${creamType} cream` : "It has no cream";
    console.log(message);
}

function verifyIdentification(id: number, name: string): void {
    const storedId = 1122518916;
    const storedName = "John Doe";
    console.log(id === storedId && name === storedName ?
        `User identified with ID ${id}, welcome to the system` :
        "The registered ID does not match the given name");
}

function determineCoffeeColor(): void {
    let coffeeColor = "Black";
    console.log(
        coffeeColor === "Light" ? `The coffee is ${coffeeColor}, it will probably taste sweet` :
        coffeeColor === "Medium" ? `The coffee is ${coffeeColor}, it will probably taste mild` :
        coffeeColor === "Black" ? `The coffee is ${coffeeColor}, it will probably taste bitter` :
        `This color is ${coffeeColor}, are you sure you're drinking coffee?`
    );
}

// Decision Functions
function checkPHLevel(phLevel: number): void {
    if (phLevel > 14 || phLevel < 0) {
        console.log("Invalid pH level");
    } else if (phLevel > 7) {
        console.log(`This substance is basic, with ${phLevel} degrees on the PH scale`);
    } else if (phLevel < 7) {
        console.log(`This substance is acidic, with ${phLevel} degrees on the PH scale`);
    } else {
        console.log("This substance is neutral");
    }
}

function determinePatientCare(patientCondition: string | null | undefined): void {
    if (!patientCondition) {
        console.log("No condition provided");
        return;
    }
    if (patientCondition === "Simple pain") {
        console.log(`The patient will be treated in a general consultation, no specialized care is needed for ${patientCondition}`);
    } else if (patientCondition === "Prolonged unconsciousness") {
        console.log(`The patient will be treated by paramedics due to ${patientCondition}`);
    } else if (patientCondition === "Severe injuries") {
        console.log(`The patient will be treated by paramedics and then in the emergency room due to ${patientCondition}`);
    } else {
        console.log("The patient shows no condition that needs to be reviewed");
    }
}

function verifyAnimalRegistration(animalId: number, animalName: string): void {
    const storedId = 1234567890;
    const storedName = "Max";
    console.log(animalId === storedId && animalName === storedName ?
        `Animal ${animalName} with ID ${animalId} exists in the database` :
        `Animal ${animalName} with ID ${animalId} does not exist in the database`);
}

function determineCoffeeType(hasMilk: boolean, isBlack: boolean, hasCream: boolean, hasIce: boolean): void {
    if (hasMilk) {
        console.log("The coffee has milk");
    } else if (isBlack) {
        console.log("The coffee is black");
    } else if (hasCream) {
        console.log("The coffee has cream");
    } else if (hasIce) {
        console.log("The coffee has ice");
    } else {
        console.log("The coffee doesn't have any of these options");
    }
}

function checkDeviceVoltage(isOn: boolean, voltage: number): void {
    if (!isOn) {
        console.log("The device is off");
        return;
    }
    if (voltage >= 500) {
        console.log(`The device has too much voltage (${voltage}), which seems excessive`);
    } else if (voltage >= 220) {
        console.log(`The device is on and functioning with sufficient voltage (${voltage})`);
    } else if (voltage > 0) {
        console.log(`The device is on but not functioning with insufficient voltage (${voltage})`);
    } else {
        console.log("The device has no voltage");
    }
}

function determineDrinkFlavor(drink: string, flavor: string): void {
    console.log(`The ${drink} has a ${flavor} flavor`);
}

async function showTernaryMenu(): Promise<void> {
    let option: string = '';
    
    while (option !== "6") {
        clearConsole();
        console.log(`
=== TERNARY OPERATIONS MENU ===
1. Coffee with milk
2. Coffee temperature
3. Coffee cream
4. ID verification
5. Coffee color
6. Return to main menu
`);

        try {
            option = await question('Select an option: ');

            switch(option) {
                case "1": checkCoffeeWithMilk(); break;
                case "2": checkCoffeeTemperature(); break;
                case "3": checkCoffeeCream(); break;
                case "4": {
                    const id = Number(await question("Enter your ID: "));
                    const name = await question("Enter your name: ");
                    if (isNaN(id)) {
                        console.log("Invalid ID. Please enter a valid number.");
                    } else {
                        verifyIdentification(id, name);
                    }
                    break;
                }
                case "5": determineCoffeeColor(); break;
                case "6": console.log("Returning to main menu..."); break;
                default: console.log("Invalid option");
            }

            if (option !== "6") {
                await question("\nPress Enter to continue...");
            }
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            await question("\nPress Enter to continue...");
        }
    }
}

async function showDecisionMenu(): Promise<void> {
    let option: string = '';
    
    while (option !== "7") {
        clearConsole();
        console.log(`
=== DECISION MAKING MENU ===
1. Check PH level
2. Determine patient care
3. Verify animal registration
4. Determine coffee type
5. Check device voltage
6. Determine drink flavor
7. Return to main menu
`);

        try {
            option = await question('Select an option: ');

            switch(option) {
                case "1": {
                    const phLevel = Number(await question("Enter PH level: "));
                    if (isNaN(phLevel)) throw new Error("Invalid input: Please enter a valid number");
                    checkPHLevel(phLevel);
                    break;
                }
                case "2": {
                    const condition = await question("Enter patient condition: ");
                    determinePatientCare(condition);
                    break;
                }
                case "3": {
                    const animalId = Number(await question("Enter animal ID: "));
                    const animalName = await question("Enter animal name: ");
                    if (isNaN(animalId)) {
                        console.log("Invalid animal ID. Please enter a valid number.");
                    } else {
                        verifyAnimalRegistration(animalId, animalName);
                    }
                    break;
                }
                case "4": {
                    const hasMilk = (await question("Does it have milk? (y/n): ")).toLowerCase() === 'y';
                    const isBlack = (await question("Is it black? (y/n): ")).toLowerCase() === 'y';
                    const hasCream = (await question("Does it have cream? (y/n): ")).toLowerCase() === 'y';
                    const hasIce = (await question("Does it have ice? (y/n): ")).toLowerCase() === 'y';
                    determineCoffeeType(hasMilk, isBlack, hasCream, hasIce);
                    break;
                }
                case "5": {
                    const isOn = (await question("Is the device on? (y/n): ")).toLowerCase() === 'y';
                    const voltage = Number(await question("Enter voltage: "));
                    if (isNaN(voltage)) {
                        console.log("Invalid voltage. Please enter a valid number.");
                    } else {
                        checkDeviceVoltage(isOn, voltage);
                    }
                    break;
                }
                case "6": {
                    const drink = await question("Enter drink type: ");
                    const flavor = await question("Enter flavor: ");
                    determineDrinkFlavor(drink, flavor);
                    break;
                }
                case "7": console.log("Returning to main menu..."); break;
                default: console.log("Invalid option");
            }

            if (option !== "7") {
                await question("\nPress Enter to continue...");
            }
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            await question("\nPress Enter to continue...");
        }
    }
}

async function mainMenu(): Promise<void> {
    let option: string = '';
    
    while (option !== "3") {
        clearConsole();
        console.log(`
=== MAIN MENU ===
1. Ternary operations
2. Decision making
3. Exit
`);

        try {
            option = await question('Select an option: ');

            switch(option) {
                case "1": await showTernaryMenu(); break;
                case "2": await showDecisionMenu(); break;
                case "3": console.log("Exiting program..."); break;
                default: console.log("Invalid option");
            }
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            await question("\nPress Enter to continue...");
        }
    }
    
    rl.close();
}

// Start the program
mainMenu().catch(console.error);