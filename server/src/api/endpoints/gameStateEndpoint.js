import { gameStore } from '../../store/gameStore.js'

/*
    Assume that the body of the request has form:
        { game: code }
    
    This endpoint should:
        - Find the correct game from the gameStore
        - Return 404 Not Found if the game can't be located
        - Otherwise, return the current state of the game as json
*/
export const gameStateEndpoint = (req, res) => {
    console.log(`Game state request: ${JSON.stringify(req.body)}`)
    let currGame
    try {
        currGame = gameStore.get(req.code)
    } catch (err) {
        // Ignore any errors thrown by gameStore if code is missing
        currGame = null
    }

    // Return 404 if game object is null or undefined
    if (currGame == null) {
        res.sendStatus(404)
    } else {
        res.json(currGame)
    }
}
