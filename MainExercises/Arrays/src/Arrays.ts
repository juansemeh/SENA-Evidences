import * as readline from 'readline';

type Middleware = (input: string, next: (input: string) => void) => void;

class CLI {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    private middlewares: Middleware[] = [];

    use(middleware: Middleware) {
        this.middlewares.push(middleware);
    }

    question(query: string): Promise<string> {
        return new Promise((resolve) => {
            let idx = 0;
            const next = (input: string) => {
                if (idx < this.middlewares.length) {
                    this.middlewares[idx++](input, next);
                } else {
                    resolve(input);
                }
            };
            this.rl.question(query, (answer) => next(answer));
        });
    }

    close() {
        this.rl.close();
    }
}

// Hotel Reservation System
class Hotel {
    private rooms: number[] = [0, 0, 0, 0, 0];

    showStatus() {
        let status = 'Room status:\n';
        for (let i = 0; i < this.rooms.length; i++) {
            status += `Room ${i + 1}: ${this.rooms[i] === 0 ? 'Free' : 'Occupied'}\n`;
        }
        console.log(status);
    }

    reserveRoom(num: number) {
        if (num < 1 || num > 5) {
            console.log('Invalid room number. Use 1-5.');
        } else if (this.rooms[num - 1] === 1) {
            console.log('Room already occupied.');
        } else {
            this.rooms[num - 1] = 1;
            console.log(`Room ${num} successfully reserved.`);
            this.showStatus();
        }
    }

    freeRoom(num: number) {
        if (num < 1 || num > 5) {
            console.log('Invalid room number. Use 1-5.');
        } else if (this.rooms[num - 1] === 0) {
            console.log('Room is already free.');
        } else {
            this.rooms[num - 1] = 0;
            console.log(`Room ${num} successfully freed.`);
            this.showStatus();
        }
    }
}

// ATM System
class ATM {
    private transactions: number[] = [];

    checkBalance() {
        const balance = this.transactions.reduce((acc, curr) => acc + curr, 0);
        console.log(`Current balance: $${balance}`);
    }

    deposit(amount: number) {
        this.transactions.push(amount);
        console.log(`Deposit of $${amount} successful.`);
    }

    withdraw(amount: number) {
        const balance = this.transactions.reduce((acc, curr) => acc + curr, 0);
        if (amount > balance) {
            console.log('Insufficient funds.');
        } else if (amount > 500) {
            console.log('Cannot withdraw more than $500 in a single transaction.');
        } else {
            this.transactions.push(-amount);
            console.log(`Withdrawal of $${amount} successful.`);
        }
    }
}

// Customer Queue System
class CustomerQueue {
    private queue: string[] = [];

    addCustomer(name: string) {
        if (this.queue.length < 7) {
            this.queue.push(name);
            console.log(`${name} has been added to the queue.`);
        } else {
            console.log('The queue is full.');
        }
    }

    serveCustomer() {
        if (this.queue.length > 0) {
            const served = this.queue.shift();
            console.log(`Serving ${served}.`);
        } else {
            console.log('No customers in the queue.');
        }
    }
}

// Vending Machine
class VendingMachine {
    private products: string[] = ['Cookies', 'Soda', 'Gum', 'Chocolate', 'Candies'];
    private quantities: number[] = [5, 5, 5, 5, 5];

    showInventory() {
        let inventory = 'Inventory:\n';
        for (let i = 0; i < this.products.length; i++) {
            inventory += `${this.products[i]}: ${this.quantities[i]} available\n`;
        }
        console.log(inventory);
    }

    processPayment(code: number) {
        if (code < 0 || code >= this.products.length) {
            console.log('Invalid product code.');
            return;
        }
        if (this.quantities[code] > 0) {
            this.quantities[code]--;
            console.log(`You bought ${this.products[code]}.`);
        } else {
            const suggestion = this.products.find((_, idx) => this.quantities[idx] > 0) || 'no product available';
            console.log(`${this.products[code]} is out of stock. We suggest ${suggestion}.`);
        }
    }
}

// Improved Vending Machine
class ImprovedVendingMachine {
    private products: string[] = ['Cookies', 'Soda', 'Gum', 'Chocolate', 'Candies'];
    private quantities: number[] = [5, 5, 5, 5, 5];
    private prices: number[] = [1.5, 2.0, 0.5, 1.0, 0.75];

    showInventory() {
        let inventory = 'Improved Inventory:\n';
        let totalCost = 0;
        for (let i = 0; i < this.products.length; i++) {
            inventory += `${this.products[i]} - ${this.quantities[i]} available - Price: $${this.prices[i]}\n`;
            totalCost += this.prices[i] * this.quantities[i];
        }
        inventory += `\nTotal inventory cost: $${totalCost.toFixed(2)}`;
        console.log(inventory);
    }

