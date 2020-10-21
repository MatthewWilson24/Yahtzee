import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import { apiRouter } from './api/apiRouter.js'

const app = express()
const port = process.env.port || 3000

const currentModuleFile = fileURLToPath(import.meta.url)
const currentModuleDirectory = path.dirname(currentModuleFile)
const clientDirectory = path.join(currentModuleDirectory, '../../client')

app.use(express.static(clientDirectory))
app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Yahtzee app listening at http://localhost:${port}`)
})