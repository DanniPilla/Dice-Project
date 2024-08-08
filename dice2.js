//Test documentation

//Test the dice correctly reflects value between 1 and value of the dice
function testDiceSelection() {
  
  let dice = document.getElementById('dice');

        if ('dice' != '6') {
          throw Error("Did roll is out of scope");
        }
            console.log("Dice Selection Test Passed");
}




// Write the functional code

document.getElementById('roll').addEventListener('click', function() {
   
    // Get the selected dice value
    let dice = document.getElementById('dice').value;
    
    // Generate a random number based on the dice value
   let result = Math.floor(Math.random() * dice) + 1;
    
    // Display the result
    document.getElementById('result').textContent = result;

    document.getElementById('D6');

});


    document.getElementById('clearButton').addEventListener('click', function(){
        document.getElementById('result').textContent = 0;

    });


    // Below is extended for my personal interest and practice. I wanted to try mouse over events.

    document.getElementById("roll").addEventListener("mouseover", mouseOver);
    document.getElementById("roll").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("roll").style.color = "red";
    }
    
    function mouseOut() {
      document.getElementById("roll").style.color = "black";
    }

    document.getElementById("clearButton").addEventListener("mouseover", mouseOver);
    document.getElementById("clearButton").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("clearButton").style.color = "red";
    }
    
    function mouseOut() {
      document.getElementById("clearButton").style.color = "black";
    }

    testDiceSelection()
  