    async processPayment(cli: CLI) {
        console.log('Available product codes:');
        this.products.forEach((prod, idx) => {
            console.log(`${idx}: ${prod}`);
        });
        const codeStr = await cli.question('Enter the product code (0-4): ');
        const code = parseInt(codeStr);
        if (isNaN(code) || code < 0 || code >= this.products.length) {
            console.log('Invalid product code.');
            return;
        }
        if (this.quantities[code] > 0) {
            this.quantities[code]--;
            console.log(`You bought ${this.products[code]} for $${this.prices[code]}.`);
        } else {
            const suggestion = this.products.find((_, idx) => this.quantities[idx] > 0) || 'no product available';
            console.log(`${this.products[code]} is out of stock. We suggest ${suggestion}.`);
        }
        const again = await cli.question('Do you want to buy another product? (y/n): ');
        if (again.trim().toLowerCase() === 'y') {
            await this.processPayment(cli);
        }
    }
}

// Main Menu
async function mainMenu() {
    const cli = new CLI();

    // Example middleware: logs every input
    cli.use((input, next) => {
        console.log(`[Middleware] User input: ${input}`);
        next(input);
    });

    const hotel = new Hotel();
    const atm = new ATM();
    const queue = new CustomerQueue();
    const vending = new VendingMachine();
    const improvedVending = new ImprovedVendingMachine();

    while (true) {
        console.log('\nSelect an application:');
        console.log('1. Hotel Reservation System');
        console.log('2. ATM');
        console.log('3. Customer Queue');
        console.log('4. Vending Machine');
        console.log('5. Improved Vending Machine');
        console.log('6. Exit');
        const option = await cli.question('Choose an option: ');

        if (option === '1') {
            while (true) {
                console.log('\nHotel Menu:\n1. Show status\n2. Reserve\n3. Free\n4. Exit');
                const op = await cli.question('Choose an option: ');
                if (op === '1') hotel.showStatus();
                else if (op === '2') {
                    const num = parseInt(await cli.question('Enter room number (1-5): '));
                    hotel.reserveRoom(num);
                } else if (op === '3') {
                    const num = parseInt(await cli.question('Enter room number (1-5): '));
                    hotel.freeRoom(num);
                } else if (op === '4') break;
                else console.log('Invalid option.');
            }
        } else if (option === '2') {
            while (true) {
                console.log('\nATM Menu:\n1. Check balance\n2. Deposit\n3. Withdraw\n4. Exit');
                const op = await cli.question('Choose an option: ');
                if (op === '1') atm.checkBalance();
                else if (op === '2') {
                    const amt = parseFloat(await cli.question('Enter deposit amount: '));
                    atm.deposit(amt);
                } else if (op === '3') {
                    const amt = parseFloat(await cli.question('Enter withdrawal amount: '));
                    atm.withdraw(amt);
                } else if (op === '4') break;
                else console.log('Invalid option.');
            }
        } else if (option === '3') {
            while (true) {
                console.log('\nQueue Menu:\n1. Add customer\n2. Serve customer\n3. Exit');
                const op = await cli.question('Choose an option: ');
                if (op === '1') {
                    const name = await cli.question('Enter customer name: ');
                    queue.addCustomer(name);
                } else if (op === '2') queue.serveCustomer();
                else if (op === '3') break;
                else console.log('Invalid option.');
            }
        } else if (option === '4') {
            while (true) {
                console.log('\nVending Machine Menu:\n1. Show inventory\n2. Buy product\n3. Exit');
                const op = await cli.question('Choose an option: ');
                if (op === '1') vending.showInventory();
                else if (op === '2') {
                    const code = parseInt(await cli.question('Enter product code (0-4): '));
                    vending.processPayment(code);
                } else if (op === '3') break;
                else console.log('Invalid option.');
            }
        } else if (option === '5') {
            while (true) {
                console.log('\nImproved Vending Machine Menu:\n1. Show improved inventory\n2. Buy improved product\n3. Exit');
                const op = await cli.question('Choose an option: ');
                if (op === '1') improvedVending.showInventory();
                else if (op === '2') await improvedVending.processPayment(cli);
                else if (op === '3') break;
                else console.log('Invalid option.');
            }
        } else if (option === '6') {
            console.log('Exiting...');
            cli.close();
            break;
        } else {
            console.log('Invalid option.');
        }
    }
}

mainMenu();