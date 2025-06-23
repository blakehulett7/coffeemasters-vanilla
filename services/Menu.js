import API from "./API.js"

export default async function loadData() {
    app.store.menu = await API.fetchMenu();
}
