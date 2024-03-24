let us = 0;
let cs = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usp=document.querySelector("#user-score");
const csp=document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        us++;
        usp.innerText=us;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        cs++;
        csp.innerText=cs;
        msg.innerText=`You Lost! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    const compchoice = getCompChoice();
    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userWin === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice == "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});