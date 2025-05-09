import * as readline from 'readline';

// Function to create a readline interface
function createReadlineInterface(): readline.Interface {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

// Function to get user input with a prompt
async function getUserInput(prompt: string): Promise<string> {
    const rl = createReadlineInterface();
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Function to get a number input with validation
async function getNumberInput(prompt: string): Promise<number> {
    while (true) {
        const input = await getUserInput(prompt);
        const num = Number(input);
        if (!isNaN(num)) {
            return num;
        }
        console.log("Invalid input. Please enter a valid number.");
    }
}

// Function to get a boolean input (yes/no)
async function getBooleanInput(prompt: string): Promise<boolean> {
    while (true) {
        const input = await getUserInput(`${prompt} (yes/no): `);
        const lowerInput = input.toLowerCase();
        if (lowerInput === 'yes' || lowerInput === 'y') {
            return true;
        } else if (lowerInput === 'no' || lowerInput === 'n') {
            return false;
        }
        console.log("Invalid input. Please enter 'yes' or 'no'.");
    }
}

// Exercise 1: Coffee with milk check
function checkCoffeeWithMilk(coffeeType: string): void {
    coffeeType === "Milk" ? 
        console.log("It's coffee with milk") : 
        console.log("It's not coffee with milk");
}

// Exercise 2: Coffee temperature check
function checkCoffeeTemperature(temperature: number): void {
    temperature >= 30 ? 
        console.log("The coffee is hot") : 
        console.log("The coffee is cold");
}

// Exercise 3: Coffee cream check
function checkCoffeeCream(hasCream: boolean, creamType: string): void {
    const message = hasCream === true ? 
        "The coffee has a cream of " + creamType : 
        "It doesn't have cream";
    console.log(message);
}

// Exercise 4: ID verification
function verifyID(id: number, name: string): void {
    id === 1122518916 && name === "Juan Sebastián Uribe Lesmes" ? 
        console.log("User identified with id " + id + ", welcome to the system") : 
        console.log("It seems the registered id doesn't match the given name.");
}

// Exercise 5: Coffee color check
function checkCoffeeColor(color: string): void {
    color === "Painted" ? 
        console.log("The coffee color is " + color + ", It will probably have a sweet taste.") : 
    color === "Toasted" ? 
        console.log("The coffee color is " + color + ", It will probably have a mild taste.") : 
    color === "Black" ? 
        console.log("The coffee color is " + color + ", It will probably have a bitter taste.") : 
        console.log("That color is " + color + ", Are you sure you're drinking coffee?");
}

// Exercise 6: PH level check
function checkPHLevel(phLevel: number): void {
    if (phLevel >= 8) {
        console.log("This substance is basic, it has " + phLevel + " degrees on the PH scale");
    } else if (phLevel < 7) {
        console.log("This substance is acidic, it has " + phLevel + " degrees on the PH scale");
    } else {
        console.log("This substance is neutral, it has " + phLevel + " degrees on the PH scale");
    }
}

// Exercise 7: Patient condition check
function checkPatientCondition(condition: string): void {
    if (condition === "Simple pain") {
        console.log("The patient will be attended in a general consultation, does not require specialized attention for being a " + condition);
    } else if (condition === "Prolonged loss of consciousness") {
        console.log("The patient will be attended by paramedics and then be examined due to their " + condition);
    } else if (condition === "Serious injuries") {
        console.log("The patient will be attended by paramedics and then be treated in the emergency room due to their " + condition);
    } else {
        console.log("The patient does not show any condition that needs to be examined");
    }
}

// Exercise 8: Animal database check
function checkAnimalDatabase(animalId: number, animalName: string): void {
    const animalIdDb = 1234567890;
    const animalNameDb = "Max";
    
    if (animalIdDb === animalId && animalNameDb === animalName) {
        console.log("The animal " + animalName + " with id " + animalId + " exists in the database records.");
    } else {
        console.log("The animal " + animalName + " with id " + animalId + " does not exist in the database records");
    }
}

// Exercise 9: Coffee type check
function checkCoffeeType(): void {
    const coffeeWithMilk = true;
    const blackCoffee = false;
    const coffeeWithCream = false;
    const coffeeWithIce = false;
    
    if (coffeeWithMilk) {
        console.log("The coffee has milk");
    } else if (blackCoffee) {
        console.log("The coffee is black");
    } else if (coffeeWithCream) {
        console.log("The coffee has cream");
    } else if (coffeeWithIce) {
        console.log("The coffee has ice");
    } else {
        console.log("The coffee doesn't have any of the previous options");
    }
}

// Exercise 10: Device voltage check
function checkDeviceVoltage(isOn: boolean, voltage: number): void {
    if (isOn) {    
        if (voltage >= 500) {
            console.log("The device has too much voltage, it has a voltage of " + voltage + " Energy that seems to be excessive");
        } else if (voltage >= 220) {
            console.log("The device is turned on and is working with a voltage of " + voltage + " Energy that seems to be sufficient");
        } else if (voltage > 0) {
            console.log("The device is turned on but is not working with a voltage of " + voltage + " Energy that seems to be insufficient");
        } else {
            console.log("The device does not have voltage");
        }
    } else {
        console.log("The device is not turned on");
    }
}

// Exercise 11: Drink flavor check
function checkDrinkFlavor(drinkType: string): void {
    let flavor = "";
    
    if (drinkType === "Black Coffee") {
        flavor = "Bitter";
    } else if (drinkType === "Tea") {
        flavor = "Mild";
    } else if (drinkType === "Hot Chocolate") {
        flavor = "Sweet";
    } else {
        flavor = "Unknown";
    }
    
    console.log("The flavor of the " + drinkType + " is " + flavor);
}

// Interactive menu for Exercise 1
async function runExercise1(): Promise<void> {
    console.log("\n# Exercise 1: Coffee with Milk Check ---------------------------");
    const coffeeType = await getUserInput("Enter coffee type (Milk or other): ");
    checkCoffeeWithMilk(coffeeType);
}

// Interactive menu for Exercise 2
async function runExercise2(): Promise<void> {
    console.log("\n# Exercise 2: Coffee Temperature Check ---------------------------");
    const temperature = await getNumberInput("Enter coffee temperature: ");
    checkCoffeeTemperature(temperature);
}

// Interactive menu for Exercise 3
async function runExercise3(): Promise<void> {
    console.log("\n# Exercise 3: Coffee Cream Check ---------------------------");
    const hasCream = await getBooleanInput("Does the coffee have cream?");
    let creamType = "";
    if (hasCream) {
        creamType = await getUserInput("Enter cream type: ");
    }
    checkCoffeeCream(hasCream, creamType);
}

// Interactive menu for Exercise 4
async function runExercise4(): Promise<void> {
    console.log("\n# Exercise 4: ID Verification ---------------------------");
    const id = await getNumberInput("Enter ID number: ");
    const name = await getUserInput("Enter full name: ");
    verifyID(id, name);
}

// Interactive menu for Exercise 5
async function runExercise5(): Promise<void> {
    console.log("\n# Exercise 5: Coffee Color Check ---------------------------");
    console.log("Available colors: Painted, Toasted, Black, or other");
    const color = await getUserInput("Enter coffee color: ");
    checkCoffeeColor(color);
}

// Interactive menu for Exercise 6
async function runExercise6(): Promise<void> {
    console.log("\n# Exercise 6: PH Level Check ---------------------------");
    const phLevel = await getNumberInput("Enter PH level (0-14): ");
    checkPHLevel(phLevel);
}

// Interactive menu for Exercise 7
async function runExercise7(): Promise<void> {
    console.log("\n# Exercise 7: Patient Condition Check ---------------------------");
    console.log("Available conditions: Simple pain, Prolonged loss of consciousness, Serious injuries, or other");
    const condition = await getUserInput("Enter patient condition: ");
    checkPatientCondition(condition);
}

// Interactive menu for Exercise 8
async function runExercise8(): Promise<void> {
    console.log("\n# Exercise 8: Animal Database Check ---------------------------");
    console.log("Hint: The database contains an animal with ID 1234567890 and name 'Max'");
    const animalId = await getNumberInput("Enter animal ID: ");
    const animalName = await getUserInput("Enter animal name: ");
    checkAnimalDatabase(animalId, animalName);
}

// Interactive menu for Exercise 9
async function runExercise9(): Promise<void> {
    console.log("\n# Exercise 9: Coffee Type Check ---------------------------");
    console.log("This is a demonstration of if-else statements with predefined values");
    checkCoffeeType();
    console.log("\nNote: This exercise uses predefined values and doesn't take user input");
}

// Interactive menu for Exercise 10
async function runExercise10(): Promise<void> {
    console.log("\n# Exercise 10: Device Voltage Check ---------------------------");
    const isOn = await getBooleanInput("Is the device turned on?");
    let voltage = 0;
    if (isOn) {
        voltage = await getNumberInput("Enter device voltage: ");
    }
    checkDeviceVoltage(isOn, voltage);
}

// Interactive menu for Exercise 11
async function runExercise11(): Promise<void> {
    console.log("\n# Exercise 11: Drink Flavor Check ---------------------------");
    console.log("Available drinks: Black Coffee, Tea, Hot Chocolate, or other");
    const drinkType = await getUserInput("Enter drink type: ");
    checkDrinkFlavor(drinkType);
}

// Main menu function
async function showMainMenu(): Promise<void> {
    while (true) {
        console.log("\n========== TERNARY & CONDITIONAL EXERCISES MENU ==========");
        console.log("Ternary Operator Exercises:");
        console.log("1. Coffee with Milk Check");
        console.log("2. Coffee Temperature Check");
        console.log("3. Coffee Cream Check");
        console.log("4. ID Verification");
        console.log("5. Coffee Color Check");
        console.log("\nConditional Exercises:");
        console.log("6. PH Level Check");
        console.log("7. Patient Condition Check");
        console.log("8. Animal Database Check");
        console.log("9. Coffee Type Check");
        console.log("10. Device Voltage Check");
        console.log("11. Drink Flavor Check");
        console.log("0. Exit");
        console.log("=============================================");
        
        const choice = await getNumberInput("Enter your choice (0-11): ");
        
        if (choice === 0) {
            console.log("Exiting program. Goodbye!");
            break;
        }
        
        switch (choice) {
            case 1:
                await runExercise1();
                break;
            case 2:
                await runExercise2();
                break;
            case 3:
                await runExercise3();
                break;
            case 4:
                await runExercise4();
                break;
            case 5:
                await runExercise5();
                break;
            case 6:
                await runExercise6();
                break;
            case 7:
                await runExercise7();
                break;
            case 8:
                await runExercise8();
                break;
            case 9:
                await runExercise9();
                break;
            case 10:
                await runExercise10();
                break;
            case 11:
                await runExercise11();
                break;
            default:
                console.log("Invalid choice. Please enter a number between 0 and 11.");
        }
        
        console.log("\nPress Enter to continue...");
        await getUserInput("");
    }
}

// Main function to run the menu
async function main(): Promise<void> {
    console.log("Welcome to the Ternary & Conditional Exercises Program!");
    await showMainMenu();
}

// Run the main function
main().catch(error => {
    console.error("An error occurred:", error);
});