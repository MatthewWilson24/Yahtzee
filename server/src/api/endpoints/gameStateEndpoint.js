/*
    Assume that the body of the request has form:
        { game: code }
    
    This endpoint should:
        - Find the correct game from the gameStore
        - Return 404 Not Found if the game can't be located
        - Otherwise, return the current state of the game as json
*/
export const gameStateEndpoint = (req, res) => {

}