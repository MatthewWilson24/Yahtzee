/*
    path: "/enter_name"
    queryParams: { game: code, player: name }

    output: "/enter_name?game=code&player=name"


    path "/index"
    queryParams: {}

    output: "/index"


    Object.keys()
    Object.values()
    Object.entries()
*/
export const buildPath = (path, queryParams) => {
    path = path +'?'
    Object.entries(queryParams).forEach(element => {
        path = path + element[0] + '=' + element[1] + "&"
    });
    path = path.slice(0,-1)
    
    return path
}
/*
    The endpoint should take a path (e.g. /path) and a js object containing query parameters
    (e.g. {
        param1: val1,
        param2: val2
    })
    and produce a string of format: /path?param1=val1&param2=val2
*/