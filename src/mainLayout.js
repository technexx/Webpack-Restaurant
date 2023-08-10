const mainBody = document.querySelector(".main-body")

export function clearBody() {
    mainBody.innerHTML = ""
}

export function createMainPage() {
    createHeader()
    createIntro()
    createHours()
    createAddress()
}

export function createNav() {
    const nav = document.querySelector(".nav")
    
    const itemOne = document.createElement("p")
    const itemTwo = document.createElement("p")
    const itemThree = document.createElement("p")

    itemOne.setAttribute("id", "home-tab")
    itemTwo.setAttribute("id", "menu-tab")
    itemThree.setAttribute("id", "contact-tab")

    itemOne.innerText = "Home"
    itemTwo.innerText = "Menu"
    itemThree.innerText = "Contact"

    nav.appendChild(itemOne)
    nav.appendChild(itemTwo)
    nav.appendChild(itemThree)
}

function createHeader() {
    const div = document.createElement("div")
    div.classList.add("header")
    mainBody.appendChild(div)
    
    const header = document.querySelector(".header")
    header.innerText = "Cantibal's Feed Boat and Slurry House"
}

function createIntro() {
    const div = document.createElement("div")
    div.classList.add("intro")
    mainBody.append(div)

    const parOne = document.createElement("p")
    const parTwo = document.createElement("p")
    const parThree = document.createElement("p")

    const intro = document.querySelector(".intro")
    intro.appendChild(parOne)
    intro.appendChild(parTwo)
    intro.appendChild(parThree)

    parOne.innerText = "There are a lot of misconceptions about cannibals - they're prone to sensory overload, they're too kinesthetically inclined, they wreck the basic moral fabric of civilized society. In our golden age of humanitarianism, this slander is woefully anachronistic yet stubbornly persistant, which is why we seek to change the narrative!"

    parTwo.innerText = "At Cantibal's Feed Boat and Slurry House, we offer human-friendly alternatives for all you intra-species loving gourmands. Our menu is chock full of the dishes you grew up with (or came to know later, as the cravings overtook reason). We have cereb au gratin, tongue pâté, liver tartare, and even eyeball chowder - all sourced from local, home-grown vat people. These laboratory abominations of nature are 100% certified human-free, meeting the United Nations' definition of \"Non-Human Humanoid\". Best of all, they are entirely indistinguishable from real people!"

    parThree.innerText = "So come on down and try a chomp or two! We are located at the intersection of Wyatt and Herp, just off the 115 West, right where the old Arby's used to be."
}

function createHours() {
    const div = document.createElement("div")
    div.classList.add("hours")
    mainBody.append(div)

    const hours = document.querySelector(".hours")

    const header = document.createElement("p")
    header.setAttribute("id", "hours-header")
    hours.appendChild(header)
    header.innerText = "Hours"

    for (let i=0; i<7; i++) {
        const par = document.createElement("p")
        par.setAttribute("id", "day-" + (i+1) + ("-hours"))
        hours.appendChild(par)
    }

    const days = document.querySelectorAll(".hours > p")

    //days[0] is header.
    days[1].innerText = "Monday: 10:00 p.m. - 2:30 a.m."
    days[2].innerText = "Tuesday: 10:00 p.m. - 2:30 a.m."
    days[3].innerText = "Wednesday: 6:00 p.m. - 5:00 a.m."
    days[4].innerText = "Thursday: 11:00 p.m. - 1:00 a.m."
    days[5].innerText = "Friday: 12:00 a.m. - 12:30 a.m."
    days[6].innerText = "Saturday: 12:15 a.m. - 12:20 a.m."
    days[7].innerText = "Sunday: 5:00 a.m. - 5:00 p.m."
}

function createAddress() {
    const div = document.createElement("div")
    div.classList.add("address")
    mainBody.append(div)

    const address = document.querySelector(".address")

    const header = document.createElement("p")
    const bodyOne = document.createElement("p")
    const bodyTwo = document.createElement("p")

    address.appendChild(header)
    address.appendChild(bodyOne)
    address.appendChild(bodyTwo)

    header.setAttribute("id", "address-header")
    bodyOne.setAttribute("id", "address-body-one")
    bodyTwo.setAttribute("id", "address-body-two")

    header.innerText = "Address:"
    bodyOne.innerText = "505 Herp Drive"
    bodyTwo.innerText =  "Magnum County, EZT 97134-029-82142-92X"
}