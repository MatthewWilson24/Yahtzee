import { apiMessageSender } from "./api/apiMessageSender.js";

const setHeading = async () => {
    let json = await apiMessageSender.get("/")
    console.log(json)
    document.getElementById("heading").innerHTML = json.message
}

window.onload = setHeading