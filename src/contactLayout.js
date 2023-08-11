const mainBody = document.querySelector(".main-body")

export function createContact() {
    const div = document.createElement("div")
    div.classList.add("contact")
    mainBody.appendChild(div)

    contactHeader()
    contactBody()
}

function contactHeader() {
    const contact = document.querySelector(".contact")

    const contactHeader = document.createElement("p")
    contactHeader.setAttribute("id", "contact-header")
    contactHeader.innerText = "Contact Us!"

    contact.appendChild(contactHeader)
}

const createPar = (idAttribute) => {
    const par = document.createElement("p")
    par.setAttribute("id", idAttribute)
    return par
}

function contactBody() {
    const contact = document.querySelector(".contact")

    const containerDiv = document.createElement("div")
    const divOne = document.createElement("div")
    const divTwo = document.createElement("div")
    const divThree = document.createElement("div")
    const divFour = document.createElement("div")

    containerDiv.classList.add("container-holder")

    contact.appendChild(containerDiv)

    const containerHolder = document.querySelector(".container-holder")


    containerHolder.appendChild(divOne)
    containerHolder.appendChild(divTwo)
    containerHolder.appendChild(divThree)
    containerHolder.appendChild(divFour)

    divOne.classList.add("section-one-container")
    divTwo.classList.add("section-two-container")
    divThree.classList.add("section-three-container")
    divFour.classList.add("section-four-container")

    const sectionOneContainer = document.querySelector(".section-one-container")
    const sectionTwoContainer = document.querySelector(".section-two-container")
    const sectionThreeContainer = document.querySelector(".section-three-container")
    const sectionFourContainer = document.querySelector(".section-four-container")

    const sectionOneHeader = createPar("contact-section-one-header")
    const sectionOne = createPar("contact-section-one")

    const sectionTwoHeader = createPar("contact-section-two-header")
    const sectionTwo = createPar("contact-section-two")

    const sectionThreeHeader = createPar("contact-section-three-header")
    const sectionThree = createPar("contact-section-three")

    const sectionFourHeader = createPar("contact-section-four-header")
    const sectionFour = createPar("contact-section-four")

    sectionOneHeader.innerText = "General Inquiries"
    sectionTwoHeader.innerText = "Health and Safety Concerns"
    sectionThreeHeader.innerText = "Poison Control Referrals"
    sectionFourHeader.innerText = "Charity"

    sectionOneContainer.appendChild(sectionOneHeader)
    sectionOneContainer.appendChild(sectionOne)
    sectionTwoContainer.appendChild(sectionTwoHeader)
    sectionTwoContainer.appendChild(sectionTwo)
    sectionThreeContainer.appendChild(sectionThreeHeader)
    sectionThreeContainer.appendChild(sectionThree)
    sectionFourContainer.appendChild(sectionFourHeader)
    sectionFourContainer.appendChild(sectionFour)

}