const gridContainer = document.querySelector('#gridContainer');

let gridItem;
let gridSideSize = 16;

for (i = (gridSideSize ** 2); i > 0; i--){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    //gridItem.textContent = "I"
    gridContainer.appendChild(gridItem);

}

// MAKE FUNCTION THAT FINDS ID OF THE DIV CLICKED INSIDE THE GRID, AND SET ITS BACKGROUND COLOR TO BLACK.

/*const gridClick = document.querySelectorAll('.grid-item');
gridClick.foreach ((gridClick) => {
    

}
*/
