import { Game } from '../../src/game/game.js'
import { Scorecard } from '../../src/game/scorecard.js'

describe.skip('Game tests', () => {
    const game = new Game('CODE', ['Player1', 'Player2'])

    describe('Constructor', () => {
        test('Constructor sets code', () => {
            expect(game.code).toBe('CODE')
        })

        test('Constructor sets players', () => {
            expect(game.players).toEqual(['Player1', 'Player2'])
        })

        test('Constructor sets currentPlayer to first player in array', () => {
            expect(game.currentPlayer).toBe('Player1')
        })

        test('Constructor sets rollsRemaining to three', () => {
            expect(game.rollsRemaining).toBe(3)
        })

        test('Constructor sets currentDice to empty array', () => {
            expect(game.currentDice).toEqual([])
        })

        test('Constructor sets diceKept to empty array', () => {
            expect(game.diceKept).toEqual([])
        })

        test('Constructor adds a scorecard for each player', () => {
            expect(Object.keys(game.scorecards).sort()).toEqual(['Player1', 'Player2'])
        })

        test('Constructor adds a new scorecard value to scorecards for each player', () => {
            Object.values(game.scorecards).forEach((s) => {
                expect(s).toEqual(new Scorecard())
            })
        })
    })

    describe('CanKeep', () => {
        test('If rollsRemaining is 3, canKeep is false', () => {
            
        })
    })

    describe('canRoll', () => {
        test('If rollsRemaining is greater than 0, canRoll is true', () => {
            const game = new Game()
            game.rollsRemaining = 2
            expect(game.canRoll()).toBe(true)
        })

        test('If rollsRemaining is 0, canRoll is false', () => {
            const game = new Game()
            game.rollsRemaining = 0
            expect(game.canRoll()).toBe(false)
        })
    })
})