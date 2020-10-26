import { testApiEndpoint } from './endpoints/testApiEndpoint.js'
import express from 'express'

export const apiRouter = express.Router()
apiRouter.use(express.json())

apiRouter.get('/', testApiEndpoint)