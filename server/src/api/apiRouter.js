import { ApiRouterBuilder } from './apiRouterBuilder.js'
import { testEndpoint } from './endpoints/testEndpoint.js'

const routerBuilder = new ApiRouterBuilder()
routerBuilder.addGetEndpoint('/', testEndpoint)

export const apiRouter = routerBuilder.router