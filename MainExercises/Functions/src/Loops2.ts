import * as readline from 'readline';

// Configure readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function for user input
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

interface SalaryResult {
    name: string;
    hours: number;
    salary: number;
}

function calculateSalary(name: string, hours: number): SalaryResult {
    const salary = hours <= 10 ? hours * 30000 : hours * 33000;
    return { name, hours, salary };
}

function determineEvenOdd(number: number): string {
    return number % 2 === 0 ? 'even' : 'odd';
}

interface WashingMachineCost {
    type: number;
    quantity: number;
    hours: number;
    totalCost: number;
}

function calculateWashingMachineCost(type: number, quantity: number, rentalHours: number): WashingMachineCost {
    const baseCost = type === 1 ? 4000 : 3000;
    let total = quantity * rentalHours * baseCost;
    if (quantity > 3) {
        total *= 0.97; // 3% discount
    }
    return { type, quantity, hours: rentalHours, totalCost: total };
}

interface AcademicPerformance {
    percentage: number;
    rating: 'Poor' | 'Good' | 'Excellent';
}

function calculateAcademicPerformance(
    physics: number,
    chemistry: number,
    biology: number,
    mathematics: number,
    informatics: number
): AcademicPerformance {
    const percentage = ((physics + chemistry + biology + mathematics + informatics) / 50) * 100;
    const rating = percentage <= 59.9 ? "Poor" : percentage <= 80 ? "Good" : "Excellent";
    return { percentage, rating };
}

function findLargestNumber(num1: number, num2: number, num3: number): number {
    return Math.max(num1, num2, num3);
}

interface FinancialAid {
    gender: 'male' | 'female';
    age: number;
    amount: number;
}

function calculateFinancialAid(gender: 'male' | 'female', age: number): FinancialAid {
    const amount = gender === "female" 
        ? (age > 50 ? 120000 : age >= 30 ? 100000 : 0) 
        : 40000;
    return { gender, age, amount };
}

interface GymCost {
    days: number;
    cost: number;
}

function calculateGymCost(days: number): GymCost {
    const cost = days === 15 ? 18000 
               : days === 30 ? 35000 
               : days === 90 ? 86000 
               : 0;
    return { days, cost };
}

function isValidTriangle(angle1: number, angle2: number, angle3: number): boolean {
    return angle1 + angle2 + angle3 === 180;
}

interface PrintingCost {
    copies: number;
    pricePerCopy: number;
    totalCost: number;
}

function calculatePrintingCost(copies: number): PrintingCost {
    const pricePerCopy = copies < 500 ? 120 
                      : copies < 750 ? 100 
                      : copies < 1000 ? 80 
                      : 50;
    return {
        copies,
        pricePerCopy,
        totalCost: copies * pricePerCopy
    };
}

interface ComputerDiagnosis {
    beep: boolean;
    hardDriveSpins: boolean;
    diagnosis: string;
}

function diagnoseComputer(beep: boolean, hardDriveSpins: boolean): ComputerDiagnosis {
    let diagnosis = '';
    if (beep && hardDriveSpins) {
        diagnosis = "Contact technical support.";
    } else if (beep && !hardDriveSpins) {
        diagnosis = "Check drive connections.";
    } else if (!beep && !hardDriveSpins) {
        diagnosis = "Bring computer to central repair.";
    } else {
        diagnosis = "Check speaker connections.";
    }
    return { beep, hardDriveSpins, diagnosis };
}

function isCarDefective(model: number): boolean {
    const defectiveModels = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    return defectiveModels.includes(model);
}

interface OperatorCost {
    operator: string;
    internationalMinutes: number;
    fixedCharge: number;
    minuteRate: number;
    dataPackage: number;
    totalCost: number;
}

