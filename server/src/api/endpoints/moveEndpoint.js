import { gameStore } from '../../store/gameStore.js'
/*
    Assume that the body of the request has form:
        {
            game: code
            player: name
            keep: [dice]
            roll: true/false
            score: category or null
        }
    
    This endpoint should:
        - Check whether the request received is valid - if not, send 400 Bad Request
        - Find the game from the gameStore
        - Call the correct method on the game
        - Return 200 OK
*/
export const moveEndpoint = (req, res) => {
    console.log(`Move request: ${JSON.stringify(req.body)}`)
    try {
        currGame = gameStore.get(req.code)
    } catch (err) {
        // Ignore any errors thrown by gameStore if code is missing
        currGame = null
    }

    // Return 400 if game object is null or undefined
    if (currGame == null) {
        res.sendStatus(400)
        return
    }

    // Return 400 if it is not their turn
    if (currGame.currentPlayer !== req.player) {
        res.sendStatus(400)
        return
    }

    // Return 400 if the move is not exactly one of rolling and scoring
    if ((req.roll && req.score) || (!req.roll && !req.score)) {
        res.sendStatus(400)
        return
    }

    if (req.roll) {
        // Return 400 if trying to roll when no rolls are left
        if (!currGame.canRoll()) {
            res.sendStatus(400)
            return
        }

        if (keep in req) {
            // Return 400 if dice to keep are not present in currentDice
            if (
                req.keep.some(
                    (val) =>
                        currGame.currentDice.filter((el) => el == val).length <
                        req.keep.filter((el) => el == val).length
                )
            ) {
                res.sendStatus(400)
                return
            }
        } else {
            currGame.keepDice(req.keep)
        }

        currGame.rollDice()
        res.sendStatus(200)
    } else {
        // Return 400 if trying to score before rolling
        if (!currGame.canScore()) {
            res.sendStatus(400)
            return
        }

        currGame.scoreInCategory(req.score)
        res.sendStatus(200)
    }
}
