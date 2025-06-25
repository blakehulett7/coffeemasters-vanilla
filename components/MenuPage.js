class MenuPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" }) // Shadow DOM -- optional way to contain custom css within a web component

        const styles = document.createElement("style")
        this.root.appendChild(styles)

        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css")
            const css = await request.text()
            styles.textContent = css
        }
        loadCSS()
    }

    connectedCallback() {
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true)
        this.root.appendChild(content) // If I was not using a shadow DOM, this would be this.appendChild(content)

        window.addEventListener("appmenuchanged", () => {
            this.render()
        }) // important that this is an arrow function!!
    }

    render() {
        if (!app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "Loading..."
            return
        }

        this.root.querySelector("#menu").innerHTML = ""
        for (let category of app.store.menu) {
            const liCategory = document.createElement("li")
            liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul class="category">
                    
                </ul>
            `
            this.root.querySelector("#menu").appendChild(liCategory)

            category.products.forEach(function(product) {
                const item = document.createElement("product-item")
                item.dataset.product = JSON.stringify(product)
                liCategory.querySelector("ul").appendChild(item)
            })
        }
    }
}

customElements.define("menu-page", MenuPage)

export default MenuPage
