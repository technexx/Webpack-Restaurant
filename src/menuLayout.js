const mainBody = document.querySelector(".main-body")

export function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    mainBody.appendChild(div)

    const menu = document.querySelector(".menu")

    const menuHeader = document.createElement("p")
    menuHeader.setAttribute("id", "menu-header")
    menuHeader.innerText = "Served All Day and Night, Excluding Quarantine and Raid Hours"

    menu.appendChild(menuHeader)

    const menuItemsDiv = document.createElement("div")
    menuItemsDiv.classList.add("menu-items-holder")

    menu.appendChild(menuItemsDiv)

    addCategoryHeader("drinks-header", "Drinks")
    addDrinks()
    addCategoryHeader("appetizers-header", "Appetizers")
    addAppetizers()
    addCategoryHeader("mains-header", "Mains")
    addMains()
}

const addCategoryHeader = (headerId, headerText) => {
    const menuItemsHolder = document.querySelector(".menu-items-holder")

    const header = document.createElement("p")
    header.setAttribute("id", headerId)
    header.innerText = headerText

    menuItemsHolder.appendChild(header)
}

function addDrinks() {
    const itemOne = MenuItem("Water", "1.00", "Straight from our self-fermenting tap. Free refills for survivors.")
    const itemTwo = MenuItem("Slurry Juice", "$9.50 - $99.50", "Select expired entrees slushified for your gulping pleasure. See and serenade server for options.")
    const itemThree = MenuItem("Bloody Mary", "$42.00", "Straight from the vat-woman. Host guaranteed to be 72 hours or less from expiration. \n\n *Host named post-partum, as live specimans are generally assigned numerical designations.")

    Dishes([itemOne, itemTwo, itemThree])
}

function addAppetizers() {
    const itemOne = MenuItem("Eyeball Chowder", "$28.50", "20/30 minimum pre-expiration vision eyeballs served in original ocular cavity with mixed vegetables.")
    const itemTwo = MenuItem("Slurry Crostini", "$18.90", "Freshly charred preserved artisan yeast dough topped with our (in)famous \"Cantibal's Slurry Spread.\"")
    const itemThree = MenuItem("Tosser's Salad", "$26.26", "Eco-friendly recycled algae and friends with lyme, gravel, shingles, and our award-winning* Guck-a-Shuck dressing")

    Dishes([itemOne, itemTwo, itemThree])
}

function addMains() {
    const itemOne = MenuItem("Cerebrum Au Gratin", "$92.69", "The juiciest, most executive part of the brain, slowly marinated and topped with Dahmer Chedder and eyecrust breadcrumbs.")
    const itemTwo = MenuItem("Tongue Pâté", "$66.92", "Vat-organic certified, gluten-free tongue minced with vegetables, marinated with our signature house Slag Sauce, and served with Dutch bread.")
    const itemThree = MenuItem("Liver tartare", "$54.99", "Tender liver, finely minced and mixed with our Mystery Mayhem Mix, served on a bed of pre-digested greens.")

    Dishes([itemOne, itemTwo, itemThree])
}

const Dishes = (arrayOfMenuObjects) => {
    const menuItemsHolder = document.querySelector(".menu-items-holder")

    for (let i=0; i<arrayOfMenuObjects.length; i++) {
        const itemDiv = document.createElement("div")
        itemDiv.classList.add("menu-item")

        const item = document.createElement("p")
        const description = document.createElement("p")
        const price = document.createElement("p")

        item.setAttribute("id", "menu-item-header")
        description.setAttribute("id", "menu-item-description")
        price.setAttribute("id", "menu-item-price")

        item.innerText = arrayOfMenuObjects[i].item
        description.innerText = arrayOfMenuObjects[i].description
        price.innerText = arrayOfMenuObjects[i].price

        itemDiv.appendChild(item)
        itemDiv.appendChild(description)
        itemDiv.appendChild(price)

        menuItemsHolder.appendChild(itemDiv)
    }
}

const MenuItem = (item, price, description) => {
    return {item, price, description}
}