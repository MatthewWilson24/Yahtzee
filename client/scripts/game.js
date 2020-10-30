import { apiMessageSender } from './api/apiMessageSender.js'

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

const pollGameState = (code) => {
    console.log('Polling game state')
    setTimeout(async () => {
        const gameState = await receiveGameState(code)
        updatePageWithNewState(gameState)
        pollGameState(code)
    }, 500)
}

window.onload = pollGameState

const updateScorecards = (scorecards) => {}

const updatePageWithNewState = (state) => {
    updateScorecards(state.scorecards)
}

const updateScorecards = (scorecards) => {}
