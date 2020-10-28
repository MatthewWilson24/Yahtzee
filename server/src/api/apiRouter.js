import express from 'express'
import { exampleApiEndpoint } from './endpoints/exampleApiEndpoint.js'
import { gameStateEndpoint } from './endpoints/gameStateEndpoint.js'
import { moveEndpoint } from './endpoints/moveEndpoint.js'

export const apiRouter = express.Router()
apiRouter.use(express.json())

apiRouter.post('/game_state', gameStateEndpoint)
apiRouter.post('/move', moveEndpoint)

apiRouter.post('/example', exampleApiEndpoint)
