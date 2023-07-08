const rulesButton = document.getElementById('rules-button');
const rulesPopup = document.getElementById('rules-popup');
const closeButton = document.querySelector('.close-button');

rulesButton.addEventListener('click', () => {
    rulesPopup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    rulesPopup.style.display = 'none';
});
function opennewpage() {
    window.location.href='won.html';
}
let playerScore = localStorage.getItem('playerScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;

updateScore();
function updateScore() {
    document.getElementById('cs_score').innerText=computerScore;
    document.getElementById('ys_score').innerText=playerScore;
}
function play(playerChoice) {
    
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() *3)];
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
         document.getElementById('next-button').style.display = 'block';
        playerScore++;
        document.getElementById('win-area').style.display='block';
        if(playerChoice==='rock'){
            document.getElementById('user-rock-win').style.display='flex';
        }
        else if(playerChoice==='paper'){
            document.getElementById('user-paper-win').style.display='flex';
        }
        else{
            document.getElementById('user-scissor-win').style.display='flex';
        }
        if(computerChoice==='rock'){
            document.getElementById('cpu-rock-win').style.display='flex';
        }
        else if(computerChoice==='paper'){
            document.getElementById('cpu-paper-win').style.display='flex';
        }
        else {
            document.getElementById('cpu-scissor-win').style.display='flex';
        }
    
    } 
    else if((computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'paper' && playerChoice === 'rock') ||
    (computerChoice === 'scissors' && playerChoice === 'paper')) 
    {
         document.getElementById('next-button').style.display='none';
        document.getElementById('lost-area').style.display='block';
        if(playerChoice==='rock'){
            document.getElementById('user-rock-lost').style.display='flex';
        }
        else if(playerChoice==='paper'){
            document.getElementById('user-paper-lost').style.display='flex';
        }
        else {
            document.getElementById('user-scissor-lost').style.display='flex';
        }
        if(computerChoice==='rock'){
            document.getElementById('cpu-rock-lost').style.display='flex';
        }
        else if(computerChoice==='paper'){
            document.getElementById('cpu-paper-lost').style.display='flex';
        }
        else {
            document.getElementById('cpu-scissor-lost').style.display='flex';
        }
    
        computerScore++;
    }
    else { 
         document.getElementById('next-button').style.display='none';
        if(playerChoice==='rock'){
            document.getElementById('user-rock-tie').style.display='flex';
        }
        else if(playerChoice==='paper'){
            document.getElementById('user-paper-tie').style.display='flex';
        }
        else {
            document.getElementById('user-scissor-tie').style.display='flex';
        }
        if(computerChoice==='rock'){
            document.getElementById('cpu-rock-tie').style.display='flex';
        }
        else if(computerChoice==='paper'){
            document.getElementById('cpu-paper-tie').style.display='flex';
        }
        else {
            document.getElementById('cpu-scissor-tie').style.display='flex';
        }
    
        document.getElementById('tie-area').style.display='flex';
    }
    updateScore();
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
   
    document.getElementById('game-area').style.display='none';
    
}
function gamepage() {
    location.reload();
}
