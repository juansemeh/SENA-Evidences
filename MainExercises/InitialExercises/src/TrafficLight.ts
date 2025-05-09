enum LightState {
    Red = 'red',
    Yellow = 'yellow',
    Green = 'green'
}

export class TrafficLight {
    private state: LightState;
    private isRunning: boolean;
    private intervalId: NodeJS.Timeout | null;

    constructor() {
        this.state = LightState.Red;
        this.isRunning = false;
        this.intervalId = null;
    }

    public start(): void {
        if (this.isRunning) {
            console.log('Traffic light is already running!');
            return;
        }

        this.isRunning = true;
        console.log('Traffic light has started.');
        this.displayCurrentState();
        
        this.intervalId = setInterval(() => {
            this.changeState();
            this.displayCurrentState();
        }, 2000);
    }

    public stop(): void {
        if (!this.isRunning) {
            console.log('Traffic light is already stopped!');
            return;
        }

        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        this.isRunning = false;
        console.log('Traffic light has stopped.');
    }

    private changeState(): void {
        switch (this.state) {
            case LightState.Red:
                this.state = LightState.Yellow;
                break;
            case LightState.Yellow:
                this.state = LightState.Green;
                break;
            case LightState.Green:
                this.state = LightState.Red;
                break;
        }
    }

    private displayCurrentState(): void {
        console.log(`Traffic light is: ${this.state}`);
    }

    public getCurrentState(): LightState {
        return this.state;
    }

    public isActive(): boolean {
        return this.isRunning;
    }
}

// Usage example
async function main() {
    const trafficLight = new TrafficLight();
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (): Promise<string> => {
        return new Promise((resolve) => {
            readline.question('Do you want to activate the traffic light? (yes/no): ', resolve);
        });
    };

    try {
        const answer = (await question()).toLowerCase();
        
        if (answer === 'yes') {
            trafficLight.start();
            
            // Optional: Add a way to stop the traffic light after some time
            setTimeout(() => {
                trafficLight.stop();
                readline.close();
                process.exit(0);
            }, 10000); // Stops after 10 seconds
        } else {
            console.log('Traffic light remains inactive.');
            readline.close();
        }
    } catch (error) {
        console.error('An error occurred:', error);
        readline.close();
    }
}

main().catch(console.error);