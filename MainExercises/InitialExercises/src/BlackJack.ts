import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

type Card = {
    value: number;
    display: string;
};

export class BlackjackGame {
    private rl: readline.Interface;
    private p1Wins: number = 0;
    private p2Wins: number = 0;

    constructor() {
        this.rl = readline.createInterface({ input, output });
    }

    private createDeck(): Card[] {
        const suits = ['♠', '♣', '♥', '♦'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const deck: Card[] = [];

        for (const suit of suits) {
            for (const value of values) {
                const cardValue = this.getCardValue(value);
                deck.push({ value: cardValue, display: `${value}${suit}` });
            }
        }

        return this.shuffleDeck(deck);
    }

    private getCardValue(value: string): number {
        if (value === 'A') return 11;
        return ['J', 'Q', 'K'].includes(value) ? 10 : parseInt(value);
    }

    private shuffleDeck(deck: Card[]): Card[] {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    private calculateScore(cards: Card[]): number {
        let score = cards.reduce((sum, card) => sum + card.value, 0);
        const aces = cards.filter(card => card.value === 11).length;
        
        // Handle aces if score is over 21
        let aceCount = aces;
        while (score > 21 && aceCount > 0) {
            score -= 10;
            aceCount--;
        }
        
        return score;
    }

    private async getPlayerAction(playerNum: number, cards: Card[], score: number): Promise<string> {
        while (true) {
            console.log(`\nPlayer ${playerNum}'s cards: ${cards.map(c => c.display).join(', ')} (Score: ${score})`);
            const action = (await this.rl.question('Do you want to hit or stay? ')).toLowerCase().trim();
            
            if (action === 'hit' || action === 'stay') {
                return action;
            }
            console.log('Please enter either "hit" or "stay"');
        }
    }

    async playRound(): Promise<void> {
        const deck = this.createDeck();
        const p1Cards: Card[] = [deck.pop()!, deck.pop()!];
        const p2Cards: Card[] = [deck.pop()!, deck.pop()!];

        console.log('\n=== New Round of Blackjack ===');
        
        // Player 1's turn
        let p1Score = this.calculateScore(p1Cards);
        while (p1Score < 21) {
            const action = await this.getPlayerAction(1, p1Cards, p1Score);
            if (action === 'stay') break;
            
            const newCard = deck.pop()!;
            p1Cards.push(newCard);
            p1Score = this.calculateScore(p1Cards);
            console.log(`Drew: ${newCard.display}`);
        }

        // Player 2's turn
        let p2Score = this.calculateScore(p2Cards);
        while (p2Score < 21) {
            const action = await this.getPlayerAction(2, p2Cards, p2Score);
            if (action === 'stay') break;
            
            const newCard = deck.pop()!;
            p2Cards.push(newCard);
            p2Score = this.calculateScore(p2Cards);
            console.log(`Drew: ${newCard.display}`);
        }

        // Determine winner
        const winner = this.determineWinner(p1Score, p2Score);
        this.updateScores(winner);
        this.displayResults(p1Cards, p2Cards, p1Score, p2Score, winner);
    }

    private determineWinner(p1Score: number, p2Score: number): string {
        if (p1Score > 21) return 'Player 2';
        if (p2Score > 21) return 'Player 1';
        if (p1Score > p2Score) return 'Player 1';
        if (p2Score > p1Score) return 'Player 2';
        return 'Draw';
    }

    private updateScores(winner: string): void {
        if (winner === 'Player 1') this.p1Wins++;
        if (winner === 'Player 2') this.p2Wins++;
    }

    private displayResults(p1Cards: Card[], p2Cards: Card[], p1Score: number, p2Score: number, winner: string): void {
        console.log('\n=== Final Results ===');
        console.log(`Player 1: ${p1Cards.map(c => c.display).join(', ')} (Score: ${p1Score})`);
        console.log(`Player 2: ${p2Cards.map(c => c.display).join(', ')} (Score: ${p2Score})`);
        console.log(`${winner === 'Draw' ? "It's a draw!" : `${winner} wins!`}`);
        console.log(`\nOverall Score - Player 1: ${this.p1Wins}, Player 2: ${this.p2Wins}`);
    }

    async play(): Promise<void> {
        try {
            let playAgain = true;
            while (playAgain) {
                await this.playRound();
                const response = (await this.rl.question('\nPlay another round? (yes/no) ')).toLowerCase().trim();
                playAgain = response === 'yes';
            }
            console.log('\nThanks for playing! Final Score:');
            console.log(`Player 1: ${this.p1Wins} wins`);
            console.log(`Player 2: ${this.p2Wins} wins`);
        } finally {
            this.rl.close();
        }
    }
}

// Start the game
new BlackjackGame().play().catch(console.error);