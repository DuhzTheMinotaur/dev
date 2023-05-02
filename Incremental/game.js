//Define our starting point value
let points = 0;
//Find the click button element in the HTML
const clickButton = document.getElementById('clickButton')

//Find the point display element in the HTML
const pointDisplay = document.getElementById('pointDisplay');

//Define the function that will add points when the button is clicked
function addPoints() {
    points += 1;
    pointDisplay.innerText = points;
}

// Add a click event listener to the button
clickButton.addEventListener('click', addPoints);

