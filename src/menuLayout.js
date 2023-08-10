const mainBody = document.querySelector(".main-body")

export function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    mainBody.appendChild(div)

    const menu = document.querySelector(".menu")

    const menuHeader = document.createElement("p")
    menuHeader.setAttribute("id", "menu-header")
    menuHeader.innerText = "Served All Day and Night, Excluding Quarantine and Raid Hours"

    const menuItemsDiv = document.createElement("div")
    menuItemsDiv.classList.add("menu-items-holder")

    menu.appendChild(menuHeader)
    menu.appendChild(menuItemsDiv)

    const itemOne = MenuItem("Cerebrum Au Gratin", "$32.69", "The juiciest, most executive part of the brain, slowly marinated and topped with Dahmer Chedder and eyecrust breadcrumbs.")
    const itemTwo = MenuItem("Tongue Pâté", "$26.92", "Vat-organic certified, gluten-free tongue minced with vegetables, marinated with our signature house Slurry Sauce, and served with Dutch bread.")
    const itemThree = MenuItem("Liver tartare", "$54.99", "Tender liver, finely minced and mixed with our Mystery Mayhem Mix, served on a bed of pre-digested greens.")
    const itemFour = MenuItem("Eyeball Chowder", "$28.50", "20/30 minimum pre-expiration vision eyeballs served in original ocular cavity with mixed vegetables.")

    const menuItemsHolder = document.querySelector(".menu-items-holder")
    const menuItemsArray = [itemOne, itemTwo, itemThree, itemFour]

    for (let i=0; i<menuItemsArray.length; i++) {
        const itemDiv = document.createElement("div")
        itemDiv.classList.add("menu-item")

        const item = document.createElement("p")
        const description = document.createElement("p")
        const price = document.createElement("p")

        item.setAttribute("id", "menu-item-header")
        description.setAttribute("id", "menu-item-description")
        price.setAttribute("id", "menu-item-price")

        item.innerText = menuItemsArray[i].item
        description.innerText = menuItemsArray[i].description
        price.innerText = menuItemsArray[i].price

        itemDiv.appendChild(item)
        itemDiv.appendChild(description)
        itemDiv.appendChild(price)

        menuItemsHolder.appendChild(itemDiv)
    }
}

const MenuItem = (item, price, description) => {
    return {item, price, description}
}