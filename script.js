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

//Create a NodeList of all of the Grid Items inside of the container.
const clickedDiv = document.querySelectorAll('.grid-item');

//Assign an individual ID to each Grid Item for future referencing.
for (i = 0; i < clickedDiv.length;i++) {

    clickedDiv[i].setAttribute('id', i);
}


function findClickedDiv() {

   console.log(clickedDiv);

}

addEventListener('click', function(e) {
        if (e.className == 'grid-item'){  //FIX THIS TO MAKE IT ONLY TRIGGER IF THE DIV IS IN THE GRID.
            console.log(e);

        }
    })

    



    
   
    


//findClickedDiv();




