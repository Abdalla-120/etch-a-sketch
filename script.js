const container = document.querySelector("#container");


function createGrid (num) {
    container.innerHTML = "";

    for (let i = 0; i < (num*num); i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "box");
        newDiv.style.width = `calc(100vw/${num})`;
        newDiv.style.height = `calc(100vh/${num})`;

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        });

        container.appendChild(newDiv);
    }
};

const boxes = document.querySelectorAll(".box")

const trigger = document.querySelector("#trigger")

let grid = 16;
createGrid(grid);

trigger.addEventListener("click", () => {
    let newGrid = Number(prompt("Please enter the number of boxes:"));
    createGrid(newGrid);
});