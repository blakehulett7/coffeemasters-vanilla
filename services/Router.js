const Router = {
    init: function() {
        document.querySelectorAll("a.navlink").forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
                const url = link.href
                Router.go(url)
            })
        })
    },
    go: function(route, addToHistory = true) {
        console.log(`Going to ${route}`)
    }
}

export default Router
