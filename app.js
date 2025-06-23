import Store from "./services/Store.js"
import API from "./services/API.js"

window.app = {}
app.store = Store

window.addEventListener("DOMContentLoaded", async function() {
    console.log("Jesus is Lord!")

    const menu = await API.fetchMenu()
})
