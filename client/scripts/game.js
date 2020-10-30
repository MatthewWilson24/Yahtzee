import { apiMessageSender } from './api/apiMessageSender.js'
import { getPageQueryParameters } from './util/queryParameters.js'

const orderedCategories = [
    'ones',
    'twos',
    'threes',
    'fours',
    'fives',
    'sixes',
    'topHalfSum',
    'bonus',
    'topHalfTotal',
    'threeOfAKind',
    'fourOfAKind',
    'fullHouse',
    'lowStraight',
    'highStraight',
    'yahtzee',
    'chance',
    'bottomHalfTotal',
    'overallTotal',
]

const computedCategories = [
    'topHalfSum',
    'bonus',
    'topHalfTotal',
    'bottomHalfTotal',
    'overallTotal',
]

const generateTestGame = () => {
    const gameState = {
        code: '1023',
        players: ['name1', 'name2', 'name3'],
        currentPlayer: 'name1',
        currentDice: [1, 2, 3, 4, 5],
        diceKept: [1],
        scorecards: {},
    }
    for (const player of gameState.players) {
        gameState.scorecards[player] = {}
        for (const category of orderedCategories) {
            gameState.scorecards[player][category] = Math.trunc(
                Math.random() * 10
            )
        }
    }
    return gameState
}

const UpdateDice = (diceValues) => {
    for (let i = 0; i < diceValues.length; i++) {
        const img = document.getElementById(`dice-${i}`)
        img.src = './images/dice_' + diceValues[i] + '.png'
    }
}

const postMove = async (move) => {
    await apiMessageSender.post('/move', move)
}

const receiveGameState = async (code) => {
    return await apiMessageSender.post('/game_state', {
        game: code,
    })
}

const initializeTable = (code, thisPlayer) => {
    console.log('Initializing table')
    // const gameState = await receiveGameState(code)
    const gameState = generateTestGame()
    for (const player of gameState.players) {
        ;[...document.getElementsByTagName('tr')].forEach((row, i) => {
            const span = document.createElement('span')
            const cell = document.createElement(i ? 'td' : 'th')
            if (i) {
                const button = document.createElement('button')
                button.classList.add('category-button')
                button.classList.add('player-' + player)
                button.classList.add(orderedCategories[i - 1])
                button.textContent = '-'
                if (computedCategories.includes(orderedCategories[i - 1])) {
                    button.classList.add('computed')
                    button.textContent = '0'
                    button.disabled = true
                }
                if (player !== thisPlayer) {
                    button.disabled = true
                }
                span.appendChild(button)
            } else {
                span.textContent = player
            }
            cell.appendChild(span)
            row.appendChild(cell)
        })
    }
}

const pollGameState = (code, player) => {
    console.log('Polling game state')
    setTimeout(async () => {
        // const gameState = await receiveGameState(code)
        const gameState = generateTestGame()
        updatePageWithNewState(gameState, player)
        pollGameState(code, player)
    }, 500)
}

window.onload = () => {
    const { name: player, game: code } = getPageQueryParameters()
    initializeTable(code, player)
    pollGameState(code, player)
}

const updateScorecards = (scorecards, players) => {
    for (const player of players) {
        for (const category of orderedCategories) {
            let cellValue = (scorecards[player][category] ?? '-').toString()
            document.getElementsByClassName(
                `player-${player} ${category}`
            )[0].textContent = cellValue
        }
    }
}

const updateDice = (dice) => {}

const updatePageWithNewState = (state) => {
    updateScorecards(state.scorecards, state.players)
    updateDice()
}
