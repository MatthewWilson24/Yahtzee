/*
    Assume that the body of the request has form:
        {
            game: code
            player: name
            keep: [dice]
            roll: true/false
            score: category
        }
    
    This endpoint should:
        - Check whether the request received is valid - if not, return 400 Bad Request
        - Find the game from the gameStore
        - Call the correct method on the game
        - Return 200 OK
*/
export const moveEndpoint = (req, res) => {
    
}