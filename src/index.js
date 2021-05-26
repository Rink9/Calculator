const btns = document.getElementsByClassName("btn");
const resultText = document.getElementById("result");
const promptText = document.getElementById("prompt");

[...btns].forEach(btn => {
    btn.addEventListener("click", calculate);
});

function calculate(event) {
    let clickedElementValue = event.target.innerHTML;
    if (resultText.innerHTML === "" && clickedElementValue === "0") {
        return;
    }
    if (resultText.innerHTML.length >= 15 && clickedElementValue !== "AC" && clickedElementValue !== "=") {
        return;
    }
    if (clickedElementValue === "=") {
        let result = eval(resultText.innerHTML);
        promptText.innerHTML = resultText.innerHTML;
        resultText.innerHTML = Math.round(result * 100) / 100;
    } else if (clickedElementValue === "AC") {
        promptText.innerHTML = "";
        resultText.innerHTML = "";
    } else {
        resultText.innerHTML += clickedElementValue;
    }

}