//Test the dice correctly reflects value between 1 and value of the dice
function testDiceSelection(result) {
  console.log(result);
  if (result > document.getElementById("dice").value) {
    throw Error("Dice roll is out of scope");
  }
  console.log("+value text passed");

  if (result <= 0) {
    throw new Error("Does not support less than 1");
  }
  console.log("-value test passed");
}

function testClearButton() {
  let clear = document.getElementById("result").innerText;
  if (clear > 0) {
    throw Error("Button did not reset");
  }
  console.log("Results reset correctly");
}
// Write the functional code

function logResult(result) {
  const logList = document.getElementById("log-list");
  const newLogItem = document.createElement("li");
  newLogItem.textContent = `${result}`;
  logList.insertBefore(newLogItem, logList.firstChild);
}

document.getElementById("roll").addEventListener("click", function () {
  let dice = document.getElementById("dice").value;

  let result = Math.floor(Math.random() * dice) + 1;

  testDiceSelection(result);

  document.getElementById("result").innerText = result;

  logResult(result);
});

document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("result").innerText = 0;
  document.getElementById("log-list").innerHTML = "";

  testClearButton();
});

// Below is extended for my personal interest and practice. I wanted to try mouse over events.

document.getElementById("roll").addEventListener("mouseover", function () {
  document.getElementById("roll").style.color = "white";
  document.getElementById("roll").style.backgroundColor = "black";
});

document.getElementById("roll").addEventListener("mouseout", function () {
  document.getElementById("roll").style.backgroundColor = "#1c2841";
  document.getElementById("roll").style.color = "white";
});

document
  .getElementById("clearButton")
  .addEventListener("mouseover", function () {
    document.getElementById("clearButton").style.color = "white";
    document.getElementById("clearButton").style.backgroundColor = "black";

  });

document
  .getElementById("clearButton")
  .addEventListener("mouseout", function () {
    document.getElementById("clearButton").style.backgroundColor = "#1c2841";
    document.getElementById("clearButton").style.color = "white";
  });
