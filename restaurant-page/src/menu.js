const loadMenu = () => {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    menu.appendChild(heading);

    const createMenuItem = (name, description, price) => {
        const item = document.createElement("div");
        item.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = description;

        const itemPrice = document.createElement("span");
        itemPrice.textContent = price;

        item.appendChild(itemName);
        item.appendChild(itemDescription);
        item.appendChild(itemPrice);

        menu.appendChild(item);
    };

    createMenuItem(
        "Classic Burger",
        "Beef patty, lettuce, tomato, and our special sauce.",
        "$10"
    );

    createMenuItem(
        "Chicken Pasta",
        "Creamy pasta with grilled chicken and fresh herbs.",
        "$12"
    );

    createMenuItem(
        "Margherita Pizza",
        "Tomato, mozzarella, basil, and olive oil.",
        "$11"
    );

    content.appendChild(menu);
};

export default loadMenu;