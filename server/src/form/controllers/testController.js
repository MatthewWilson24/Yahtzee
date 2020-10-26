export const testController = (req, res) => {
    console.log(`Form submitted: ${JSON.stringify(req.body)}`)
    res.redirect('/')
}