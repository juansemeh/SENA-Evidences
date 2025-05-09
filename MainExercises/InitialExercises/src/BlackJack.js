"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline/promises");
var process_1 = require("process");
var BlackjackGame = /** @class */ (function () {
    function BlackjackGame() {
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.rl = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
    }
    BlackjackGame.prototype.createDeck = function () {
        var suits = ['♠', '♣', '♥', '♦'];
        var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        var deck = [];
        for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
            var suit = suits_1[_i];
            for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
                var value = values_1[_a];
                var cardValue = this.getCardValue(value);
                deck.push({ value: cardValue, display: "".concat(value).concat(suit) });
            }
        }
        return this.shuffleDeck(deck);
    };
    BlackjackGame.prototype.getCardValue = function (value) {
        if (value === 'A')
            return 11;
        return ['J', 'Q', 'K'].includes(value) ? 10 : parseInt(value);
    };
    BlackjackGame.prototype.shuffleDeck = function (deck) {
        var _a;
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [deck[j], deck[i]], deck[i] = _a[0], deck[j] = _a[1];
        }
        return deck;
    };
    BlackjackGame.prototype.calculateScore = function (cards) {
        var score = cards.reduce(function (sum, card) { return sum + card.value; }, 0);
        var aces = cards.filter(function (card) { return card.value === 11; }).length;
        // Handle aces if score is over 21
        var aceCount = aces;
        while (score > 21 && aceCount > 0) {
            score -= 10;
            aceCount--;
        }
        return score;
    };
    BlackjackGame.prototype.getPlayerAction = function (playerNum, cards, score) {
        return __awaiter(this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 2];
                        console.log("\nPlayer ".concat(playerNum, "'s cards: ").concat(cards.map(function (c) { return c.display; }).join(', '), " (Score: ").concat(score, ")"));
                        return [4 /*yield*/, this.rl.question('Do you want to hit or stay? ')];
                    case 1:
                        action = (_a.sent()).toLowerCase().trim();
                        if (action === 'hit' || action === 'stay') {
                            return [2 /*return*/, action];
                        }
                        console.log('Please enter either "hit" or "stay"');
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BlackjackGame.prototype.playRound = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deck, p1Cards, p2Cards, p1Score, action, newCard, p2Score, action, newCard, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deck = this.createDeck();
                        p1Cards = [deck.pop(), deck.pop()];
                        p2Cards = [deck.pop(), deck.pop()];
                        console.log('\n=== New Round of Blackjack ===');
                        p1Score = this.calculateScore(p1Cards);
                        _a.label = 1;
                    case 1:
                        if (!(p1Score < 21)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getPlayerAction(1, p1Cards, p1Score)];
                    case 2:
                        action = _a.sent();
                        if (action === 'stay')
                            return [3 /*break*/, 3];
                        newCard = deck.pop();
                        p1Cards.push(newCard);
                        p1Score = this.calculateScore(p1Cards);
                        console.log("Drew: ".concat(newCard.display));
                        return [3 /*break*/, 1];
                    case 3:
                        p2Score = this.calculateScore(p2Cards);
                        _a.label = 4;
                    case 4:
                        if (!(p2Score < 21)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getPlayerAction(2, p2Cards, p2Score)];
                    case 5:
                        action = _a.sent();
                        if (action === 'stay')
                            return [3 /*break*/, 6];
                        newCard = deck.pop();
                        p2Cards.push(newCard);
                        p2Score = this.calculateScore(p2Cards);
                        console.log("Drew: ".concat(newCard.display));
                        return [3 /*break*/, 4];
                    case 6:
                        winner = this.determineWinner(p1Score, p2Score);
                        this.updateScores(winner);
                        this.displayResults(p1Cards, p2Cards, p1Score, p2Score, winner);
                        return [2 /*return*/];
                }
            });
        });
    };
    BlackjackGame.prototype.determineWinner = function (p1Score, p2Score) {
        if (p1Score > 21)
            return 'Player 2';
        if (p2Score > 21)
            return 'Player 1';
        if (p1Score > p2Score)
            return 'Player 1';
        if (p2Score > p1Score)
            return 'Player 2';
        return 'Draw';
    };
    BlackjackGame.prototype.updateScores = function (winner) {
        if (winner === 'Player 1')
            this.p1Wins++;
        if (winner === 'Player 2')
            this.p2Wins++;
    };
    BlackjackGame.prototype.displayResults = function (p1Cards, p2Cards, p1Score, p2Score, winner) {
        console.log('\n=== Final Results ===');
        console.log("Player 1: ".concat(p1Cards.map(function (c) { return c.display; }).join(', '), " (Score: ").concat(p1Score, ")"));
        console.log("Player 2: ".concat(p2Cards.map(function (c) { return c.display; }).join(', '), " (Score: ").concat(p2Score, ")"));
        console.log("".concat(winner === 'Draw' ? "It's a draw!" : "".concat(winner, " wins!")));
        console.log("\nOverall Score - Player 1: ".concat(this.p1Wins, ", Player 2: ").concat(this.p2Wins));
    };
    BlackjackGame.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var playAgain, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 5, 6]);
                        playAgain = true;
                        _a.label = 1;
                    case 1:
                        if (!playAgain) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playRound()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.rl.question('\nPlay another round? (yes/no) ')];
                    case 3:
                        response = (_a.sent()).toLowerCase().trim();
                        playAgain = response === 'yes';
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('\nThanks for playing! Final Score:');
                        console.log("Player 1: ".concat(this.p1Wins, " wins"));
                        console.log("Player 2: ".concat(this.p2Wins, " wins"));
                        return [3 /*break*/, 6];
                    case 5:
                        this.rl.close();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return BlackjackGame;
}());
// Start the game
new BlackjackGame().play().catch(console.error);
