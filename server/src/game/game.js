import { Scorecard } from './scorecard.js'
import { possibleScoreCalculator } from './possibleScoreCalculator.js'
import { scoringCategories } from './categories.js'



export class Game {
    constructor(code, players) {
        this.code = code
        this.players = players
        this.currentPlayer = players[this.currentPlayerCounter]
        this.rollsRemaining = 3
        this.currentDice = undefined
        this.diceKept = undefined
        this.scorecards = {}
        this.currentPlayerCounter = 0

        for (const key of players){
            this.scorecards[key] = new Scorecard()
        }
    }

    canKeep() {        
        return this.rollsRemaining < 3 && this.rollsRemaining > 0
    }

    keepDice(diceToKeep) {
        this.diceKept = diceToKeep
    }

    canRoll() {
        return this.rollsRemaining > 0
    }

    rollDice() {
        for (i of this.diceKept){
            for (a of this.currentDice){
                if (this.currentDice.a == this.diceKept.i){
                    delete this.currentDice.a
                    break
                }
            }

            
            
            
            // if (this.currentDice.prototype.includes(i)){
            //     delete this.currentDice[i]
            // }
        }
        const Dice = this.currentDice.length() - this.diceKept.length()
        let DiceNumbers = []
        let i2 = 0
        while (i2 !== Dice){
            DiceNumbers.push(Math.floor(Math.random() * 6) + 1)
            i++
        }    
        
        this.currentDice = DiceNumbers
        
       
        
        // for (const key of players){        
        //     if (this.currentPlayer === key){
        //         if (this.canRoll()){
        //             this.rollsRemaining -= 1
        //             return true
        //         }
        //         else{
        //             return false
        //         }
        //     }
        //     continue
        // }
    }

    canScore() {
        return this.rollsRemaining < 3
    }

    possibleScores() {
        if (!this.canScore()) {
            return null
        }

        return possibleScoreCalculator.allPossibleScores(this.scorecards[this.currentPlayer], this.currentDice)
    }

    scoreInCategory(category) {
        let thisScorecard = this.scorecards[this.currentPlayer]

        const score = this.possibleScores()[category]
        thisScorecard[category] = score

        this.currentPlayerCounter += 1
        if (this.currentPlayerCounter + 1 === this.players.length()){
            this.currentPlayerCounter = 0
        }
    }

    gameIsOver() {
        for (const category of scoringCategories)
            for (const player of this.players) {
                if (this.scorecards[player][category] === null) {
                    return false
                }
            }
        return true
    }

    toJSON() {
        const json = {}

        json.code = this.code
        json.players = this.players
        json.currentPlayer = this.currentPlayer
        json.rollsRemaining = this.rollsRemaining
        json.currentDice = this.currentDice
        json.diceKept = this.diceKept
        json.scorecards = this.scorecards
        json.canKeep = this.canKeep() 
        json.canRoll = this.canRoll()
        json.canScore = this.canScore()
        json.possibleScores = this.possibleScores()
        json.gameIsOver = this.gameIsOver() 
        
        return json
    }
}