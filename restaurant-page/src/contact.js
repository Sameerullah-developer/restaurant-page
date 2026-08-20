const loadContact = () => {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "📍 123 Restaurant Street";

    const phone = document.createElement("p");
    phone.textContent = "📞 555-1234";

    const hours = document.createElement("p");
    hours.textContent = "🕒 Open every day: 10:00 AM – 10:00 PM";

    contact.appendChild(heading);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(hours);

    content.appendChild(contact);
};

export default loadContact;