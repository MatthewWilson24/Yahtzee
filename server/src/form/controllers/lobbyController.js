/*
    Assume that the body of the request has form:
        { player: name, game: code }

    This controller should:
        - Get the pending game with the correct code from the pendingGameStore
        - Create a new game from this pending game
        - Remove the pending game from the pendingGameStore
        - Add the new game to the gameStore
        - Redirect the user to game.html with the name and game code as query parameters
        - Log a message to the console to record that the game was started
*/
export const lobbyController = (req, res) => {

}