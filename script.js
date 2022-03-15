const gridContainer = document.querySelector('#gridContainer');

let gridItem;
let gridSideSize = 5;

for (i = (gridSideSize * gridSideSize); i > 0; i--){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = (gridSideSize * gridSideSize) - (i - 1);
    gridContainer.appendChild(gridItem);

}


