const displayDiv = document.createElement("div");
displayDiv.classList.add("displayDiv");
document.body.appendChild(displayDiv);

function makeCalculator () {
    const parentDiv = document.createElement("div"); // creating a container 
    parentDiv.classList.add("container");
    document.body.appendChild(parentDiv);
    for (let i = 1; i <= 5; i++) {
        const col = document.createElement("div");
        col.classList.add("cols");
            for (let j = 1; j <= 4; j++) {
                const row = document.createElement("button");
                row.classList.add("rows");
                if (i == 1 && j == 1) {
                    row.textContent = "AC"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 2 && j == 1) {
                    row.textContent = "7"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 3 && j == 1) {
                    row.textContent = "4"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 4 && j == 1) {
                    row.textContent = "1"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 5 && j == 1) {
                    row.textContent = "00"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 1 && j == 2) {
                    row.textContent = "%"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 2 && j == 2) {
                    row.textContent = "8"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 3 && j == 2) {
                    row.textContent = "5"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 4 && j == 2) {
                    row.textContent = "2"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 5 && j == 2) {
                    row.textContent = "0"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 1 && j == 3) {
                    row.textContent = "^"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 1 && j == 3) {
                    row.textContent = "^"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 2 && j == 3) {
                    row.textContent = "9"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 3 && j == 3) {
                    row.textContent = "6"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 4 && j == 3) {
                    row.textContent = "3"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 5 && j == 3) {
                    row.textContent = "."; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 1 && j == 4) {
                    row.textContent = "+"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 2 && j == 4) {
                    row.textContent = "-"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 3 && j == 4) {
                    row.textContent = "*"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 4 && j == 4) {
                    row.textContent = "/"; 
                    row.classList.add("calculator-buttons");
                }
                if (i == 5 && j == 4) {
                    row.textContent = "="; 
                    row.classList.add("calculator-buttons");
                }
                col.appendChild(row);
            }
        parentDiv.appendChild(col);
        }

        const allChildDivs = document.querySelectorAll(".rows");
            allChildDivs.forEach((eachDiv) => { // have to keep this forEach loop inside the functions so that color changing works on the calculator
                eachDiv.addEventListener("mouseenter", () => {
                    eachDiv.style.backgroundColor = "red";
                    eachDiv.style.color = "white";
                })
                eachDiv.addEventListener("mouseleave", () => {
                    eachDiv.style.backgroundColor = "white";
                    eachDiv.style.color = "red";
                })
                eachDiv.addEventListener ("click", () => {
                    eachDiv.style.backgroundColor = "red";
                    displayDiv.textContent = displayDiv.textContent + eachDiv.textContent;
                })
            })      
}

makeCalculator();