import proxiedStore from "./services/Store.js"
import loadData from "./services/Menu.js"
import Router from "./services/Router.js"

import MenuPage from "./components/MenuPage.js"
import DetailsPage from "./components/DetailsPage.js"
import OrderPage from "./components/OrderPage.js"

window.app = {}
app.store = proxiedStore
app.router = Router

window.addEventListener("DOMContentLoaded", async function() {
    console.log("Jesus is Lord!")

    loadData()
    app.router.init()
})
