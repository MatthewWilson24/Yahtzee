export const getPageQueryParameters = () => {
    const urlParams = window.location.search
    const params = urlParams.replace('?', '').split('&')

    return params.reduce((acc, cur) => {
        const keyVal = cur.split('=')
        return {
            ...acc,
            ...Object.fromEntries([keyVal]),
        }
    }, {})
}
<<<<<<< HEAD

/*
    { game: code }
*/
=======
>>>>>>> 89c96d2ae681d99e9d779f206165a2e682b6ab75
