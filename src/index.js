// Initializing variables
const btns = document.getElementsByClassName("btn");
const resultText = document.getElementById("result");
const promptText = document.getElementById("prompt");

// Adding eventListener to each buttons
[...btns].forEach(btn => {
    btn.addEventListener("click", calculate);
});

// Calculates the input and renders the result
function calculate(event) {
    // Getting clicked element value
    let clickedElementValue = event.target.innerHTML;
    // Restricting user to enter "0" as the first digit of input
    if (resultText.innerHTML === "" && clickedElementValue === "0") {
        return;
    }
    // Restricting user to enter greater than 15 character of input
    if (resultText.innerHTML.length >= 15 && clickedElementValue !== "AC" && clickedElementValue !== "=") {
        return;
    }
    // Handling "=" functionality
    if (clickedElementValue === "=") {
        let result = eval(resultText.innerHTML);
        promptText.innerHTML = resultText.innerHTML;
        // Displaying decimal point if neccassery by rounding the result
        resultText.innerHTML = Math.round(result * 100) / 100;
    }
    // Handling "AC" functionality
    else if (clickedElementValue === "AC") {
        // Resetting prompt and result text 
        promptText.innerHTML = "";
        resultText.innerHTML = "";
    }
    // Handling other inputs
    else {
        resultText.innerHTML += clickedElementValue;
    }

}