export const generateGameCode = () => {
    let retVal = (Math.floor(Math.random() * 10000))
    console.log(retVal)
    retVal = retVal.toString()
    console.log(retVal)
    retVal = retVal.padStart(4, '0')
    console.log(retVal)
    return retVal
    
}
