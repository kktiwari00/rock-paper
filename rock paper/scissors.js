let userScore=0;
let comScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#com-score");

let restbtn=document.querySelector(".rst");

const genCompChoice = () => {
const options=["rock","paper","scissors"];
const randIDX= Math.floor(Math.random()*3);
return options[randIDX];

};
restbtn.addEventListener("click",()=>{

    userScore=0;
    comScore=0;
    document.getElementById("user-score").textContent=userScore;
    document.getElementById("com-score").textContent=comScore;

document.getElementById("msg").textContent="Play your move";
msg.style.backgroundColor="#081b31"


});

const drawGame = () =>{
    msg.innerText= "Draw!"
    msg.style.backgroundColor= "black";
};

const showWinner =(userWin,userchoice,compchoice) =>{
        if(userWin){
            userScore++;
            userScorepara.innerText=userScore;
            msg.innerText= `You Win! ${userchoice} beats your ${compchoice}`;
            msg.style.backgroundColor= "green";
        }
        else{
            comScore++;
            compScorepara.innerText=comScore;
            msg.innerText= `You Lose. ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor= "red";
        }
    };

const playGame =(userchoice) => {
    console.log("user choice=",userchoice);

    const compchoice=genCompChoice();
    console.log("comp choice=", compchoice);

    if(userchoice===compchoice){
       drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock") {
            //scissors,paper
            userWin=compchoice==="paper"? false : true;
        } else if(userchoice=== "paper"){
            //rock,scissors
            userWin=compchoice=== "rock"? true :false;
        }
        else {
            //rock,paper
            userWin=compchoice=== "rock"? false:true;
        }
        showWinner(userWin,userchoice, compchoice);
    }
};
    

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    });
});
