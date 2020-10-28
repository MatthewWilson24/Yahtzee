import { diceScoreCalculator } from '../../src/game/diceScoreCalculator.js'
import { allCategories } from '../../src/game/categories.js'
import { diceCategoryChecker } from '../../src/game/diceCategoryChecker.js'

describe.skip("diceScoreCalculator tests", () => {
    describe("ones", () => {
        test("Returns sum of ones", () => {
            const dice = [1, 1, 3, 4, 1]
            expect(diceScoreCalculator.ones(dice)).toEqual(3)
        })
    })

    describe("twos", () => {
        test("Returns sum of twos", () => {
            const dice = [2, 1, 3, 2, 1]
            expect(diceScoreCalculator.twos(dice)).toEqual(4)
        })
    })

    describe("threes", () => {
        test("Returns sum of threes", () => {
            const dice = [3, 3, 3, 3, 3]
            expect(diceScoreCalculator.threes(dice)).toEqual(15)
        })
    })

    describe("fours", () => {
        test("Returns sum of fours", () => {
            const dice = [1, 4, 4, 4, 1]
            expect(diceScoreCalculator.fours(dice)).toEqual(12)
        })
    })

    describe("fives", () => {
        test("Returns sum of fives", () => {
            const dice = [5, 1, 3, 4, 1]
            expect(diceScoreCalculator.fives(dice)).toEqual(5)
        })
    })

    describe("sixes", () => {
        test("Returns sum of sixes", () => {
            const dice = [6, 1, 6, 6, 6]
            expect(diceScoreCalculator.sixes(dice)).toEqual(24)
        })
    })

    describe("threeOfAKind", () => {
        test("If isThreeOfAKind returns true, returns sum of dice", () => {
            jest.spyOn(diceCategoryChecker, 'isThreeOfAKind').mockImplementation((d) => true)
            const dice = [1, 1, 1, 5, 6]
            expect(diceScoreCalculator.threeOfAKind(dice)).toEqual(14)
        })

        test("If isThreeOfAKind returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isThreeOfAKind').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.threeOfAKind(dice)).toEqual(0)
        })
    })

    describe("fourOfAKind", () => {
        test("If isFourOfAKind returns true, returns sum of dice", () => {
            jest.spyOn(diceCategoryChecker, 'isFourOfAKind').mockImplementation((d) => true)
            const dice = [1, 1, 1, 1, 6]
            expect(diceScoreCalculator.fourOfAKind(dice)).toEqual(10)
        })

        test("If isFourOfAKind returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isFourOfAKind').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.fourOfAKind(dice)).toEqual(0)
        })
    })

    describe("fullHouse", () => {
        test("If isFullHouse returns true, returns 25", () => {
            jest.spyOn(diceCategoryChecker, 'isFullHouse').mockImplementation((d) => true)
            const dice = [1, 1, 1, 2, 2]
            expect(diceScoreCalculator.fullHouse(dice)).toEqual(25)
        })

        test("If isFullHouse returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isFullHouse').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.fullHouse(dice)).toEqual(0)
        })
    })

    describe("lowStraight", () => {
        test("If isLowStraight returns true, returns 30", () => {
            jest.spyOn(diceCategoryChecker, 'isLowStraight').mockImplementation((d) => true)
            const dice = [1, 2, 3, 4, 1]
            expect(diceScoreCalculator.lowStraight(dice)).toEqual(30)
        })

        test("If isLowStraight returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isLowStraight').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.lowStraight(dice)).toEqual(0)
        })
    })

    describe("highStraight", () => {
        test("If isHighStraight returns true, returns 40", () => {
            jest.spyOn(diceCategoryChecker, 'isHighStraight').mockImplementation((d) => true)
            const dice = [1, 2, 3, 4, 5]
            expect(diceScoreCalculator.highStraight(dice)).toEqual(40)
        })

        test("If isHighStraight returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isHighStraight').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.highStraight(dice)).toEqual(0)
        })
    })

    describe("yahtzee", () => {
        test("If isYahztee returns true, returns 50", () => {
            jest.spyOn(diceCategoryChecker, 'isYahtzee').mockImplementation((d) => true)
            const dice = [1, 1, 1, 1, 1]
            expect(diceScoreCalculator.yahztee(dice)).toEqual(50)
        })

        test("If isHighStraight returns false, returns zero", () => {
            jest.spyOn(diceCategoryChecker, 'isYahtzee').mockImplementation((d) => false)
            const dice = [1, 2, 1, 5, 6]
            expect(diceScoreCalculator.yahtzee(dice)).toEqual(0)
        })
    })

    describe("chance", () => {
        test("Returns sum of dice", () => {
            const dice = [1, 2, 3, 4, 5]
            expect(diceScoreCalculator.chance(dice)).toEqual(15)
        })
    })

    describe("getScoreForCategory", () => {
        test("Returns a number for all categories", () => {
            allCategories.forEach((c) => {
                const dice = [1, 2, 3, 4, 5]
                expect(diceScoreCalculator.getScoreForCategory(dice, c)).toEqual(expect.any(Number))
            });
        })
    })
})