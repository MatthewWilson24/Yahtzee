class DiceCategoryChecker {
    countDiceFrequency(dice) {
        let counts = [0, 0, 0, 0, 0, 0]
        for (let die of dice) {
            counts[die - 1] += 1
        }
        return counts
    }

    // Filters out duplicates, sorts and returns array of differences between adjacent elements
    calculateDifferences(dice) {
        dice = [...new Set(dice)]
        dice.sort()
        let differences = []
        for (let i = 0; i < dice.length - 1; i += 1) {
            differences.push(dice[i + 1] - dice[i])
        }
        return differences
    }

    isThreeOfAKind(dice) {
        return Math.max(...this.countDiceFrequency(dice)) >= 3
    }

    isFourOfAKind(dice) {
        return Math.max(...this.countDiceFrequency(dice)) >= 4
    }

    isFullHouse(dice) {
        let values = this.countDiceFrequency(dice)
        return (values.includes(3) && values.includes(2)) || values.includes(5)
    }

    isLowStraight(dice) {
        let differences = this.calculateDifferences(dice)

        // Check if [1, 1, 1] is a subarray of differences
        return [1, 1, 1].every(
            ((i) => (v) => (i = differences.indexOf(v, i) + 1))(0)
        )
    }

    isHighStraight(dice) {
        let differences = this.calculateDifferences(dice)
        return (
            differences.length === 4 && differences.every((diff) => diff == 1)
        )
    }

    isYahtzee(dice) {
        return Math.max(...this.countDiceFrequency(dice)) >= 5
    }
}

export const diceCategoryChecker = new DiceCategoryChecker()
