export const exampleApiEndpoint = (req, res) => {
    console.log(`API request: ${JSON.stringify(req.body)}`)
    res.json({ message: "Hello World!" })
}