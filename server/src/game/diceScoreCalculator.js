import { diceCategoryChecker } from "./diceCategoryChecker"

class DiceScoreCalculator {
    getScoreForCategory(dice, category) {
        return this[category](dice)
    }

    ones(dice) {

    }

    twos(dice) {

    }

    threes(dice) {

    }

    fours(dice) {

    }

    fives(dice) {

    }

    sixes(dice) {

    }

    threeOfAKind(dice) {

    }

    fourOfAKind(dice) {

    }

    fullHouse(dice) {

    }

    lowStraight(dice) {

    }

    highStraight(dice) {

    }

    yahtzee(dice) {

    }

    chance(dice) {
        
    }
}

export const diceScoreCalculator = new DiceScoreCalculator()