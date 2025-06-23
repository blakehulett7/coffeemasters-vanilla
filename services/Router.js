const Router = {
    init: function() {
        document.querySelectorAll("a.navlink").forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
                const url = link.getAttribute("href")
                Router.go(url)
            })
        })

        window.addEventListener("popstate", function(e) {
            Router.go(e.state.route, false)
        })

        Router.go(location.pathname)
    },
    go: function(route, addToHistory = true) {
        if (addToHistory) {
            history.pushState({ route }, "", route)
        }

        var pageElement = null
        switch (route) {
            case "/":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Menu"
                // I can also use the hidden attribute to change page visibility - useful for small apps
                break;
            case "/order":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Your Order"
                break;
            default:
                if (route.startsWith("/product/")) {
                    pageElement = document.createElement("h1")
                    pageElement.textContent = "Details"
                    const productId = route.substring(route.lastIndexOf("-") + 1)
                    pageElement.dataset.id = productId
                }
        }

        if (!pageElement) {
            return
        }

        document.querySelector("main").innerHTML = ""
        document.querySelector("main").appendChild(pageElement)
        window.scrollX = 0
        window.scrollY = 0
    }
}

export default Router
