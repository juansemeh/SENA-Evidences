import * as readline from 'readline';

// Function to create a readline interface
function createReadlineInterface(): readline.Interface {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

// Exercise 1: Salary calculation
function calculateSalary(name: string, hours: number): void {
    try {
        if (hours < 0) {
            throw new Error("Hours worked cannot be negative");
        }
        
        let salary: number;
        
        if (hours <= 10) {
            salary = hours * 30000;
        } else {
            salary = hours * 33000;
        }
        
        console.log(`Mr./Ms. ${name}, the number of hours is ${hours} and your salary equals ${salary}`);
    } catch (error) {
        console.error(`Error in salary calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 2: Determine if a number is even or odd
function checkEvenOdd(num: number): void {
    try {
        if (num % 2 === 0) {
            console.log(`${num} is even.`);
        } else {
            console.log(`${num} is odd.`);
        }
    } catch (error) {
        console.error(`Error checking parity: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 3: Calculate washing machine rental cost
function calculateRentalCost(machineType: number, quantity: number, hours: number): void {
    try {
        if (machineType !== 1 && machineType !== 2) {
            throw new Error("Invalid washing machine type. Must be 1 or 2.");
        }
        
        if (quantity <= 0 || hours <= 0) {
            throw new Error("Quantity and hours must be greater than zero.");
        }
        
        const baseCost: number = machineType === 1 ? 4000 : 3000;
        let total: number = quantity * hours * baseCost;
        
        if (quantity > 3) {
            total *= 0.97; // Apply 3% discount
        }
        
        console.log(`Total cost for renting ${quantity} type ${machineType} washing machines for ${hours} hours: $${total}.`);
    } catch (error) {
        console.error(`Error in rental calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 4: Determine if a number is even or odd (with user input)
function checkEvenOddWithInput(): Promise<void> {
    return new Promise((resolve) => {
        const rl = createReadlineInterface();
        
        rl.question("Enter a number: ", (input: string) => {
            try {
                const num: number = Number(input);
                
                if (isNaN(num)) {
                    throw new Error("Invalid input. Please enter a valid number.");
                }
                
                checkEvenOdd(num);
            } catch (error) {
                console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            } finally {
                rl.close();
                resolve();
            }
        });
    });
}

// Exercise 5: Calculate academic performance
function calculateAcademicPerformance(physics: number, chemistry: number, biology: number, math: number, informatics: number): void {
    try {
        // Validate grades are between 0 and 10
        const grades = [physics, chemistry, biology, math, informatics];
        for (const grade of grades) {
            if (grade < 0 || grade > 10) {
                throw new Error("Grades must be between 0 and 10.");
            }
        }
        
        const percentage: number = ((physics + chemistry + biology + math + informatics) / 50) * 100;
        let qualification: string;
        
        if (percentage <= 59.9) {
            qualification = "Poor";
        } else if (percentage <= 80) {
            qualification = "Good";
        } else {
            qualification = "Excellent";
        }
        
        console.log(`Your percentage is ${percentage}% and your qualification is ${qualification}.`);
    } catch (error) {
        console.error(`Error in academic calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 6: Find the largest number among three
function findLargestNumber(num1: number, num2: number, num3: number): void {
    try {
        let largest: number = num1;
        
        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }
        
        console.log(`The largest number is ${largest}.`);
    } catch (error) {
        console.error(`Error finding the largest number: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 7: Calculate economic aid
function calculateEconomicAid(gender: string, age: number): void {
    try {
        if (gender !== "female" && gender !== "male") {
            throw new Error("Gender must be 'female' or 'male'.");
        }
        
        if (age < 0) {
            throw new Error("Age cannot be negative.");
        }
        
        let aid: number;
        
        if (gender === "female") {
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
        
        console.log(`The monthly aid value is: $${aid}.`);
    } catch (error) {
        console.error(`Error in aid calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 8: Calculate gym cost
function calculateGymCost(days: number): void {
    try {
        let cost: number;
        
        if (days === 15) {
            cost = 18000;
        } else if (days === 30) {
            cost = 35000;
        } else if (days === 90) {
            cost = 86000;
        } else {
            cost = 0;
            console.log(`No plan available for ${days} days.`);
            return;
        }
        
        console.log(`The cost for ${days} days is: $${cost}.`);
    } catch (error) {
        console.error(`Error in gym calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 9: Verify if a triangle is valid
function verifyTriangle(angle1: number, angle2: number, angle3: number): void {
    try {
        if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
            throw new Error("Angles must be positive.");
        }
        
        if (angle1 + angle2 + angle3 === 180) {
            console.log("The triangle is valid.");
        } else {
            console.log("The triangle is not valid.");
        }
    } catch (error) {
        console.error(`Error verifying triangle: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 10: Calculate printing cost
function calculatePrintingCost(copies: number): void {
    try {
        if (copies <= 0) {
            throw new Error("Number of copies must be positive.");
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
        
        const totalCost: number = copies * pricePerCopy;
        console.log(`The price per copy is $${pricePerCopy} and the total cost is $${totalCost}.`);
    } catch (error) {
        console.error(`Error in printing calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 11: Computer diagnosis
function diagnoseComputer(beeps: boolean, hardDriveSpins: boolean): void {
    try {
        if (beeps && hardDriveSpins) {
            console.log("Contact technical support.");
        } else if (beeps && !hardDriveSpins) {
            console.log("Check drive connections.");
        } else if (!beeps && !hardDriveSpins) {
            console.log("Bring the computer to the central repair facility.");
        } else {
            console.log("Check speaker connections.");
        }
    } catch (error) {
        console.error(`Error in diagnosis: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 12: Check if a car is defective
function checkCarDefect(model: number): void {
    try {
        const defectiveModels: number[] = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
        
        if (defectiveModels.includes(model)) {
            console.log("The car is defective, take it to warranty service.");
        } else {
            console.log("Your car is not defective.");
        }
    } catch (error) {
        console.error(`Error checking defect: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 13: Calculate cell operator cost
function calculateCellOperatorCost(operator: string, internationalMinutes: number): void {
    try {
        if (operator !== "Tigo" && operator !== "Claro" && operator !== "Movistar") {
            throw new Error("Invalid operator. Must be Tigo, Claro, or Movistar.");
        }
        
        if (internationalMinutes < 0) {
            throw new Error("Minutes cannot be negative.");
        }
        
        let fixedCharge: number;
        let minuteValue: number;
        let dataPackage: number;
        
        if (operator === "Tigo") {
            fixedCharge = 45000;
            minuteValue = 200;
            dataPackage = 12000;
        } else if (operator === "Claro") {
            fixedCharge = 30000;
            minuteValue = 100;
            dataPackage = 18000;
        } else { // Movistar
            fixedCharge = 40000;
            minuteValue = 250;
            dataPackage = 8000;
        }
        
        const totalOperator: number = fixedCharge + (internationalMinutes * minuteValue) + dataPackage;
        console.log(`The total cost with ${operator} is: $${totalOperator}.`);
    } catch (error) {
        console.error(`Error in operator calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Exercise 14: Calculate sandwich cost
function calculateSandwichCost(size: string, ingredients: string[]): void {
    try {
        if (size !== "small" && size !== "large") {
            throw new Error("Invalid sandwich size. Must be 'small' or 'large'.");
        }
        
        const baseSandwichCost: number = size === "small" ? 6000 : 12000;
        let ingredientsCost: number = 0;
        
        if (ingredients.includes("bacon")) {
            ingredientsCost += 3000;
        }
        if (ingredients.includes("turkey")) {
            ingredientsCost += 3000;
        }
        if (ingredients.includes("cheese")) {
            ingredientsCost += 2500;
        }
        
        const totalSandwich: number = baseSandwichCost + ingredientsCost;
        console.log(`The total cost of the sandwich is: $${totalSandwich}.`);
    } catch (error) {
        console.error(`Error in sandwich calculation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
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

// Interactive menu for Exercise 1
async function runExercise1(): Promise<void> {
    console.log("\n# Exercise 1: Salary Calculation ---------------------------");
    const name = await getUserInput("Enter employee name: ");
    const hours = await getNumberInput("Enter hours worked: ");
    calculateSalary(name, hours);
}

// Interactive menu for Exercise 2
async function runExercise2(): Promise<void> {
    console.log("\n# Exercise 2: Even or Odd Number ---------------------------");
    const num = await getNumberInput("Enter a number: ");
    checkEvenOdd(num);
}

// Interactive menu for Exercise 3
async function runExercise3(): Promise<void> {
    console.log("\n# Exercise 3: Washing Machine Rental ---------------------------");
    const machineType = await getNumberInput("Enter machine type (1 or 2): ");
    const quantity = await getNumberInput("Enter quantity: ");
    const hours = await getNumberInput("Enter hours: ");
    calculateRentalCost(machineType, quantity, hours);
}

// Exercise 4 is already interactive
async function runExercise4(): Promise<void> {
    console.log("\n# Exercise 4: Even or Odd Number (Interactive) ---------------------------");
    await checkEvenOddWithInput();
}

// Interactive menu for Exercise 5
async function runExercise5(): Promise<void> {
    console.log("\n# Exercise 5: Academic Performance ---------------------------");
    const physics = await getNumberInput("Enter physics grade (0-10): ");
    const chemistry = await getNumberInput("Enter chemistry grade (0-10): ");
    const biology = await getNumberInput("Enter biology grade (0-10): ");
    const math = await getNumberInput("Enter math grade (0-10): ");
    const informatics = await getNumberInput("Enter informatics grade (0-10): ");
    calculateAcademicPerformance(physics, chemistry, biology, math, informatics);
}

// Interactive menu for Exercise 6
async function runExercise6(): Promise<void> {
    console.log("\n# Exercise 6: Find Largest Number ---------------------------");
    const num1 = await getNumberInput("Enter first number: ");
    const num2 = await getNumberInput("Enter second number: ");
    const num3 = await getNumberInput("Enter third number: ");
    findLargestNumber(num1, num2, num3);
}

// Interactive menu for Exercise 7
async function runExercise7(): Promise<void> {
    console.log("\n# Exercise 7: Economic Aid ---------------------------");
    let gender = "";
    while (gender !== "male" && gender !== "female") {
        gender = (await getUserInput("Enter gender (male/female): ")).toLowerCase();
        if (gender !== "male" && gender !== "female") {
            console.log("Invalid input. Please enter 'male' or 'female'.");
        }
    }
    const age = await getNumberInput("Enter age: ");
    calculateEconomicAid(gender, age);
}

// Interactive menu for Exercise 8
async function runExercise8(): Promise<void> {
    console.log("\n# Exercise 8: Gym Cost ---------------------------");
    console.log("Available plans: 15, 30, or 90 days");
    const days = await getNumberInput("Enter number of days: ");
    calculateGymCost(days);
}

// Interactive menu for Exercise 9
async function runExercise9(): Promise<void> {
    console.log("\n# Exercise 9: Triangle Validation ---------------------------");
    const angle1 = await getNumberInput("Enter first angle: ");
    const angle2 = await getNumberInput("Enter second angle: ");
    const angle3 = await getNumberInput("Enter third angle: ");
    verifyTriangle(angle1, angle2, angle3);
}

// Interactive menu for Exercise 10
async function runExercise10(): Promise<void> {
    console.log("\n# Exercise 10: Printing Cost ---------------------------");
    const copies = await getNumberInput("Enter number of copies: ");
    calculatePrintingCost(copies);
}

// Interactive menu for Exercise 11
async function runExercise11(): Promise<void> {
    console.log("\n# Exercise 11: Computer Diagnosis ---------------------------");
    const beeps = await getBooleanInput("Does the computer beep?");
    const hardDriveSpins = await getBooleanInput("Does the hard drive spin?");
    diagnoseComputer(beeps, hardDriveSpins);
}

// Interactive menu for Exercise 12
async function runExercise12(): Promise<void> {
    console.log("\n# Exercise 12: Car Defect Check ---------------------------");
    const model = await getNumberInput("Enter car model number: ");
    checkCarDefect(model);
}

// Interactive menu for Exercise 13
async function runExercise13(): Promise<void> {
    console.log("\n# Exercise 13: Cell Operator Cost ---------------------------");
    console.log("Available operators: Tigo, Claro, Movistar");
    let operator = "";
    while (operator !== "tigo" && operator !== "claro" && operator !== "movistar") {
        operator = (await getUserInput("Enter operator name: ")).toLowerCase();
        if (operator !== "tigo" && operator !== "claro" && operator !== "movistar") {
            console.log("Invalid input. Please enter 'Tigo', 'Claro', or 'Movistar'.");
        }
    }
    const minutes = await getNumberInput("Enter international minutes: ");
    // Capitalize first letter for display
    const formattedOperator = operator.charAt(0).toUpperCase() + operator.slice(1);
    calculateCellOperatorCost(formattedOperator, minutes);
}

// Interactive menu for Exercise 14
async function runExercise14(): Promise<void> {
    console.log("\n# Exercise 14: Sandwich Cost ---------------------------");
    let size = "";
    while (size !== "small" && size !== "large") {
        size = (await getUserInput("Enter sandwich size (small/large): ")).toLowerCase();
        if (size !== "small" && size !== "large") {
            console.log("Invalid input. Please enter 'small' or 'large'.");
        }
    }
    
    const ingredients: string[] = [];
    
    const wantsBacon = await getBooleanInput("Add bacon?");
    if (wantsBacon) ingredients.push("bacon");
    
    const wantsTurkey = await getBooleanInput("Add turkey?");
    if (wantsTurkey) ingredients.push("turkey");
    
    const wantsCheese = await getBooleanInput("Add cheese?");
    if (wantsCheese) ingredients.push("cheese");
    
    calculateSandwichCost(size, ingredients);
}

// Main menu function
async function showMainMenu(): Promise<void> {
    while (true) {
        console.log("\n========== CONDITIONAL EXERCISES MENU ==========");
        console.log("1. Salary Calculation");
        console.log("2. Even or Odd Number");
        console.log("3. Washing Machine Rental");
        console.log("4. Even or Odd Number (Interactive)");
        console.log("5. Academic Performance");
        console.log("6. Find Largest Number");
        console.log("7. Economic Aid");
        console.log("8. Gym Cost");
        console.log("9. Triangle Validation");
        console.log("10. Printing Cost");
        console.log("11. Computer Diagnosis");
        console.log("12. Car Defect Check");
        console.log("13. Cell Operator Cost");
        console.log("14. Sandwich Cost");
        console.log("0. Exit");
        console.log("=============================================");
        
        const choice = await getNumberInput("Enter your choice (0-14): ");
        
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
            case 12:
                await runExercise12();
                break;
            case 13:
                await runExercise13();
                break;
            case 14:
                await runExercise14();
                break;
            default:
                console.log("Invalid choice. Please enter a number between 0 and 14.");
        }
        
        console.log("\nPress Enter to continue...");
        await getUserInput("");
    }
}

// Main function to run the menu
async function main(): Promise<void> {
    console.log("Welcome to the Conditional Exercises Program!");
    await showMainMenu();
}

// Run the main function
main().catch(error => {
    console.error("An error occurred:", error);
});