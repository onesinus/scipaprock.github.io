// Gunting = 0;  Batu = 1; Kertas = 2

let scissors        = document.getElementById("gunting");
let rock            = document.getElementById("batu");
let paper           = document.getElementById("kertas");

scissors.addEventListener("click", function(){
    onChoose(0)
});
rock.addEventListener("click", function(){
    onChoose(1);
});
paper.addEventListener("click", function(){
    onChoose(2);
});


function onChoose(idChoosen) {
    let player_image    = document.getElementById("your-image").children[2];
    switch (idChoosen) {
        case 0:
            player_image.src = "img/gunting.png";
            break;
        case 1:
            player_image.src = "img/batu.png";
            break;
        case 2:
            player_image.src = "img/kertas.png";
            break;    
    }

    player_image.hidden = false;
    let computerChoice = setComputerChoice();
    setScore(idChoosen,computerChoice);
}

function setComputerChoice(){
    let computer_image    = document.getElementById("enemy-image").children[2];

    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computer_image.src = "img/gunting.png";
            break;
        case 1:
            computer_image.src = "img/batu.png";
            break;
        case 2:
            computer_image.src = "img/kertas.png";
            break;
    }
    computer_image.hidden = false;
    return randomNumber;
}

function setScore(yourChoice, computerChoice){
    let yourScore = document.getElementById("your-score").children[0];
    let computerScore = document.getElementById("enemy-score").children[0];

    switch (yourChoice) {
        case 0:
            if (computerChoice === 1) {
                computerScore.innerText++;
            }else if (computerChoice === 2) {
                yourScore.innerText++; 
            }else{
                
            }            
            break;
        case 1:
            if (computerChoice === 0) {
                yourScore.innerText++; 
            }else if (computerChoice === 2) {
                computerScore.innerText++;
            }else{
                
            }   
            break;         
        case 2:
            if (computerChoice === 0) {
                computerScore.innerText++;
            }else if (computerChoice === 1) {
                yourScore.innerText++; 
            }else{
                
            }
            break;             
    }
}