import * as readline from 'readline';

console.log("Starting exception handling...");

/**
 * Exception Handling in TypeScript
 * This file contains examples of exception handling using try, catch, finally, and throw.
 */

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Custom error class for application-specific errors
class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApplicationError";
  }
}

// Function to display the menu
function displayMenu(): void {
  console.log("\n===== EXCEPTION HANDLING MENU =====");
  console.log("1. Basic try/catch example");
  console.log("2. Common errors");
  console.log("3. Custom exceptions");
  console.log("4. Using finally block");
  console.log("0. Exit");
  console.log("==================================\n");
}

// Function to handle basic try/catch example
function basicExample(): void {
  try {
    // Code that might generate an error
    const result: string = "Successful operation";
    console.log("Result:", result);
  } catch (error) {
    if (error instanceof Error) {
      console.error('An error occurred:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
  }
}

// Function to handle common errors
function commonErrors(): void {
  // Case 1: TypeError
  try {
    const arr: number[] = [1, 2, 3];
    // @ts-ignore - Intentional error for demonstration
    arr.toUppercase();
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error Case 1:', error.name); // TypeError
    }
  }

  // Case 2: SyntaxError
  try {
    // @ts-ignore - Intentional error for demonstration
    eval('if (true) {');
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error Case 2:', error.name); // SyntaxError
    }
  }
}

// Function to throw custom exceptions
function throwCustomException(): void {
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new ApplicationError('Cannot divide by zero');
    }
    return a / b;
  }

  try {
    console.log(divide(10, 0));
  } catch (error) {
    if (error instanceof Error) {
      console.log('Division error:', error.message);
    }
  }
}

// Function to use the finally block
function useFinally(): void {
  interface Connection {
    state: string;
  }

  let connection: Connection | null = null;
  try {
    connection = { state: 'connected' };
    throw new Error('Connection error');
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error:', error.message);
    }
  } finally {
    console.log('Closing connection...');
    connection = null;
  }
}

// Function to get user input
function getUserInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

// Main function to execute the menu
async function execute(): Promise<void> {
  let option: string;
  
  do {
    displayMenu();
    option = await getUserInput("Enter your option: ");
    
    switch (option) {
      case '1':
        console.log("\n--- Basic try/catch Example ---");
        basicExample();
        break;
      case '2':
        console.log("\n--- Common Errors Example ---");
        commonErrors();
        break;
      case '3':
        console.log("\n--- Custom Exceptions Example ---");
        throwCustomException();
        break;
      case '4':
        console.log("\n--- Finally Block Example ---");
        useFinally();
        break;
      case '0':
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid option. Please try again.");
    }
    
    if (option !== '0') {
      await getUserInput("\nPress Enter to continue...");
    }
  } while (option !== '0');
  
  rl.close();
}

// Execute the program
execute().then(() => {
  console.log("Program terminated successfully.");
}).catch((error) => {
  console.error("An unexpected error occurred:", error);
});