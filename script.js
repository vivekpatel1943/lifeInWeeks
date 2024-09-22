const lifeForm = document.getElementById("lifeForm");
const displayBoardContainer = document.getElementById('displayBoardContainer');



const buttons = document.getElementsByClassName('button');

const yrsBtn = document.getElementById('lifeInYearsBtn');
const mnthsBtn = document.getElementById('lifeInMonthsBtn');
const weeksBtn = document.getElementById('lifeInWeeksBtn');


window.addEventListener('DOMContentLoaded', () => {
    function createBoard() {
     
        let birthday = document.getElementById('birthdate').value;
        birthday = new Date(birthday);

        let birthTime = birthday.getTime();

        let lifeExpectancy = document.getElementById('lifeExpectancy').value;
        lifeExpectancy = parseInt(lifeExpectancy);
        let deathYear = birthday.getFullYear() + lifeExpectancy;
        let deathDay = new Date(`${birthday.getDay} ${birthday.getMonth} ${deathYear}`);
        let deathTime = deathDay.getTime();
        let presentDate = new Date();
        let presentTime = presentDate.getTime();

        let lifeTime  = deathTime - birthTime;
        let lifeTimeInYears = Math.floor(lifeTime / (1000* 60*60*24*365)); 
        let lifeTimeInMonths = Math.floor(lifeTime / (1000* 60*60*24*30)); 
        let lifeTimeInWeeks = Math.floor(lifeTime / (1000* 60*60*24*7));  

        let lifeLived = presentTime - birthTime; 
        let lifeLivedInYears = Math.floor(lifeLived / (1000* 60*60*24*365)); 
        let lifeLivedInMonths = Math.floor(lifeLived / (1000* 60*60*24*30)); 
        let lifeLivedInWeeks = Math.floor(lifeLived / (1000* 60*60*24*7)); 

        let lifeLeft = deathTime - presentTime;
        let lifeLeftInYears = Math.floor(lifeLeft / (1000* 60*60*24*365)); 
        let lifeLeftInMonths = Math.floor(lifeLeft/ (1000* 60*60*24*30)); 
        let lifeLeftInWeeks = Math.floor(lifeLeft / (1000* 60*60*24*7)); 
      

        let rows = 0;
        let cols = 0;
        let cellSize = 0; //new variable for controlling cell Size
        let fontSize = 0;
       
        

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
                    // lifeExpectationInYears = lifeExpectation * 1;
                    // currentAgeInYears = currentAge * 1;
                    cols = Math.floor(lifeTimeInYears / 10);
                    rows = Math.floor(lifeTimeInYears / 1);;
                    cellSize = 10;
                    fontSize = 15;
                    if(screenwidth < 600){
                        cols = Math.floor(lifeTimeInYears / 20);
                        rows = Math.floor(lifeTimeInYears / 1);;
                    }
                    colorBoard(lifeTimeInYears, lifeLivedInYears)
                } else if (mnthsBtn.classList.contains('BtnActive')) {
                    // lifeTimeInMonths = lifeExpectation * 12;
                    // currentAgeInMonths = currentAge * 12;
                    cols = Math.floor(lifeTimeInMonths / 30);
                    rows = Math.floor(lifeTimeInMonths / 5);
                    cellSize = 5;
                    fontSize = 10;
                    if(screenwidth <= 600){
                        cols = Math.floor(lifeTimeInMonths / 120);
                        rows = Math.floor(lifeTimeInMonths / 20);
                    }
                    colorBoard(lifeTimeInMonths,lifeLivedInMonths)
                } else if (weeksBtn.classList.contains('BtnActive')) {
                    
                    cols = Math.floor(lifeTimeInWeeks/ 100);
                    rows = Math.floor(lifeTimeInWeeks/ 10);
                    cellSize = 1;
                    fontSize = 10;
                    if(screenwidth < 600){
                        cols = Math.floor(lifeTimeInWeeks / 400);
                        rows = Math.floor(lifeTimeInWeeks / 5);
                    }
                    colorBoard(lifeTimeInWeeks, lifeLivedInWeeks)

                }


         
            });
        }

        function colorBoard(lifeExpectancyTime, lifeLivedTime) {
            // Create the board dynamically using a table
            let table = document.createElement('table');
            table.style.borderCollapse = 'collapse';
            for (let i = 0; i < rows; i++) {
                let row = document.createElement('tr');
                for (let j = 1; j <= cols; j++) {
                    let cell = document.createElement('td');
                    cell.textContent = i * cols + j;
                    if (parseInt(cell.textContent) > lifeExpectancyTime) {
                        cell.style.display = 'none';
                    }
                    if (parseInt(cell.textContent) < lifeLivedTime) {
                        cell.style.backgroundColor = 'red';
                    }
                    if (parseInt(cell.textContent) > lifeLivedTime) {
                        cell.style.backgroundColor = 'green';
                    }
                    if (parseInt(cell.textContent) === lifeLivedTime) {
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



