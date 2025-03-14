let userScore = 0;
let aiScore = 0;

const picks = document.querySelectorAll(".pick");
const msg = document.querySelector("#msg");

const userScoreX = document.querySelector("#user-score");
const aiScoreX = document.querySelector("#AI-score")


const getAIPick = ()=> {
  const opt = ["Stone", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * 3);
  return opt[random];
};

const drawGame = () => {
  msg.innerText =  "Game Draw!! Play again."
  msg.style.backgroundColor = "#4b4b4b";
};

const showWinner = (userWin, userPick, aiPick) =>{
  if (userWin){
    userScore++;
    userScoreX.innerText = userScore;
    msg.innerText =  `Congrats, You Win. Your ${userPick} beats ${aiPick}`;
    msg.style.backgroundColor = "green";
  } else{
    aiScore++;
    aiScoreX.innerText = aiScore;
    msg.innerText = `Alas! You Lose. ${aiPick} beats Your ${userPick}`
    msg.style.backgroundColor = "red";

  }
}

const gamePlay = (userPick) => {

  // * generate AI pick
  const aiPick= getAIPick ();

  if (userPick === aiPick){
    drawGame();
  } else {
    let userWin = true;
    if (userPick === "Stone") {
      userWin = aiPick==="Paper" ? false : true;
    } else if (userPick === "Paper"){
      userWin = aiPick === "Scissor" ? false : true;
    } else {
      userWin = aiPick === "Stone" ? false : true;
    }
    showWinner(userWin, userPick, aiPick);
  }

};


picks.forEach((pick) => {
  pick.addEventListener("click", () => {
    const userPick = pick.getAttribute("id");
    gamePlay(userPick)
  });
});