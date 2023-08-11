const mainBody = document.querySelector(".main-body")

export function createContact() {
    const div = document.createElement("div")
    div.classList.add("contact")
    mainBody.appendChild(div)

    contactHeader()
}

function contactHeader() {
    const contact = document.querySelector(".contact")

    const contactHeader = document.createElement("p")
    contactHeader.setAttribute("id", "contact-header")
    contactHeader.innerText = "Contact Us!"

    contact.appendChild(contactHeader)
}

function contactBody() {
    const contact = document.querySelector(".contact")

    const sectionOneHeader = document.createElement("p")
    const sectionTwoHeader = document.createElement("p")
    const sectionThreeHeader = document.createElement("p")
    const sectionFourHeader = document.createElement("p")

    sectionOneHeader.setAttribute("id", "contact-section-one-header")
    sectionTwoHeader.setAttribute("id", "contact-section-two-header")
    sectionThreeHeader.setAttribute("id", "contact-section-three-header")
    sectionFourHeader.setAttribute("id", "contact-section-four-header")

    sectionOneHeader.innerText = "General Inquiries"
    sectionTwoHeader.innerText = "Health and Safety Concerns"
    sectionThreeHeader.innerText = "Poison Control Referrals"
    sectionFourHeader.innerText = "Charity"

}