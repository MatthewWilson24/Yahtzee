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
    queryParams.entries().forEach(element => {
        path = path + element[0] + '=' + element[1] + "&"
    });
    path = path.slice(0,-1)
    return path

}