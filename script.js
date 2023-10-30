const pageHeading = document.createElement("h1");
pageHeading.classList.add("pageHeading");
pageHeading.textContent = "Calculator";
document.body.appendChild(pageHeading);

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
                if (i == 1 && j == 1) row.textContent = "AC"; 
                if (i == 2 && j == 1) row.textContent = "7"; 
                if (i == 3 && j == 1) row.textContent = "4"; 
                if (i == 4 && j == 1) row.textContent = "1"; 
                if (i == 5 && j == 1) row.textContent = "00"; 
                if (i == 1 && j == 2) row.textContent = "%"; 
                if (i == 2 && j == 2) row.textContent = "8"; 
                if (i == 3 && j == 2) row.textContent = "5"; 
                if (i == 4 && j == 2) row.textContent = "2"; 
                if (i == 5 && j == 2) row.textContent = "0"; 
                if (i == 1 && j == 3) row.textContent = "^"; 
                if (i == 1 && j == 3) row.textContent = "^"; 
                if (i == 2 && j == 3) row.textContent = "9"; 
                if (i == 3 && j == 3) row.textContent = "6";
                if (i == 4 && j == 3) row.textContent = "3"; 
                if (i == 5 && j == 3) row.textContent = "."; 
                if (i == 1 && j == 4) row.textContent = "+"; 
                if (i == 2 && j == 4) row.textContent = "-"; 
                if (i == 3 && j == 4) row.textContent = "*"; 
                if (i == 4 && j == 4) row.textContent = "/"; 
                if (i == 5 && j == 4) row.textContent = "="; 
                row.classList.add("calculator-buttons")
                col.appendChild(row);
            }
        parentDiv.appendChild(col);
        }

        let currentValue;
        let nextValue;
        let mathematicalSymbol;
        let i = 0;

        function operate () {
            if (mathematicalSymbol === "+") {
                displayDiv.textContent = add(nextValue, currentValue);
                i = 0;
            }
            if (mathematicalSymbol === "-") {
                displayDiv.textContent = subtract(nextValue, currentValue);
                i = 0;
            }
            if (mathematicalSymbol === "*") {
                displayDiv.textContent = multiplication(nextValue, currentValue);
                i = 0;
            }
            if (mathematicalSymbol === "/") {
                displayDiv.textContent = division(nextValue, currentValue);
                i = 0;
            }
            if (mathematicalSymbol === "^") {
                displayDiv.textContent = power(nextValue, currentValue);
                i = 0;
            }
            if (mathematicalSymbol === "%") {
                displayDiv.textContent = percentage(currentValue);
                i = 0;
            }
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
                    if (eachDiv.textContent === "=") {
                        console.log(nextValue);
                        console.log(currentValue);
                        operate ();
                        currentValue = Number(displayDiv.textContent);
                    }
                    else if (eachDiv.textContent === "AC") {
                        displayDiv.textContent = " ";
                    }
                    else if (eachDiv.textContent === "+") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        } 
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "+"; }
                        i++;
                    }
                    else if (eachDiv.textContent === "-") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        }
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "-"; }
                        i++;
                    }
                    else if (eachDiv.textContent === "*") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        }
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "*";}
                        i++;
                    }
                    else if (eachDiv.textContent === "/") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        }
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "/";}
                        i++;
                    }
                    else if (eachDiv.textContent === "^") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        }
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "^";}
                        i++;
                    }
                    else if (eachDiv.textContent === "%") {
                        if (i > 0) {
                            alert("Click (=) button to continue");
                        }
                        else {
                        nextValue = currentValue;
                        displayDiv.textContent = " ";
                        mathematicalSymbol = "%";}
                        i++;
                    }
                    else {
                        displayDiv.textContent = displayDiv.textContent + eachDiv.textContent;
                        currentValue = Number(displayDiv.textContent);
                    }
                })
            })
}

function add (a, b) {
    let c = (a + b);
    c = parseFloat(c.toFixed(2));
    return c.toString();
}

function subtract (a, b) {
    let c = (a - b);
    c = parseFloat(c.toFixed(2));
    return c.toString();
}

function multiplication (a, b) {
    let c = (a * b);
    c = parseFloat(c.toFixed(2));
    return c.toString();
}

function division (a, b) {
    let c = (a / b)
    c = parseFloat(c.toFixed(2));
    return c.toString();
}

function power (inputA, inputB) {
    let total = inputA;
    for (let i = 1; i < inputB; i++) {
      total = total * inputA;
    }
    return total.toString(); 
}

function percentage (inputA) {
    let c = (inputA / 100);
    c = parseFloat(c.toFixed(2));
    return c.toString();
}

makeCalculator();