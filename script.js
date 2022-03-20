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
} else {
    gridSideSize = 32;
    alert("ERROR, No size entered. Grid Size set to 32.");
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


//Toggles the CSS class of a grid item when hovered over.
addEventListener('mouseover', e => {

    
    if (e.target.classList == "grid-item"){

   
    clickedDiv[e.target.id].classList.add('colouredItem');
}
}) 


//Resets the grid back to default.
function resetGrid() {


    for (i = 0; i < gridSideSize ** 2; i++){


        clickedDiv[i].classList.remove('colouredItem');

    }
    
}


//Selects the reset button for applying an event handler with the Reset function.
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', e => {
        
    resetGrid()
})




/*
TO DO LIST:

ADD RESET BUTTON FUNCTIONALITY
ADD COLOUR PICKER FUNCTIONALITY
ADD A SELECTOR FOR THE SIZE OF THE GRID (WITHIN A REALISTIC MARGIN)

*/