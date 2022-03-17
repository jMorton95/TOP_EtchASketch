const gridContainer = document.querySelector('#gridContainer');

//let gridItem;
let gridSideSize = 16;

for (i = (gridSideSize ** 2); i > 0; i--){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    //gridItem.textContent = "I"
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
addEventListener('mouseover', (e) => {

    //if ((addEventListener('mousedown') (e)) = true){

    clickedDiv[e.target.id].classList.toggle('colouredItem');
    clickedDiv[e.target.id].classList.toggle('grid-item');

}) 


addEventListener('mousedown', (e) => {

    console.log(e);
})





    
   
    


//findClickedDiv();




