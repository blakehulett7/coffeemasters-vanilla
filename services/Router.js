const Router = {
    init: function() {
        document.querySelectorAll("a.navlink").forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
            })
        })
    },
    go: function(route, addToHistory = true) {

    }
}

export default Router
