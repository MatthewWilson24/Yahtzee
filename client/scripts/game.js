import { apiMessageSender } from './api/apiMessageSender.js'

const postMove = async (move) => {
    await apiMessageSender.post('/move', move)
}

const receiveGameState = async (code) => {
    return await apiMessageSender.post('/game_state', {
        game: code,
    })
}

const pollGameState = (code) => {
    setTimeout(async () => {
        const gameState = await receiveGameState(code)
        updatePageWithNewState(gameState)
        pollGameState(code)
    }, 500)
}

window.onload = pollGameState

const updatePageWithNewState = (state) => {}
