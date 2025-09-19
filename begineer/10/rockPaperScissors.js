const selectPlayer1 = document.getElementById('player1');
const play = document.getElementById('playButton');

const computerChoiceText = document.getElementById('computerChoiceText');
const player1Choice = document.getElementById('player1Choice');

const result = document.getElementById('result');


const rps = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const index = Math.floor(Math.random() * rps.length);
    return rps[index];
}

function getResult(player, computer){
    if(player === computer)
        return 'tie';
    if( (player === 'rock' && computer === 'scissors') || 
        (player === 'paper' && computer === 'rock') || 
        (player === 'scissors' && computer === 'paper')
    )
        return 'winner';
    return 'loser';
}

play.addEventListener('click', () => {
    const playerSelection = selectPlayer1.value.toLowerCase();
    const computerSelection = getComputerChoice();

    player1Choice.textContent = `Your choice: ${playerSelection}`;
    computerChoiceText.textContent = `Choosing a Computer: ${computerSelection}`;
    result.textContent = `Result: ${getResult(playerSelection, computerSelection)}`;
    if(getResult(playerSelection, computerSelection) === 'winner')
        result.style.color = '#36c331ff';
    else if(getResult(playerSelection, computerSelection) === 'loser')
        result.style.color = '#f23737ff';
    else
        result.style.color = '#a8bfc9';

});




/* Long Way

// Random RPC
const rps = ['rock', 'paper', 'scissors'];
const index = Math.floor(Math.random() * 3);


const winner = ['winner', 'tie', 'loser'];

play.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 3);
    const computer = rps[index];

    computerChoiceText.textContent = `Choosing a Computer: ${computer}`;
    player1Choice.textContent = `Your choice: ${selectPlayer1.value}`;

    switch(selectPlayer1.value){
        case 'rock':
            if(computer === 'rock')
                result.textContent = `Result: ${winner[1]}`;
            else if(computer === 'paper')
                result.textContent = `Result: ${winner[2]}`;
            else
                result.textContent = `Result: ${winner[0]}`;
            break;
        case 'paper':
            if(computer === 'rock')
                result.textContent = `Result: ${winner[0]}`;
            else if(computer === 'paper')
                result.textContent = `Result: ${winner[1]}`;
            else
                result.textContent = `Result: ${winner[2]}`;
            break;
        case 'scissors':
            if(computer === 'rock')
                result.textContent = `Result: ${winner[2]}`;
            else if(computer === 'paper')
                result.textContent = `Result: ${winner[0]}`;
            else
                result.textContent = `Result: ${winner[1]}`;
            break;
    }
})

*/
