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

    contact.appendChild(sectionOneHeader)
    contact.appendChild(sectionOne)
    contact.appendChild(sectionTwoHeader)
    contact.appendChild(sectionTwo)
    contact.appendChild(sectionThreeHeader)
    contact.appendChild(sectionThree)
    contact.appendChild(sectionFourHeader)
    contact.appendChild(sectionFour)

}