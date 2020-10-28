import { pendingGameStore } from '../../store/pendingGameStore.js'
import { buildPath } from './pathBuilder.js'

/*
    Assume that the body of the request has form:
        { game: code }

    This controller should:
        - Get the pending game with the correct code from the pendingGameStore
        - Redirect the user to enter_name.html with the game code as a query parameter
        - Log a message to the console to record that a player requested to join the game
*/
export const joinGameController = (req, res) => {

}