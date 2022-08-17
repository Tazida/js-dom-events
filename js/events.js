// option 1 directly set on the HTML element
// <button onclick="console.log(45)">Another click Me</button>

console.log("This is separate JS file");

// option 2: add onclick function
// IMPORTANT, WE WILL USE THIS
// <button onclick="makeRed()">Make red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// otption 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 3 another
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 final
// IMPORTANT
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
