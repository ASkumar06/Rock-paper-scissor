 
        let score=JSON.parse(localStorage.getItem('score'))||  { wins:0,
            loss:0,
            tie:0
            };

        updateScoreboard();
        

        function playGame(playerMove){
            const computerMove=moveGenerator();
            let result='';

            if(playerMove==='rock'){
                if(computerMove==='rock'){
                    result='Tie';
                }
                else if(computerMove==='paper'){
                    result='You lose';
                }
                else{
                    result='You win';
                }
            }
            if(playerMove==='paper'){
                if(computerMove==='rock'){
                    result='You win';
                }
                else if(computerMove==='paper'){
                    result='Tie';
                }
                else{
                    result='You lose';
                }
            }
            if(playerMove==='scissors'){
                if(computerMove==='rock'){
                    result='You lose';
                }
                else if(computerMove==='paper'){
                    result='You win';
                }
                else{
                    result='Tie';
                }
            }

            if(result==='You win'){
                score.wins+=1;
            }
            else if(result==='You lose'){
                score.loss+=1;
            }
            else{
                score.tie+=1;
            }
            localStorage.setItem('score',JSON.stringify(score));

            //alert(`${result} :-- You picked ${playerMove} while Computer picked ${computerMove}`);
            updateScoreboard();
            gameEnd(result);
            document.querySelector('.you-picked').innerHTML=`<img src="rock-paper-scissor icon/${playerMove}-emoji.png" width="54px" height="50px">`;
            document.querySelector('.computer-picked').innerHTML=`<img src="rock-paper-scissor icon/${computerMove}-emoji.png"  width="54px" height="50px">`;
            
        }
        function moveGenerator(){
            const randomNumber= Math.floor(Math.random()*3); // Chooses random number between 0 and 1
            let computerMove='';

            if(randomNumber===0){
                computerMove='rock';
            }
            else if(randomNumber===1){
                computerMove='paper';
            }
            else{
                computerMove='scissors';
            }
            console.log(computerMove);

            return computerMove;
        }

        function resetScore(){
            score={
                wins:0,
                loss:0,
                tie:0
            };
            updateScoreboard();
            document.body.style.backgroundColor='white'
        }

        function updateScoreboard(){
            document.querySelector('.win-column').innerHTML= score.wins;
            document.querySelector('.loss-column').innerHTML= score.loss;
            document.querySelector('.tie-column').innerHTML= score.tie;
            
        }

        function gameEnd(result){
            
            if(result==='You win'){
            document.body.classList.add('blinkgreen')
            setTimeout(function(){
                document.body.classList.remove('blinkgreen');
                document.body.style.backgroundColor='green'

            },1000) }
            else if(result==='You lose'){
                document.body.classList.add('blinkred')
            setTimeout(function(){
                document.body.classList.remove('blinkred');
                document.body.style.backgroundColor='red'

            },1000) }
            else{
                document.body.classList.add('blinkgrey')
            setTimeout(function(){
                document.body.classList.remove('blinkgrey');
                document.body.style.backgroundColor='grey'

            },1000) }
            
            

        }

            