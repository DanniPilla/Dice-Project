# Dice-Project - Lab Exercise 8
This is my Lab Exercise 8 for module 1 of my Software Engineering course with the Institute of Data.
You have been hired by devsInc to create a landing page for their new project. They want to support people playing tabletop games from home and require a Dice Generator.
## Features:
The user should be able to choose different dice, such as a D6 or a D10 (number of faces). The user should be able to roll their chosen dice to see the random outcome.
1. Define on paper, all the user stories (functionalities) you will need for this page.
2. Make a simple storyboard of the user using the system.
3. Create a git repository for the project
4. Clone the project locally
5. Work on the project creating 2 branches, one for the UI, and one for rolling the dice, committing and merging when completed.
6. Create the roll dice function by passing an argument, in order to reutilise the same function multiple times
7. Write unit tests for the roll dice function.
8. When complete, push the content to your git repository.
# User Story
1. I want to select the type of dice from a series of options
2. Click a button to roll the dice for random result.
3. See result of the dice roll displayed on the screen.
# Story Board
## Scene 1: Opening the Website
1. User Action: The user opens the browser and types in the URL of the dice rolling application.
2. System Response: The main page of the application loads, displaying the title "Dice Generator," a dropdown menu for dice to choose from, "Roll Dice" button, "Clear" button, and a results section.
## Scene 2: Selecting a Dice
1. User Action: The user clicks on the dropdown menu.
2. System Response: The dropdown expands to show the dice options.
3. User Action: The user selects a dice.
4. System Response: The selected dice value is set.
## Scene 3: Rolling the Dice
1. User Action: The user clicks the "Roll Dice" button.
2. System Response: A random number between 1 and the selected dice value calculates.
3. System Response: The result is displayed in the "Result" section.
## Scene 4: Clearing the Result
1. User Action: The user clicks the "Clear" button.
2. System Response: The result area is reset, showing 0
