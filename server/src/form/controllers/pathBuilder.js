export const buildPath = (path, queryParams) => {
    const paramPairs = Object.entries(queryParams)

    if (paramPairs.length === 0) {
        return path
    }

    const queryString = paramPairs
        .map((pair) => `${pair[0]}=${pair[1]}`)
        .join('&')
    
    return `${path}?${queryString}`
}