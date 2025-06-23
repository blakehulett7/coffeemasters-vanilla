const Router = {
    init: function() {
        document.querySelectorAll("a.navlink").forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
                const url = link.href
                Router.go(url)
            })
        })

        Router.go(location.pathname)
    },
    go: function(route, addToHistory = true) {
        if (addToHistory) {
            history.pushState({ route }, "", route)
        }
    }
}

export default Router
