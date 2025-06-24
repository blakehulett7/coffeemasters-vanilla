class MenuPage extends HTMLElement {
    constructor() {
        super()

        this.root = this.attachShadow({ mode: "open" }) // Shadow DOM
    }

    connectedCallback() {
        const template = document.getElementbyId("menu-page-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content) // If I was using a shadow DOM, this would be this.root.appendChild(content)
    }
}

customElements.define("menu-page", MenuPage)

export default MenuPage
