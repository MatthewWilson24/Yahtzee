import { PendingGame } from '../../src/game/pendingGame.js'

describe('PendingGame tests', () => {
    test('Constructor should set code property', () => {
        const pg = new PendingGame('CODE')
        expect(pg.code).toBe('CODE')
    })

    test('Constructor should set players property to empty array', () => {
        const pg = new PendingGame('CODE')
        expect(pg.players).toEqual([])
    })

    test('addPlayer should add new player name to players array', () => {
        const pg = new PendingGame('CODE')
        pg.addPlayer('Name1')
        pg.addPlayer('Name2')
        expect(pg.players.sort()).toEqual(['Name1', 'Name2'])
    })
})