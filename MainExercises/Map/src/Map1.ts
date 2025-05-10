import * as readline from 'readline';

// Middleware for logging function execution
const logMiddleware = (functionName: string): void => {
  console.log(`Executing function: ${functionName}`);
};

// Book codes function
const filterBookCodes = (): void => {
  logMiddleware('filterBookCodes');
  const bookCodes: number[] = [10, 25, 60, 45, 80, 15, 70];
  const filteredCodes: number[] = bookCodes.filter((code) => code > 50);
  console.log('Book codes greater than 50:', filteredCodes);
};

// Online store function
const checkOnlineStore = (): void => {
  logMiddleware('checkOnlineStore');
  const productPrices: number[] = [500, 1200, 300, 1500, 800];
  const hasPriceAboveThreshold: boolean = productPrices.some((price) => price > 1000);
  console.log('Are there products priced above 1000?', hasPriceAboveThreshold);
};

// High prices function
const checkHighPrices = (): void => {
  logMiddleware('checkHighPrices');
  const productPrices: number[] = [500, 1200, 300, 1500, 800];
  const hasHighPrices: boolean = productPrices.some((price) => price > 1000);
  console.log('Are there high-priced products?', hasHighPrices);
};

// Event attendees function
const manageEventAttendees = (): void => {
  logMiddleware('manageEventAttendees');
  const attendees: Map<number, string> = new Map([
    [1, "Ana"],
    [2, "Luis"],
  ]);
  
  const addAttendee = (map: Map<number, string>, id: number, name: string): void => {
    map.set(id, name);
    console.log('Updated attendees list:', Array.from(map.entries()));
  };
  
  addAttendee(attendees, 3, "Sofía");
};

// Access control function
const accessControl = (): void => {
  logMiddleware('accessControl');
  const attendees: Map<number, string> = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"],
  ]);
  
  const verifyAttendee = (map: Map<number, string>, code: number): void => {
    const exists: boolean = map.has(code);
    console.log(`Attendee with code ${code} exists:`, exists);
  };
  
  verifyAttendee(attendees, 102);
  verifyAttendee(attendees, 104);
};

// Sales record function
const salesRecord = (): void => {
  logMiddleware('salesRecord');
  const soldProducts: Set<number> = new Set([
    1001, 1002, 1003
  ]);
  
  const verifyProduct = (code: number): boolean => {
    return soldProducts.has(code);
  };
  
  console.log('Product 1002 was sold:', verifyProduct(1002));
  console.log('Product 1004 was sold:', verifyProduct(1004));
};

// Scores function
const manageScores = (): void => {
  logMiddleware('manageScores');
  const scores: number[] = [85, 92, 78, 95, 88];
  const scoreMap: Map<number, number> = new Map(scores.map((score, index) => [index, score]));
  scoreMap.set(5, 90);
  console.log('Scores map:', Array.from(scoreMap.entries()));
};

// Project management function
const manageProjects = (): void => {
  logMiddleware('manageProjects');
  
  interface Project {
    name: string;
    budget: number;
  }
  
  const projects: Project[] = [
    { name: "Project A", budget: 5000 },
    { name: "Project B", budget: 8000 }
  ];
  
  projects.push({ name: "Project C", budget: 6000 });
  console.log('Projects list:', projects);
};

// Main menu function
const displayMenu = async (): Promise<void> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query: string): Promise<string> => {
    return new Promise((resolve) => {
      rl.question(query, resolve);
    });
  };

  let choice: string;
  do {
    console.log("\n===== MAIN MENU =====");
    console.log("1. Filter book codes greater than 50");
    console.log("2. Check if any product price is above 1000");
    console.log("3. Check for high prices");
    console.log("4. Add attendees to the list");
    console.log("5. Verify if an attendee exists");
    console.log("6. Check if a product was sold");
    console.log("7. Map scores to their indices");
    console.log("8. Manage project list");
    console.log("9. Exit");
    console.log("=====================");
    
    choice = await question("Enter your choice (1-9): ");

    switch (choice) {
      case '1':
        filterBookCodes();
        break;
      case '2':
        checkOnlineStore();
        break;
      case '3':
        checkHighPrices();
        break;
      case '4':
        manageEventAttendees();
        break;
      case '5':
        accessControl();
        break;
      case '6':
        salesRecord();
        break;
      case '7':
        manageScores();
        break;
      case '8':
        manageProjects();
        break;
      case '9':
        console.log("Exiting the program...");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
    
    if (choice !== '9') {
      await question("\nPress Enter to continue...");
    }
  } while (choice !== '9');

  rl.close();
};

// Start the application
displayMenu().catch(error => {
  console.error('An error occurred:', error);
});