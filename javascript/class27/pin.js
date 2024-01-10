const generatePinInput = document.querySelector("#generatedPin");
const generatePinButton = document.querySelector("#generatePin");
const keyPadInput = document.querySelector("#keyPad");
const notifySection = document.querySelector(".notify-section");
const notifyCorectPin = document.querySelector(".correct-pin");
const notifyWrongPin = document.querySelector(".wrong-pin");
const submitButton = document.querySelector("#submitButton");
let tryValue = document.querySelector("#tryLeft");
let chance = parseInt(tryValue.innerText);

function generatedPin() {
    let randomPin = Math.floor(Math.random() * 9000 + 1000);
    generatePinInput.value = randomPin;
}

function inputValue(number) {

    if(number == "C") {
        keyPadInput.value = "";
    }

    if(generatePinInput.value === "") {
        alert("Please, generate a pin first.")
    } else {
        keyPadInput.value += number;
    }
}

notifySection.style.display = "none" ;

function checkPin() {
      if (generatePinInput.value === keyPadInput.value) {
        notifySection.style.display = "block" ;
        notifyCorectPin.style.display = "block" ;
        notifyWrongPin.style.display = "none" ;
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "green";
        generatePinButton.disabled = true;
        generatePinButton.style.backgroundColor = "green";
        submitButton.style.color = "white";
    } else {
        notifySection.style.display = "block" ;
        notifyCorectPin.style.display = "none" ;
        notifyWrongPin.style.display = "block" ;
        tryLeft();
    }
}
submitButton.addEventListener("click", checkPin); 

function tryLeft() {
    if (chance > 0) {
        chance = chance - 1;
    }
    tryValue.innerText = chance;
    console.log(tryValue)

    if(chance === 0) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "red";
        generatePinButton.disabled = true;
        generatePinButton.style.backgroundColor = "red";
        submitButton.style.color = "white";
    }
}

function removeSingleElement() {
    if (keyPadInput.value !== "") {
      let currentValue = keyPadInput.value;
      // Remove the last character from the currentValue string
      keyPadInput.value = currentValue.slice(0, -1);
    }
  }

