let userScore=0;
let compScore=0;
let msg= document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choice=document.querySelectorAll(".choice");
choice.forEach((choice)=>{


    const genCompchoice=()=>{
        const option=["rock","paper","scissor"];
       const randIdx= Math.floor(Math.random()*3);
       return option[randIdx];
    }

    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
           
            msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";

        }else {
            compScore++;
            compScorePara.innerText=compScore;
           
            msg.innerText=`YOU LOSE ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";

        }
       
    }
    const playGame=(userChoice)=>{

       
       const compChoice= genCompchoice();
       
       if(userChoice==compChoice){
        
        msg.innerText="Its a Draw. Play Again";
        msg.style.backgroundColor="#081b31";

       }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin= compChoice=="scissor"?false:true;
        }else if(userChoice=="scissor"){
            userWin=  compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
       }

    }

    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id");
      
        playGame(userChoice);
    });

});