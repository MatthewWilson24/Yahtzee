import { diceCategoryChecker } from '../../src/game/diceCategoryChecker.js'

describe("diceCategoryChecker tests", () => {
    describe("isThreeOfAKind", () => {
        test("Returns true if three dice the same", () => {
            const dice = [1, 2, 1, 3, 1]
            expect(diceCategoryChecker.isThreeOfAKind(dice)).toBe(true)
        })

        test('Returns true if more than three dice the same', () => {
            const dice = [6, 6, 6, 6, 6]
            expect(diceCategoryChecker.isThreeOfAKind(dice)).toBe(true)
        })

        test('Returns false if fewer than three dice the same', () => {
            const dice = [1, 3, 1, 4, 2]
            expect(diceCategoryChecker.isThreeOfAKind(dice)).toBe(false)
        })
    })

    describe('isFourOfAKind', () => {
        test('Returns true if four dice the same', () => {
            const dice = [1, 2, 1, 1, 1]
            expect(diceCategoryChecker.isFourOfAKind(dice)).toBe(true)
        })

        test('Returns true if more than four dice the same', () => {
            const dice = [6, 6, 6, 6, 6]
            expect(diceCategoryChecker.isFourOfAKind(dice)).toBe(true)
        })

        test('Returns false if fewer than four dice the same', () => {
            const dice = [1, 3, 1, 4, 1]
            expect(diceCategoryChecker.isFourOfAKind(dice)).toBe(false)
        })
    })

    describe('isFullHouse', () => {
        test('Returns true if dice contain a pair and triple of identical values', () => {
            const dice = [1, 2, 1, 2, 1]
            expect(diceCategoryChecker.isFullHouse(dice)).toBe(true)
        })

        test('Returns true if all five dice have same value', () => {
            const dice = [3, 3, 3, 3, 3]
            expect(diceCategoryChecker.isFullHouse(dice)).toBe(true)
        })

        test('Returns false if dice do not contain a pair and triple of identical values', () => {
            const dice = [1, 1, 2, 2, 3]
            expect(diceCategoryChecker.isFullHouse(dice)).toBe(false)
        })
    })

    describe('isLowStraight', () => {
        test('Returns true if four dice appear in a sequence', () => {
            const dice = [4, 2, 3, 5, 2]
            expect(diceCategoryChecker.isLowStraight(dice)).toBe(true)
        })

        test('Returns true if five dice appear in a sequence', () => {
            const dice = [3, 6, 2, 5, 4]
            expect(diceCategoryChecker.isLowStraight(dice)).toBe(true)
        })

        test('Returns false if four dice do not appear in a sequence', () => {
            const dice = [3, 6, 3, 1, 2]
            expect(diceCategoryChecker.isLowStraight(dice)).toBe(false)
        })
    })

    describe('isHighStraight', () => {
        test('Returns true if five dice appear in a sequence', () => {
            const dice = [4, 2, 3, 5, 6]
            expect(diceCategoryChecker.isHighStraight(dice)).toBe(true)
        })

        test('Returns false if five dice do not appear in a sequence', () => {
            const dice = [4, 6, 3, 1, 2]
            expect(diceCategoryChecker.isHighStraight(dice)).toBe(false)
        })
    })

    describe('isYahtzee', () => {
        test('Returns true if all five dice are the same', () => {
            const dice = [4, 4, 4, 4, 4]
            expect(diceCategoryChecker.isYahtzee(dice)).toBe(true)
        })

        test('Returns false if all five dice are not the same', () => {
            const dice = [4, 4, 3, 4, 4]
            expect(diceCategoryChecker.isYahtzee(dice)).toBe(false)
        })
    })
})