function calculateOperatorCost(operator: string, internationalMinutes: number): OperatorCost {
    let fixedCharge: number, minuteRate: number, dataPackage: number;

    switch(operator) {
        case "Tigo":
            fixedCharge = 45000;
            minuteRate = 200;
            dataPackage = 12000;
            break;
        case "Claro":
            fixedCharge = 30000;
            minuteRate = 100;
            dataPackage = 18000;
            break;
        case "Movistar":
            fixedCharge = 40000;
            minuteRate = 250;
            dataPackage = 8000;
            break;
        default:
            throw new Error("Invalid operator");
    }

    const totalCost = fixedCharge + (internationalMinutes * minuteRate) + dataPackage;
    return {
        operator,
        internationalMinutes,
        fixedCharge,
        minuteRate,
        dataPackage,
        totalCost
    };
}


interface SandwichCost {
    size: 'small' | 'large';
    ingredients: string[];
    basePrice: number;
    ingredientsCost: number;
    totalCost: number;
}

function calculateSandwichCost(size: 'small' | 'large', ingredients: string[]): SandwichCost {
    const basePrice = size === "small" ? 6000 : 12000;
    let ingredientsCost = 0;
    
    if (ingredients.includes("bacon")) ingredientsCost += 3000;
    if (ingredients.includes("turkey")) ingredientsCost += 3000;
    if (ingredients.includes("cheese")) ingredientsCost += 2500;
    
    return {
        size,
        ingredients,
        basePrice,
        ingredientsCost,
        totalCost: basePrice + ingredientsCost
    };
}

