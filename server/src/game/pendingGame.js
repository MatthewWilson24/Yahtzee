export class PendingGame {
    constructor(code) {
        this.code = code
        this.players = []
    }

    addPlayer(name) {
        this.players.push(name)
    }
}