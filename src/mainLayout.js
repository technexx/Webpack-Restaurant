const content = document.querySelector(".content")

createMenu()
createHeader()

function createMenu() {
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menu")
    
    content.appendChild(menuDiv)
    
    const menu = document.querySelector(".menu")
    const itemOne = document.createElement("p")
    const itemTwo = document.createElement("p")
    const itemThree = document.createElement("p")

    itemOne.innerText = "Home"
    itemTwo.innerText = "Menu"
    itemThree.innerText = "Contact"

    menu.appendChild(itemOne)
    menu.appendChild(itemTwo)
    menu.appendChild(itemThree)
}

function createHeader() {
    const headerDiv = document.createElement("div")
    headerDiv.classList.add("header")
    
    content.appendChild(headerDiv)
    
    const header = document.querySelector(".header")
    header.innerText = "Cantibal's Slurry Feed Boat"
}