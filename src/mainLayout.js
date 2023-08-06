const content = document.querySelector(".content")

createMenu()
createHeader()

function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    
    content.appendChild(div)
    
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
    const div = document.createElement("div")
    div.classList.add("header")
    
    content.appendChild(div)
    
    const header = document.querySelector(".header")
    header.innerText = "Cantibal's Slurry Feed Boat"
}

function createIntro() {
    const div = document.createElement("div")
    div.classList.add("intro")

    content.append(div)

    const parOne = document.createElement("p")
    const parTwo = document.createElement("p")
    const parThree = document.createElement("p")

    const intro = document.querySelector(".intro")
    intro.appendChild(parOne)
    intro.appendChild(parTwo)
    intro.appendChild(parThree)

    parOne.innerText = "There are a lot of misconceptions about cannibals - they're prone to sensory overload, they're too kinesthetically inclined, they wreck the basic morale fabric of civilized society. In our golden age of humanitarianism, this slander is woefully anachronistic yet stubbornly persistent, which is why we have sought to change the narrative!"

    parTwo.innerText = ""
}