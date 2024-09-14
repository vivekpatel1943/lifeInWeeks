const lifeForm = document.getElementById("lifeForm");
const displayBoardContainer = document.getElementById('displayBoardContainer');
/* const lifeInYearsBtn = document.getElementById('lifeInYearsBtn');
const lifeInMonthsBtn = document.getElementById('lifeInYearsBtn');
const lifeInWeeksBtn = document.getElementById('lifeInYearsBtn'); */


const buttons = document.getElementsByClassName('button');
console.log(buttons);
console.log(buttons.length);
const yrsBtn = document.getElementById('lifeInYearsBtn');
const mnthsBtn = document.getElementById('lifeInMonthsBtn');
const weeksBtn = document.getElementById('lifeInWeeksBtn');

// console.log(screenwidth);

// function lifeBoard(lifeExpectation){

// }
window.addEventListener('DOMContentLoaded', () => {
    function createBoard() {
        let lifeExpectation = parseInt(document.getElementById('lifeExpectation').value);
        let currentAge = parseInt(document.getElementById('currentAge').value);

        let rows = 0;
        let cols = 0;
        let cellSize = 0; //new variable for controlling cell Size
        let fontSize = 0;
        let lifeExpectationInWeeks = 0;
        let lifeExpectationInMonths = 0;
        let lifeExpectationInYears = 0;
        let currentAgeInYears = 0;
        let currentAgeInMonths = 0;
        let currentAgeInWeeks = 0;
        

        // Clear the board container before creating a new board
        displayBoardContainer.innerHTML = "";

        // Add event listeners to buttons for toggling classes
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                let screenwidth =  window.innerWidth;
                // Clear the board container before creating a new board
                displayBoardContainer.innerHTML = "";
                // Remove active class from all buttons first
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove('BtnActive');
                    buttons[j].classList.add('BtnInactive');
                }
                // Add active class to the clicked button
                buttons[i].classList.add('BtnActive');
                buttons[i].classList.remove('BtnInactive');

                // Check which button is active and set rows and cols accordingly
                if (yrsBtn.classList.contains('BtnActive')) {
                    lifeExpectationInYears = lifeExpectation * 1;
                    currentAgeInYears = currentAge * 1;
                    cols = Math.floor(lifeExpectationInYears / 10);
                    rows = Math.floor(lifeExpectationInYears / 1);;
                    cellSize = 10;
                    fontSize = 15;
                    if(screenwidth < 600){
                        cols = Math.floor(lifeExpectationInYears / 20);
                        rows = Math.floor(lifeExpectationInYears / 1);;
                    }
                    colorBoard(lifeExpectationInYears, currentAgeInYears)
                } else if (mnthsBtn.classList.contains('BtnActive')) {
                    lifeExpectationInMonths = lifeExpectation * 12;
                    currentAgeInMonths = currentAge * 12;
                    cols = Math.floor(lifeExpectationInMonths / 20);
                    rows = Math.floor(lifeExpectationInMonths / 10);
                    cellSize = 5;
                    fontSize = 10;
                    if(screenwidth <= 600){
                        cols = Math.floor(lifeExpectationInMonths / 120);
                        rows = Math.floor(lifeExpectationInMonths / 5);;
                    }
                    colorBoard(lifeExpectationInMonths, currentAgeInMonths)
                } else if (weeksBtn.classList.contains('BtnActive')) {
                    lifeExpectationInWeeks = lifeExpectation * 52;
                    currentAgeInWeeks = currentAge * 52;
                    cols = Math.floor(lifeExpectationInWeeks / 60);
                    rows = Math.floor(lifeExpectationInWeeks / 10);
                    cellSize = 1;
                    fontSize = 10;
                    if(screenwidth < 600){
                        cols = Math.floor(lifeExpectationInWeeks / 400);
                        rows = Math.floor(lifeExpectationInWeeks / 5);
                    }
                    colorBoard(lifeExpectationInWeeks, currentAgeInWeeks)

                }


         
            });
        }

        function colorBoard(lifeExpectationTime, currentAgeTime) {
            // Create the board dynamically using a table
            let table = document.createElement('table');
            table.style.borderCollapse = 'collapse';
            for (let i = 0; i < rows; i++) {
                let row = document.createElement('tr');
                for (let j = 1; j <= cols; j++) {
                    let cell = document.createElement('td');
                    cell.textContent = i * cols + j;
                    if (parseInt(cell.textContent) > lifeExpectationTime) {
                        cell.style.display = 'none';
                    }
                    if (parseInt(cell.textContent) < currentAgeTime) {
                        cell.style.backgroundColor = 'red';
                    }
                    if (parseInt(cell.textContent) > currentAgeTime) {
                        cell.style.backgroundColor = 'green';
                    }
                    if (parseInt(cell.textContent) === currentAgeTime) {
                        cell.style.backgroundColor = 'blue';
                    }

                    cell.style.border = '1px solid black';
                    cell.style.padding = `${cellSize}px`;
                    cell.style.fontSize = `${fontSize}px`;
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            displayBoardContainer.appendChild(table);
        }

    }

    lifeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createBoard();
    });
});



