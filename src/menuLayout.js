const mainBody = document.querySelector(".main-body")

export function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    mainBody.appendChild(div)

    const menu = document.querySelector(".menu")

    const menuHeader = document.createElement("p")
    menuHeader.setAttribute("id", "menu-header")
    menuHeader.innerText = "Menu"

    const itemOne = MenuItem("Cerebrum Au Gratin", "$32.69", "The juiciest, most executive part of the brain, slowly marinated and topped with Dahmer Chedder and eyecrust breadcrumbs.")
    const itemTwo = MenuItem("Tongue Pâté", "$26.92", "Vat-organic certified, gluten-free tongue minced with vegetables, marinated with our signature house Slurry Sauce, and served with Dutch bread.")
    const itemThree = MenuItem("Liver tartare", "54.99", "Tender liver, finely minced and mixed with our Mystery Mayhem Mix, served on a bed of pre-digested greens")
    const itemFour = MenuItem("Eyeball Chowder", "$28.50", "20/30 minimum pre-expiration vision eyeballs served in original ocular cavity with mixed vegetables")

    menu.appendChild(menuHeader)
}

const MenuItem = () => {
    return {item, price, description}
}