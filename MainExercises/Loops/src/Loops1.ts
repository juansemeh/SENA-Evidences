import * as readline from 'readline';

// Interface for menu options
interface MenuOption {
    id: number;
    description: string;
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu options
const menuOptions: MenuOption[] = [
    { id: 1, description: "Calculate Salary" },
    { id: 2, description: "Check if a number is even or odd" },
    { id: 3, description: "Calculate washing machine rental cost" },
    { id: 4, description: "Check if a given number is even or odd" },
    { id: 5, description: "Calculate academic performance" },
    { id: 6, description: "Find the largest number among three" },
    { id: 7, description: "Calculate economic aid" },
    { id: 8, description: "Calculate gym membership cost" },
    { id: 9, description: "Verify if a triangle is valid" },
    { id: 10, description: "Calculate printing cost" },
    { id: 11, description: "Computer diagnosis" },
    { id: 12, description: "Verify if a car is defective" },
    { id: 13, description: "Calculate cell phone operator cost" },
    { id: 14, description: "Calculate sandwich cost" },
    { id: 15, description: "Exit" }
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
const displayMenu = (): void => {
    console.log("\n=== Exercise Menu ===");
    menuOptions.forEach(option => {
        console.log(`${option.id}. ${option.description}`);
    });
    console.log("===================\n");
};

// Exercise functions
const calculateSalary = async (): Promise<void> => {
    try {
        const name = await getUserInput("Enter employee name: ");
        const hours = parseInt(await getUserInput("Enter worked hours: "));

        if (isNaN(hours) || hours < 0) {
            throw new Error("Invalid hours input");
        }

        const salary = hours <= 10 ? hours * 30000 : hours * 33000;
        console.log(`Mr/Ms ${name}, for ${hours} hours worked, your salary is $${salary}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const checkEvenOdd = async (): Promise<void> => {
    try {
        const number = parseInt(await getUserInput("Enter a number: "));
        
        if (isNaN(number)) {
            throw new Error("Invalid number input");
        }

        console.log(`${number} is ${number % 2 === 0 ? 'even' : 'odd'}.`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculateWashingMachineRental = async (): Promise<void> => {
    try {
        const type = parseInt(await getUserInput("Enter washing machine type (1 or 2): "));
        const quantity = parseInt(await getUserInput("Enter quantity: "));
        const hours = parseInt(await getUserInput("Enter rental hours: "));

        if ([type, quantity, hours].some(val => isNaN(val) || val < 0)) {
            throw new Error("Invalid input values");
        }

        const basePrice = type === 1 ? 4000 : 3000;
        let total = quantity * hours * basePrice;
        
        if (quantity > 3) {
            total *= 0.97; // 3% discount
        }

        console.log(`Total cost for renting ${quantity} type ${type} washing machines for ${hours} hours: $${total}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculateAcademicPerformance = async (): Promise<void> => {
    try {
        const subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'];
        const grades: number[] = [];

        for (const subject of subjects) {
            const grade = parseInt(await getUserInput(`Enter grade for ${subject} (0-10): `));
            if (isNaN(grade) || grade < 0 || grade > 10) {
                throw new Error(`Invalid grade for ${subject}`);
            }
            grades.push(grade);
        }

        const percentage = (grades.reduce((a, b) => a + b, 0) / 50) * 100;
        let rating: string;

        if (percentage <= 59.9) {
            rating = "Poor";
        } else if (percentage <= 80) {
            rating = "Good";
        } else {
            rating = "Excellent";
        }

        console.log(`Your percentage is ${percentage.toFixed(1)}% and your rating is ${rating}.`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const findLargestNumber = async (): Promise<void> => {
    try {
        const numbers: number[] = [];
        for (let i = 1; i <= 3; i++) {
            const num = parseInt(await getUserInput(`Enter number ${i}: `));
            if (isNaN(num)) {
                throw new Error(`Invalid input for number ${i}`);
            }
            numbers.push(num);
        }

        const largest = Math.max(...numbers);
        console.log(`The largest number is ${largest}.`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculateEconomicAid = async (): Promise<void> => {
    try {
        const gender = await getUserInput("Enter gender (male/female): ");
        const age = parseInt(await getUserInput("Enter age: "));

        if (isNaN(age) || age < 0) {
            throw new Error("Invalid age");
        }

        let aid: number;
        if (gender.toLowerCase() === "female") {
            if (age > 50) {
                aid = 120000;
            } else if (age >= 30) {
                aid = 100000;
            } else {
                aid = 0;
            }
        } else {
            aid = 40000;
        }

        console.log(`Monthly aid amount: $${aid}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculateGymCost = async (): Promise<void> => {
    try {
        const days = parseInt(await getUserInput("Enter number of days (15, 30, or 90): "));
        
        if (![15, 30, 90].includes(days)) {
            throw new Error("Invalid number of days. Only 15, 30, or 90 days are allowed.");
        }

        let cost: number;
        switch (days) {
            case 15: cost = 18000; break;
            case 30: cost = 35000; break;
            case 90: cost = 86000; break;
            default: cost = 0;
        }

        console.log(`Cost for ${days} days: $${cost}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const verifyTriangle = async (): Promise<void> => {
    try {
        const angles: number[] = [];
        for (let i = 1; i <= 3; i++) {
            const angle = parseInt(await getUserInput(`Enter angle ${i}: `));
            if (isNaN(angle) || angle <= 0) {
                throw new Error(`Invalid angle ${i}`);
            }
            angles.push(angle);
        }

        const sum = angles.reduce((a, b) => a + b, 0);
        console.log(sum === 180 ? "The triangle is valid." : "The triangle is not valid.");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculatePrintingCost = async (): Promise<void> => {
    try {
        const copies = parseInt(await getUserInput("Enter number of copies: "));
        
        if (isNaN(copies) || copies < 0) {
            throw new Error("Invalid number of copies");
        }

        let pricePerCopy: number;
        if (copies < 500) {
            pricePerCopy = 120;
        } else if (copies < 750) {
            pricePerCopy = 100;
        } else if (copies < 1000) {
            pricePerCopy = 80;
        } else {
            pricePerCopy = 50;
        }

        const totalCost = copies * pricePerCopy;
        console.log(`Price per copy: $${pricePerCopy}\nTotal cost: $${totalCost}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const computerDiagnosis = async (): Promise<void> => {
    try {
        const beep = (await getUserInput("Is there a beep? (y/n): ")).toLowerCase() === 'y';
        const hdSpins = (await getUserInput("Does the hard drive spin? (y/n): ")).toLowerCase() === 'y';

        if (beep && hdSpins) {
            console.log("Contact technical support.");
        } else if (beep && !hdSpins) {
            console.log("Check drive connections.");
        } else if (!beep && !hdSpins) {
            console.log("Bring computer to repair center.");
        } else {
            console.log("Check speaker connections.");
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const checkCarDefect = async (): Promise<void> => {
    try {
        const model = parseInt(await getUserInput("Enter car model number: "));
        const defectiveModels = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

        if (isNaN(model)) {
            throw new Error("Invalid model number");
        }

        console.log(defectiveModels.includes(model) 
            ? "The car is defective. Take it to warranty service."
            : "The car is not defective.");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculatePhonePlan = async (): Promise<void> => {
    try {
        const operator = await getUserInput("Enter operator (Tigo/Claro/Movistar): ");
        const internationalMinutes = parseInt(await getUserInput("Enter international minutes: "));

        if (isNaN(internationalMinutes) || internationalMinutes < 0) {
            throw new Error("Invalid minutes");
        }

        let fixedCharge: number, minuteRate: number, dataPackage: number;

        switch (operator.toLowerCase()) {
            case "tigo":
                fixedCharge = 45000;
                minuteRate = 200;
                dataPackage = 12000;
                break;
            case "claro":
                fixedCharge = 30000;
                minuteRate = 100;
                dataPackage = 18000;
                break;
            case "movistar":
                fixedCharge = 40000;
                minuteRate = 250;
                dataPackage = 8000;
                break;
            default:
                throw new Error("Invalid operator");
        }

        const total = fixedCharge + (internationalMinutes * minuteRate) + dataPackage;
        console.log(`Total cost with ${operator}: $${total}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

const calculateSandwichCost = async (): Promise<void> => {
    try {
        const size = await getUserInput("Enter size (small/large): ");
        console.log("Available ingredients: bacon, turkey, cheese");
        const ingredients = (await getUserInput("Enter ingredients (comma-separated): ")).toLowerCase().split(',').map(i => i.trim());

        const baseCost = size.toLowerCase() === "small" ? 6000 : 12000;
        let ingredientsCost = 0;

        if (ingredients.includes("bacon")) ingredientsCost += 3000;
        if (ingredients.includes("turkey")) ingredientsCost += 3000;
        if (ingredients.includes("cheese")) ingredientsCost += 2500;

        const total = baseCost + ingredientsCost;
        console.log(`Total sandwich cost: $${total}`);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

// Main program loop
async function main() {
    let option: number = 0;

    while (option !== 15) {
        displayMenu();
        const input = await getUserInput("Choose an option (1-15): ");
        option = parseInt(input);

        switch (option) {
            case 1:
                await calculateSalary();
                break;
            case 2:
            case 4:
                await checkEvenOdd();
                break;
            case 3:
                await calculateWashingMachineRental();
                break;
            case 5:
                await calculateAcademicPerformance();
                break;
            case 6:
                await findLargestNumber();
                break;
            case 7:
                await calculateEconomicAid();
                break;
            case 8:
                await calculateGymCost();
                break;
            case 9:
                await verifyTriangle();
                break;
            case 10:
                await calculatePrintingCost();
                break;
            case 11:
                await computerDiagnosis();
                break;
            case 12:
                await checkCarDefect();
                break;
            case 13:
                await calculatePhonePlan();
                break;
            case 14:
                await calculateSandwichCost();
                break;
            case 15:
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please choose a number between 1 and 15.");
        }
    }
}

// Start the program
main().catch(error => {
    console.error("Program error:", error);
    rl.close();
});