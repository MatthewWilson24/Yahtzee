import { diceScoreCalculator } from './diceScoreCalculator.js'
import { scoringCategories } from './categories.js'

class PossibleScoreCalculator {
    allPossibleScores(scorecard, dice) {
        const availableCategories = scoringCategories.filter((c) => {
            scorecard[c] !== null
        })

        return availableCategories.reduce((possScores, cat) => {
            possScores[cat] = diceScoreCalculator.getScoreForCategory(dice, cat)
            return acc
        }, {})
    }
}

export const possibleScoreCalculator = new PossibleScoreCalculator()