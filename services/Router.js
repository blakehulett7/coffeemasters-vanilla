const Router = {
    init: function() {
        document.querySelectorAll("a.navlink").forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
                const url = link.getAttribute("href")
                Router.go(url)
            })
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
        }

        document.querySelector("main").innerHTML = ""
        document.querySelector("main").appendChild(pageElement)
    }
}

export default Router
