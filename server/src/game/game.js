import { Scorecard } from './scorecard.js'
import { possibleScoreCalculator } from './possibleScoreCalculator.js'

export class Game {
    constructor(code, players) {
        this.code = undefined
        this.players = undefined
        this.currentPlayer = undefined
        this.rollsRemaining = undefined
        this.currentDice = undefined
        this.diceKept = undefined
        this.scorecards = undefined
    }

    canKeep() {

    }

    keepDice(diceToKeep) {

    }

    canRoll() {

    }

    rollDice() {

    }

    canScore() {

    }

    possibleScores() {

    }

    scoreInCategory(category) {

    }

    gameIsOver() {

    }

    toJSON() {
        
    }
}