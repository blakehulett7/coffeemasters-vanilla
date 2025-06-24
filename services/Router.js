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

        // I can also use the hidden attribute to change page visibility - useful for small apps
        var pageElement = null
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page")
                break;
            case "/order":
                pageElement = document.createElement("order-page")
                break;
            default:
                if (route.startsWith("/product/")) {
                    pageElement = document.createElement("details-page")
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
