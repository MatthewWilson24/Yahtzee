import { testController } from './controllers/testController.js'
import express from 'express'

export const formRouter = express.Router()
formRouter.use(express.urlencoded({ extended: true }))

formRouter.post('/enter_name', testController)