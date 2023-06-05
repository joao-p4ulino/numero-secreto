const lowerValue = 1;
const highestValue = 100;
const secretNumber = generateRandomNumber

function generateRandomNumber () {
    return parseInt(Math.random() * highestValue + 1);
};

const elementLowerValue = document.getElementById('lower-value');

elementLowerValue.innerHTML = lowerValue;

const elementHighestValue = document.getElementById('highest-value');

elementHighestValue.innerHTML = highestValue;
