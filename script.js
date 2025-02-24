
// Dialog interaction
const dialog = document.getElementById("infoDialog");
// document.getElementById("openDialog").addEventListener("click", () => {
//     dialog.showModal();
// });
// document.getElementById("closeDialog").addEventListener("click", () => {
//     dialog.close();
// });

// Fetching API data
const dogImage = document.getElementById("dogImage");
const fetchDogButton = document.getElementById("fetchDog");

async function fetchDog() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        dogImage.src = data.message;
    } catch (error) {
        console.error("Error fetching dog image:", error);
    }
}

fetchDogButton.addEventListener("click", fetchDog);
fetchDog(); // Load initial dog image