async function showMenu(): Promise<void> {
    let option: string = '';
    
    do {
        clearConsole();
        console.log(`
=== EXERCISE MENU ===
1. Calculate Salary
2. Determine Even/Odd Number
3. Calculate Washing Machine Rental Cost
4. Check if Number is Even/Odd
5. Calculate Academic Performance
6. Find Largest Number
7. Calculate Financial Aid
8. Calculate Gym Cost
9. Verify Triangle
10. Calculate Printing Cost
11. Diagnose Computer
12. Check Car Defect
13. Calculate Operator Cost
14. Calculate Sandwich Cost
15. Exit
`);

        try {
            option = await question('Select an option: ');

            switch(option) {
                case "1": {
                    const name = await question("Enter employee name: ");
                    const hours = Number(await question("Enter worked hours: "));
                    if (isNaN(hours)) throw new Error("Invalid hours input");
                    const result = calculateSalary(name, hours);
                    console.log(`Mr/Ms ${result.name}, worked ${result.hours} hours and salary is $${result.salary}`);
                    break;
                }
                case "2": {
                    const num = Number(await question("Enter a number: "));
                    if (isNaN(num)) throw new Error("Invalid number input");
                    console.log(`${num} is ${determineEvenOdd(num)}`);
                    break;
                }
                case "3": {
                    const type = Number(await question("Enter washing machine type (1 or 2): "));
                    const quantity = Number(await question("Enter quantity: "));
                    const hours = Number(await question("Enter rental hours: "));
                    if (isNaN(type) || isNaN(quantity) || isNaN(hours)) throw new Error("Invalid input");
                    const result = calculateWashingMachineCost(type, quantity, hours);
                    console.log(`Total cost for ${result.quantity} type ${result.type} machines for ${result.hours} hours: $${result.totalCost}`);
                    break;
                }
                case "4": {
                    const num = Number(await question("Enter a number: "));
                    if (isNaN(num)) throw new Error("Invalid number input");
                    console.log(`${num} is ${determineEvenOdd(num)}`);
                    break;
                }
                case "5": {
                    const physics = Number(await question("Enter physics score: "));
                    const chemistry = Number(await question("Enter chemistry score: "));
                    const biology = Number(await question("Enter biology score: "));
                    const mathematics = Number(await question("Enter mathematics score: "));
                    const informatics = Number(await question("Enter informatics score: "));
                    if ([physics, chemistry, biology, mathematics, informatics].some(isNaN)) throw new Error("Invalid scores");
                    const result = calculateAcademicPerformance(physics, chemistry, biology, mathematics, informatics);
                    console.log(`Academic performance: ${result.percentage}% (${result.rating})`);
                    break;
                }
                case "6": {
                    const num1 = Number(await question("Enter first number: "));
                    const num2 = Number(await question("Enter second number: "));
                    const num3 = Number(await question("Enter third number: "));
                    if ([num1, num2, num3].some(isNaN)) throw new Error("Invalid numbers");
                    const largest = findLargestNumber(num1, num2, num3);
                    console.log(`The largest number is: ${largest}`);
                    break;
                }
                case "7": {
                    const gender = await question("Enter gender (male/female): ") as 'male' | 'female';
                    const age = Number(await question("Enter age: "));
                    if (isNaN(age)) throw new Error("Invalid age input");
                    const result = calculateFinancialAid(gender, age);
                    console.log(`Financial aid for ${result.gender}, age ${result.age}: $${result.amount}`);
                    break;
                }
                case "8": {
                    const days = Number(await question("Enter number of days (15, 30, or 90): "));
                    if (isNaN(days)) throw new Error("Invalid days input");
                    const result = calculateGymCost(days);
                    console.log(`Gym cost for ${result.days} days: $${result.cost}`);
                    break;
                }
                case "9": {
                    const angle1 = Number(await question("Enter first angle: "));
                    const angle2 = Number(await question("Enter second angle: "));
                    const angle3 = Number(await question("Enter third angle: "));
                    if ([angle1, angle2, angle3].some(isNaN)) throw new Error("Invalid angles");
                    const valid = isValidTriangle(angle1, angle2, angle3);
                    console.log(`Triangle with angles ${angle1}, ${angle2}, ${angle3} is ${valid ? 'valid' : 'invalid'}`);
                    break;
                }
                case "10": {
                    const copies = Number(await question("Enter number of copies: "));
                    if (isNaN(copies)) throw new Error("Invalid copies input");
                    const result = calculatePrintingCost(copies);
                    console.log(`Printing cost for ${result.copies} copies: $${result.totalCost}`);
                    break;
                }
                case "11": {
                    const beep = (await question("Is there a beep? (yes/no): ")).toLowerCase() === 'yes';
                    const hdd = (await question("Is hard drive spinning? (yes/no): ")).toLowerCase() === 'yes';
                    const result = diagnoseComputer(beep, hdd);
                    console.log(`Diagnosis: ${result.diagnosis}`);
                    break;
                }
                case "12": {
                    const model = Number(await question("Enter car model number: "));
                    if (isNaN(model)) throw new Error("Invalid model number");
                    const defective = isCarDefective(model);
                    console.log(`Car model ${model} is ${defective ? 'defective' : 'not defective'}`);
                    break;
                }
                case "13": {
                    const operator = await question("Enter operator (Tigo/Claro/Movistar): ");
                    const minutes = Number(await question("Enter international minutes: "));
                    if (isNaN(minutes)) throw new Error("Invalid minutes input");
                    const result = calculateOperatorCost(operator, minutes);
                    console.log(`Total cost with ${result.operator}: $${result.totalCost}`);
                    break;
                }
                case "14": {
                    const size = await question("Enter sandwich size (small/large): ");
                    if (size !== "small" && size !== "large") throw new Error("Invalid size");
                    console.log("Available ingredients: bacon, turkey, cheese");
                    const ingredientsInput = await question("Enter ingredients (comma-separated): ");
                    const ingredients = ingredientsInput.toLowerCase().split(',').map(i => i.trim());
                    const result = calculateSandwichCost(size as 'small' | 'large', ingredients);
                    console.log(`Total sandwich cost: $${result.totalCost}`);
                    break;
                }
                case "15":
                    console.log("Exiting program...");
                    rl.close();
                    break;
                default:
                    console.log("Invalid option. Please select a valid option from the menu.");
            }

            if (option !== "15") {
                await question("\nPress Enter to continue...");
            }
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            await question("\nPress Enter to continue...");
        }
    } while (option !== "15");
}

// Start the program
showMenu().catch(console.error);