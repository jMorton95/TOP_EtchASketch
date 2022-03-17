const gridContainer = document.querySelector('#gridContainer');

let gridSideSize = 64;

//Adjust the layout and side of each grid item based on the grid size parameters.
gridContainer.style.gridTemplateColumns = `repeat(${gridSideSize}, 1fr)`;

//Loop to create and append grid item's, number of loops dependant on grid size selected.
for (i = (gridSideSize ** 2); i > 0; i--){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
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

    if (e.target.classList == ('grid-item')) {

    clickedDiv[e.target.id].classList.toggle('colouredItem');
    clickedDiv[e.target.id].classList.toggle('grid-item');
    }
}) 