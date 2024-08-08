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

    //Mouse over event for roll button
    document.getElementById("roll").addEventListener("mouseover", mouseOver);
    document.getElementById("roll").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("roll").style.color = "red";
    }
    
    function mouseOut() {
      document.getElementById("roll").style.color = "black";
    }
//Mouse over event for clear button
    document.getElementById("clearButton").addEventListener("mouseover", mouseOver);
    document.getElementById("clearButton").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("clearButton").style.color = "red";
    }
    
    function mouseOut() {
      document.getElementById("clearButton").style.color = "black";
    }