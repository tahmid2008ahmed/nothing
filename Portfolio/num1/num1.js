const thirdTwoOne = document.getElementsByClassName("third-two-one")[0];
const thirdTwoTwo = document.getElementsByClassName("third-two-two")[0];
const thirdTwoThree = document.getElementsByClassName("third-two-three")[0];
const input = document.getElementsByClassName("footer-input")[0];

thirdTwoTwo.style.display = "none";
thirdTwoThree.style.display = "none";
function first() {
  thirdTwoOne.style.display = "flex";
  thirdTwoTwo.style.display = "none";
  thirdTwoThree.style.display = "none";
}

function second() {
  thirdTwoOne.style.display = "none";
  thirdTwoTwo.style.display = "flex";
  thirdTwoThree.style.display = "none";
}

function third() {
  thirdTwoOne.style.display = "none";
  thirdTwoTwo.style.display = "none";
  thirdTwoThree.style.display = "flex";
}
