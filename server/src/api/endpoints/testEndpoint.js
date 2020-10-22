export const testEndpoint = (request) => {
    console.log(`Request: ${request}`)
    return { message: "Hello World!" }
}