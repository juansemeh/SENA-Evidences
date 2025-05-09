import * as readline from 'readline';

// Interface for menu options
interface MenuOption {
    id: string;
    description: string;
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu options
const mainMenuOptions: MenuOption[] = [
    { id: "1", description: "Ternary Exercises" },
    { id: "2", description: "Decision Exercises" },
    { id: "3", description: "Exit" }
];

const ternaryMenuOptions: MenuOption[] = [
    { id: "1", description: "Coffee with Milk" },
    { id: "2", description: "Coffee Temperature" },
    { id: "3", description: "Coffee Cream" },
    { id: "4", description: "ID Verification" },
    { id: "5", description: "Coffee Color" },
    { id: "6", description: "Back to Main Menu" }
];

const decisionMenuOptions: MenuOption[] = [
    { id: "1", description: "PH Scale" },
    { id: "2", description: "Patient Care" },
    { id: "3", description: "Animal Registry" },
    { id: "4", description: "Coffee Type" },
    { id: "5", description: "Device Voltage" },
    { id: "6", description: "Drink Flavor" },
    { id: "7", description: "Back to Main Menu" }
];

// Helper function to get user input
const getUserInput = async (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Function to display menu
const displayMenu = (options: MenuOption[]): void => {
    console.log("\n=== Menu ===");
    options.forEach(option => {
        console.log(`${option.id}. ${option.description}`);
    });
    console.log("============\n");
};

// Ternary exercises
const coffeeWithMilk = async (): Promise<void> => {
    try {
        const coffee = await getUserInput("Enter coffee type (Milk/Other): ");
        console.log(coffee === "Milk" ? "It's coffee with milk" : "It's not coffee with milk");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const coffeeTemperature = async (): Promise<void> => {
    try {
        const temperature = parseInt(await getUserInput("Enter coffee temperature: "));
        if (isNaN(temperature)) throw new Error("Invalid temperature");
        console.log(temperature >= 30 ? "Coffee is hot" : "Coffee is cold");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const coffeeCream = async (): Promise<void> => {
    try {
        const hasCream = (await getUserInput("Does coffee have cream? (y/n): ")).toLowerCase() === 'y';
        const creamType = hasCream ? await getUserInput("Enter cream type: ") : "";
        console.log(hasCream ? `Coffee has ${creamType} cream` : "No cream");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const verifyId = async (): Promise<void> => {
    try {
        const id = parseInt(await getUserInput("Enter ID: "));
        const name = await getUserInput("Enter full name: ");
        console.log(
            id === 1122518916 && name === "Juan Sebastian Uribe Lesmes"
                ? `User with ID ${id} welcome to the system`
                : "The registered ID doesn't match the given name"
        );
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const coffeeColor = async (): Promise<void> => {
    try {
        const color = await getUserInput("Enter coffee color (Painted/Roasted/Black/Other): ");
        console.log(
            color === "Painted" ? `Coffee color is ${color}, it probably tastes sweet` :
            color === "Roasted" ? `Coffee color is ${color}, it probably tastes mild` :
            color === "Black" ? `Coffee color is ${color}, it probably tastes bitter` :
            `That color is ${color}, are you sure you're drinking coffee?`
        );
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

// Decision exercises
const phScale = async (): Promise<void> => {
    try {
        const phDegrees = parseInt(await getUserInput("Enter PH degrees: "));
        if (isNaN(phDegrees)) throw new Error("Invalid PH value");
        if (phDegrees >= 8) {
            console.log(`This substance is basic, it has ${phDegrees} degrees in the PH scale`);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const patientCare = async (): Promise<void> => {
    try {
        console.log("Available conditions: Simple pain, Prolonged loss of consciousness, Severe injuries");
        const condition = await getUserInput("Enter patient condition: ");
        
        if (condition === "Simple pain") {
            console.log(`Patient will be attended in general consultation, no specialized care needed for ${condition}`);
        } else if (condition === "Prolonged loss of consciousness") {
            console.log(`Patient will be attended by paramedics due to ${condition}`);
        } else if (condition === "Severe injuries") {
            console.log(`Patient will be attended by paramedics and then emergency room due to ${condition}`);
        } else {
            console.log("Patient shows no condition that needs to be reviewed");
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const animalRegistry = async (): Promise<void> => {
    try {
        const dbAnimalId = "1234567890";
        const dbAnimalName = "Max";
        
        const inputId = await getUserInput("Enter animal ID: ");
        const inputName = await getUserInput("Enter animal name: ");

        if (dbAnimalId === inputId && dbAnimalName === inputName) {
            console.log(`Animal ${inputName} with ID ${inputId} exists in database records`);
        } else {
            console.log(`Animal ${inputName} with ID ${inputId} not found in database`);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const coffeeType = async (): Promise<void> => {
    try {
        const hasMilk = (await getUserInput("Has milk? (y/n): ")).toLowerCase() === 'y';
        const isBlack = (await getUserInput("Is black? (y/n): ")).toLowerCase() === 'y';
        const hasCream = (await getUserInput("Has cream? (y/n): ")).toLowerCase() === 'y';
        const hasIce = (await getUserInput("Has ice? (y/n): ")).toLowerCase() === 'y';

        if (hasMilk) {
            console.log("Coffee has milk");
        } else if (isBlack) {
            console.log("Coffee is black");
        } else if (hasCream) {
            console.log("Coffee has cream");
        } else if (hasIce) {
            console.log("Coffee has ice");
        } else {
            console.log("Coffee doesn't have any of the previous options");
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const deviceVoltage = async (): Promise<void> => {
    try {
        const isOn = (await getUserInput("Is device on? (y/n): ")).toLowerCase() === 'y';
        if (!isOn) {
            console.log("Device is not turned on");
            return;
        }

        const voltage = parseInt(await getUserInput("Enter voltage: "));
        if (isNaN(voltage)) throw new Error("Invalid voltage value");

        if (voltage >= 500) {
            console.log(`Device has too much voltage: ${voltage}V. This appears to be excessive`);
        } else if (voltage >= 220) {
            console.log(`Device is on and working with voltage: ${voltage}V. This appears to be sufficient`);
        } else if (voltage > 0) {
            console.log(`Device is on but not working with voltage: ${voltage}V. This appears to be insufficient`);
        } else {
            console.log("Device has no voltage");
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const drinkFlavor = async (): Promise<void> => {
    try {
        const drink = await getUserInput("Enter drink type (Black Coffee/Other): ");
        const flavor = drink === "Black Coffee" ? "Bitter" : await getUserInput("Enter flavor: ");

        if (drink === "Black Coffee") {
            console.log(`The drink's flavor is ${flavor}`);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

// Handle submenu exercises
async function handleTernaryExercises(): Promise<void> {
    let option = "";
    while (option !== "6") {
        displayMenu(ternaryMenuOptions);
        option = await getUserInput("Choose an option: ");

        switch (option) {
            case "1": await coffeeWithMilk(); break;
            case "2": await coffeeTemperature(); break;
            case "3": await coffeeCream(); break;
            case "4": await verifyId(); break;
            case "5": await coffeeColor(); break;
            case "6": console.log("Returning to main menu..."); break;
            default: console.log("Invalid option");
        }
    }
}

async function handleDecisionExercises(): Promise<void> {
    let option = "";
    while (option !== "7") {
        displayMenu(decisionMenuOptions);
        option = await getUserInput("Choose an option: ");

        switch (option) {
            case "1": await phScale(); break;
            case "2": await patientCare(); break;
            case "3": await animalRegistry(); break;
            case "4": await coffeeType(); break;
            case "5": await deviceVoltage(); break;
            case "6": await drinkFlavor(); break;
            case "7": console.log("Returning to main menu..."); break;
            default: console.log("Invalid option");
        }
    }
}

// Main program loop
async function main() {
    let option = "";
    while (option !== "3") {
        displayMenu(mainMenuOptions);
        option = await getUserInput("Choose an option: ");

        switch (option) {
            case "1":
                await handleTernaryExercises();
                break;
            case "2":
                await handleDecisionExercises();
                break;
            case "3":
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please choose a number between 1 and 3.");
        }
    }
}

// Start the program
main().catch(error => {
    console.error("Program error:", error);
    rl.close();
});