import { Router } from 'express'
import { testEndpoint } from './endpoints/testEndpoint.js'

/*
Sets the endpoints for our API.
*/

export const apiRouter = Router()

apiRouter.get('/', testEndpoint)