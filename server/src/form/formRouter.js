import { exampleController } from './controllers/exampleController.js'
import express from 'express'
import { newGameController } from './controllers/newGameController.js'
import { joinGameController } from './controllers/joinGameController.js'
import { enterNameController } from './controllers/enterNameController.js'
import { lobbyController } from './controllers/lobbyController.js'

export const formRouter = express.Router()
formRouter.use(express.urlencoded({ extended: true }))

formRouter.get('/new_game', newGameController)
formRouter.post('/join_game', joinGameController)
formRouter.post('/enter_name', enterNameController)
formRouter.post('/lobby', lobbyController)

formRouter.post('/example', exampleController)