import { buildPath } from "./pathBuilder.js"

/*
    This controller handles a POST request to /example
    Assume that the valid request parameters are "foo" and "bar"
    So a valid request would look like: /example?foo=1&bar=2
*/
export const exampleController = (req, res) => {
    // Get the request parameters
    const foo = req.body.foo
    const bar = req.body.bar

    // Build the return url, adding some parameters
    const returnUrl = buildPath('/index.html', { param1: foo, param2: bar })

    // Redirect the user to the return url
    // This triggers the client to send a GET request to /index.html?param1=1&param2=2
    res.redirect(returnUrl)

    // Log the processed request to the console
    console.log(`Form submitted: ${JSON.stringify(req.body)}`)
}