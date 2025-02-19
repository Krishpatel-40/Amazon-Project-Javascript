 // const score = {
      //     wins:0,
      //     losses:0,
      //     ties:0
      // };   so instead of usin it we use
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };
      // console.log(JSON.parse(localStorage.getItem('score')));
      // //to store last time's  score
      //   if (score === null) {    //OR  (!score)
      //      score = {
      //       wins: 0,
      //       losses: 0,
      //       ties: 0,
      //     };
      //   }
      let computerMove = "";
      function pickComputerMove() {
        const randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "Rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "Paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "Scissors";
        }
        return computerMove;
      }

      //from  advanced functions
      let isAutoPlaying = false;
      let intervalId;
      function autoPlay() {
        if (!isAutoPlaying) {
         intervalId =  setInterval(function(){
            const playerMove =  pickComputerMove();
            playgame(playerMove);
          },1000);
          isAutoPlaying=true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying=false;
        }
      }


      document.body.addEventListener('keydown',(event)=>{   //event is a object that contains all the information about the event
        if (event.key === 'r') {
          playgame('Rock'); 
        }else if(event.key === 'p'){
          playgame('Paper');
        }else if (event.key === 's'){
          playgame('Scissors');
        };
      });


      
      function playgame(playerMove) {
        computerMove = pickComputerMove();
        let result = "";
        if (playerMove == "Scissors") {
          if (computerMove == "Rock") {
            result = "You Lose :-(";
          } else if (computerMove == "Paper") {
            result = "You Win!!  :-)";
          } else if (computerMove == "Scissors") {
            result = "Tie!";
          }
        } else if (playerMove == "Paper") {
          if (computerMove == "Rock") {
            result = "You Win!!  :-)";
          } else if (computerMove == "Paper") {
            result = "Tie!";
          } else if (computerMove == "Scissors") {
            result = "You Lose :-(";
          }
        } else if (playerMove == "Rock") {
          if (computerMove == "Rock") {
            result = "Tie!";
          } else if (computerMove == "Paper") {
            result = "You Lose :-(";
          } else if (computerMove == "Scissors") {
            result = "You Win!!  :-)";
          }
        }
        if (result === "You Win!!  :-)") {
          score.wins++;
        } else if (result === "You Lose :-(") {
          score.losses++;
        } else if (result === "Tie!") {
          score.ties++;
        }
        localStorage.setItem("score", JSON.stringify(score));
        updateScore();
        document.querySelector(".result").innerHTML = ` ${result}`;
        document.querySelector(".moves").innerHTML = ` You : <img src="images/${playerMove}-emoji.png"class="move-icon">
      <img src="images/${computerMove}-emoji.png"class="move-icon" >
     : Computer `;
        // document.querySelector(
        //   ".moves"
        // ).innerHTML = `You: ${playerMove} - ${computerMove} Computer`;
        // alert(`You Picked : ${playerMove} \n Computer Picked : ${computerMove}\n${result}
        // wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`);
      }
      function updateScore() {
        document.querySelector(
          ".score"
        ).innerHTML = ` wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`;
      }