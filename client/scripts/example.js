import { apiMessageSender } from './api/apiMessageSender.js'

// returns nothing
const postMove = async (move) => {
    await apiMessageSender.post('/move', move)
}

// returns game state object
const receiveGameState = async (code) => {
    return await apiMessageSender.post('/game_state', {
        game: code,
    })
}

const pollGameState = (code) => {
    setTimeout(() => {
        const gameState = await receiveGameState(code)
        updatePageWithNewState(gameState)
        pollGameState(code)
    }, 500)
}

const updatePageWithNewState = (state) => {}

const response = await apiMessageSender.post('/move', {
    foo: 10,
})
