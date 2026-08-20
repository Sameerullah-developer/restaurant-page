import restaurantImage from "./Images/restaurant.jpg";

const loadHome = () => {
    const image = document.createElement("img");
    const content = document.querySelector("#content");
    image.src = restaurantImage;
    image.alt = "Our restaurant";
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    const description = document.createElement("p");
    description.textContent =
        "Fresh ingredients, delicious meals, and a warm atmosphere.";

    const message = document.createElement("p");
    message.textContent =
        "Come and enjoy a meal with us. We look forward to seeing you!";

    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(description);
    home.appendChild(message);
    content.appendChild(home);
};

export default loadHome;