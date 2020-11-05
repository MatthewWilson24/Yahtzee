import { getPageQueryParameters } from './util/queryParameters.js'

window.onload = () => {
    const code = getPageQueryParameters().game
    const elem = document.getElementById('code')
    elem.innerHTML = "Code: " +code 
    console.log(`Code: ${code}`)

    const listOfPlayers = getPageQueryParameters().allPlayers.replace("%20", " ")
    console.log(listOfPlayers)
    const newListOfPlayers = listOfPlayers.split(',')
    for (let i = 0; i < newListOfPlayers.length; i++){
        const playerCells = document.getElementsByClassName("PlayerName")[i]
        playerCells.innerHTML = `${newListOfPlayers[i]}`
    }
    
}

