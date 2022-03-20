const gridContainer = document.querySelector('#gridContainer');

let gridSideSize = 64;

//Adjust the layout and side of each grid item based on the grid size parameters.
gridContainer.style.gridTemplateColumns = `repeat(${gridSideSize}, 1fr)`;

//Loop to create and append grid item's, number of loops dependant on grid size selected.
for (i = (gridSideSize ** 2); i > 0; i--){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.classList.add('defaultGridItem');
    gridContainer.appendChild(gridItem);

}

// MAKE FUNCTION THAT FINDS ID OF THE DIV CLICKED INSIDE THE GRID, AND SET ITS BACKGROUND COLOR TO BLACK.

//Create a NodeList of all of the Grid Items inside of the container.
const clickedDiv = document.querySelectorAll('.grid-item');

//Assign an individual ID to each Grid Item for future referencing.
for (i = 0; i < clickedDiv.length;i++) {

    clickedDiv[i].setAttribute('id', i);
}


//Toggles the CSS class of a grid item when hovered over.
addEventListener('mouseover', e => {

    
    if (e.target.classList == "grid-item defaultGridItem"){

   
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