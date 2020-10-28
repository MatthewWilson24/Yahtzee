import { scoringCategories } from '../../src/game/categories.js'
import { Scorecard } from '../../src/game/scorecard.js'

describe.skip('Scorecard tests', () => {
    describe('Constructor', () => {
        test('Constructor adds all scoringCategories as keys in scores object', () => {
            const scorecard = new Scorecard()
            expect(Object.keys(scorecard.scores).sort()).toEqual([...scoringCategories].sort())
        })

        test('Constructor sets all values to null in scores object', () => {
            const scorecard = new Scorecard()
            Object.values(scorecard.scores).forEach((v) => {
                expect(v).toBeNull()
            })
        })
    })

    describe('topHalfSum', () => {
        test('topHalfSum is sum of all values for top half categories', () => {
            const scorecard = new Scorecard()
            scorecard.scores = {
                "ones": 4,
                "twos": 8,
                "threes": 12,
                "fours": 16,
                "fives": 20,
                "sixes": 24
            }
            expect(scorecard.topHalfSum()).toBe(84)
        })
    })

    describe('bonus', () => {
        test('bonus is zero if topHalfSum smaller than 63', () => {
            const scorecard = new Scorecard()
            jest.spyOn(scorecard, 'topHalfSum').mockImplementation(() => 62)
            expect(scorecard.bonus()).toBe(0)
        })

        test('bonus is 35 if topHalfSum is 63', () => {
            const scorecard = new Scorecard()
            jest.spyOn(scorecard, 'topHalfSum').mockImplementation(() => 63)
            expect(scorecard.bonus()).toBe(35)
        })

        test('bonus is 35 if topHalfSum is greater than 63', () => {
            const scorecard = new Scorecard()
            jest.spyOn(scorecard, 'topHalfSum').mockImplementation(() => 64)
            expect(scorecard.bonus()).toBe(35)
        })
    })

    describe('topHalfTotal', () => {
        test('topHalfTotal is sum of topHalfSum and bonus', () => {
            const scorecard = new Scorecard()
            jest.spyOn(scorecard, 'topHalfSum').mockImplementation(() => 70)
            jest.spyOn(scorecard, 'bonus').mockImplementation(() => 35)
            expect(scorecard.topHalfTotal()).toBe(105)
        })
    })

    describe('bottomHalfTotal', () => {
        test('bottomHalfTotal is sum of all values for bottom half categories', () => {
            const scorecard = new Scorecard()
            scorecard.scores = {
                "threeOfAKind": 25,
                "fourOfAKind": 25,
                "fullHouse": 25,
                "lowStraight": 30,
                "highStraight": 40,
                "yahtzee": 50,
                "chance": 25
            }
            expect(scorecard.topHalfSum()).toBe(220)
        })
    })

    describe('overallTotal', () => {
        test('overallTotal is sum of topHalfTotal and bottomHalfTotal', () => {
            const scorecard = new Scorecard()
            jest.spyOn(scorecard, 'topHalfTotal').mockImplementation(() => 100)
            jest.spyOn(scorecard, 'bottomHalfTotal').mockImplementation(() => 200)
            expect(scorecard.overallTotal()).toBe(300)
        })
    })

    describe('toJSON', () => {
        test('toJSON returns an object containing all scores plus all computed categories', () => {
            const scorecard = new Scorecard()
            const expected = {
                ...scorecard.scores,
                topHalfSum: scorecard.topHalfSum(),
                bonus: scorecard.bonus(),
                topHalfTotal: scorecard.topHalfTotal(),
                bottomHalfTotal: scorecard.bottomHalfTotal(),
                overallTotal: scorecard.overallTotal()
            }
            expect(scorecard.toJSON()).toEqual(expected)
        })
    })
})