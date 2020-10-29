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
        for (const key of players){        
            if (this.currentPlayer === key){
                if (this.rollsRemaining <= 2 && this.rollsRemaining !== 0){
                    return true
                }
                else{
                    return false
                }
            }
            continue            
        }
    }

    keepDice(diceToKeep) {
        this.diceKept = diceToKeep
    }

    canRoll() {
        for (const key of players){        
            if (this.currentPlayer === key){
                let canRoll = true
                if (this.rollsRemaining !== 0){
                    canRoll = true
                }
                else{
                    canRoll = false
                } 
                return canRoll
            }
            continue
        }
    }

    // Roll all dice except the kept dice
    //
    // this.diceKept: [1, 1]
    // this.currentDice: [1, 4, 5, 2, 1]
    //
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
        return (this.rollsRemaining<3) ? true : false
    }

    possibleScores() {
        for (const key of players){        
            if (this.currentPlayer === key){
                if (this.rollsRemaining === 3) {
                    
                    console.log("First roll dice")
                    return null
                }       
                else {      
                    return possibleScoreCalculator.allPossibleScores(this.scorecards[key], this.currentDice)
                }
            }
            continue
        }
        return null
    }

    scoreInCategory(category) {
        /*
            (1) Find the current player
            (2) Get the current player's scorecard
            (3) Find the score the player will get in this category
            (4) Set the category on the scorecard to that score
            (5) Advance the current player
        */

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
            if (this.scorecards[`${this.players[this.players.length()-1]}`].category === null){
                return false
            }
            continue
        return true
        
    }

    toJSON() {
        // const categoryList = [
        //     this.canKeep(),
        //     this.canRoll(),
        //     this.canScore(),
        //     this.possibleScores(),
        //     this.gameIsOver()
        // ]
        const json = {}
        // ...this.scores
        json.canKeep = this.canKeep() 
        json.canRoll = this.canRoll()
        json.canScore = this.canScore()
        json.possibleScores = this.possibleScores()
        json.gameIsOver = this.gameIsOver() 
        
        return json
    }
}