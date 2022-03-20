const gridContainer = document.querySelector('#gridContainer');

//Prompts the user to set the Grid Size upon page load.
let gridSideSize = prompt("Enter A Size Between 1 and 100", 32);

//Checks if the grid size it too small, large, or not entered and sets it to an appropriate size.
if (gridSideSize < 1){
    gridSideSize = 32;
    alert("ERROR, Size entered too small. Grid Size set to 32.");
} else if (gridSideSize > 100){
    gridSideSize = 100;
    alert("ERROR, Size entered too large. Grid set to max size of 100.");
} else if (isNaN(gridSideSize)){
    gridSideSize = 32;
    alert("ERROR, No size selected. Grid Size set to 32.");
}

//Adjust the layout and side of each grid item based on the grid size parameters.
gridContainer.style.gridTemplateColumns = `repeat(${gridSideSize}, 1fr)`;

//Loop to create and append grid item's, number of loops dependant on grid size selected.
for (i = (gridSideSize ** 2); i > 0; i--){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);

}


//Create a NodeList of all of the Grid Items inside of the container.
const clickedDiv = document.querySelectorAll('.grid-item');

//Assign an individual ID to each Grid Item for future referencing.
for (i = 0; i < clickedDiv.length;i++) {

    clickedDiv[i].setAttribute('id', i);
}


let toggleRainBowMode = 0;

//Toggles the CSS class of a grid item when hovered over.
gridContainer.addEventListener('mouseover', e => {
    
if (e.target.classList == "grid-item" || e.target.classList == "grid-item colouredItem" ){

    if (toggleRainBowMode === 0){

        clickedDiv[e.target.id].classList.add('colouredItem');
        
    } else if (toggleRainBowMode === 1){

        /*If Rainbow Mode is toggled on, create a random colour reference and apply it to the 
        ID of the element that triggered the event.*/

        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let itemElement = document.getElementById(e.target.id);
        itemElement.style.backgroundColor = "#" + randomColor;
        clickedDiv[e.target.id].classList.remove('colouredItem');
        }
    }
    console.log(e);
})  





//Resets the grid back to default.
function resetGrid() {


    for (i = 0; i < gridSideSize ** 2; i++){


        clickedDiv[i].classList.remove('colouredItem');
        let itemElement = document.getElementById(i);
        itemElement.style.backgroundColor = "";


    }
    
}


//Selects the reset button for applying an event handler with the Reset function.
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', e => {
        
    resetGrid()
})


//Selects the size selector button, and refreshes the page to allow the size to be changed.
const sizeSelectorButton = document.querySelector('#adjustSize');
sizeSelectorButton.addEventListener('click', e => {

    location.reload();
})

const rainbowMode = document.querySelector('#rainbowMode');
rainbowMode.addEventListener('click', e => {

    if (toggleRainBowMode === 0){
        toggleRainBowMode = 1;
    } else if (toggleRainBowMode === 1){
        toggleRainBowMode = 0;
    }

    console.log(toggleRainBowMode);
})


/*
TO DO LIST:

ADD COLOUR PICKER FUNCTIONALITY

*/