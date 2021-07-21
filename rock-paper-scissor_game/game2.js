window.onload = () => {
    init();
    let gamePlaying, count=0, i=0, j=0;

    const firstChoice = document.querySelector('.submittedAnswer');
    const secondChoice = document.querySelector('.submitChoice');
    let finalAns = document.querySelector('.bindableAns');
    let finalAns1 = document.querySelector('.selectedAnswer');
    let score1 = document.querySelector('.current-score-1');
    let score2 = document.querySelector('.current-score-2');  
    let restart = document.querySelector('.restart');  

    firstChoice.addEventListener('click', () => {
        if(gamePlaying = true){
            let enteredValue = document.querySelector('#player-1-input').value;
            finalAns.textContent = enteredValue;
            if(enteredValue === ''){
                alert('Please enter your choice!')
            }else{
                nextPlayer();
            }
        }
    });
    secondChoice.addEventListener('click', () => {
        if(gamePlaying = true){
            let enterdValue1 = document.querySelector('#secondInput').value;
            finalAns1.textContent = enterdValue1;
            if(enterdValue1 === ''){
                alert('Please enter your Choice!');
            }else{
                result();
                setTimeout( () => {
                    document.querySelector('.bindableAns').textContent = '';
                    document.querySelector('.selectedAnswer').textContent = '';
                },1000)
            }
        }       
    });

    restart.addEventListener('click', () => {    
        document.querySelector('#name-0').textContent = 'PLAYER 1';
        document.querySelector('#name-1').textContent = 'PLAYER 2'; 
        init();   
        i = 0;
        j = 0;
        count = 0;
        score1.textContent = '0';
        score2.textContent = '0';
        document.querySelector('#name-0').classList.remove('win');
        document.querySelector('#name-1').classList.remove('win');
        document.querySelector('.parent-1').classList.remove("active");
        document.querySelector('.parent-2').classList.remove("active");
        document.querySelector('.parent-1').classList.add("active");
        // document.querySelector('.parent-1').style.backgroundColor = 'lightgray';
        // winnerBack2 =document.getElementsByClassName('parent-2');
        // winnerBack2[0].style.backgroundColor = 'darkgray';
        // winnerBack =document.getElementsByClassName('parent-1');
        // winnerBack[0].style.backgroundColor = 'darkgray';
    })

    const nextPlayer = () => {
        document.querySelector('.parent-1').classList.toggle('active');
        document.querySelector('.parent-2').classList.toggle('active');
        const firstPlayer = document.querySelector('.parent-1');
        if(firstPlayer.classList.contains('active')){
            document.querySelector('#player-1-input').removeAttribute("disabled");
            document.querySelector('.submittedAnswer').removeAttribute("disabled");
            document.querySelector('#secondInput').setAttribute("disabled", "true");
            document.querySelector('.submitChoice').setAttribute("disabled","true");
        }else{
            document.querySelector('#player-1-input').setAttribute("disabled","true");
            document.querySelector('.submittedAnswer').setAttribute("disabled", "true");
            document.querySelector('#secondInput').removeAttribute("disabled");
            document.querySelector('.submitChoice').removeAttribute("disabled");
        }
    }    



    const result = () => {
        let input1 = document.querySelector('#player-1-input').value;
        let input2 = document.querySelector('#secondInput').value;
        if(input1 === 'rock' && input2 === 'scissor'){
            i++;
            if(count < 7){
                score1.textContent = i;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = '';       
            }if(count === 7){
                score1.textContent = i;
                winner();
            }
        }else if(input1 === 'scissor' && input2 === 'rock'){
            j++;
            if(count < 7){
                score2.textContent = j;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = ''; 
            }if(count === 7){
                score2.textContent = j;
                winner();
            }
        }else if(input1 === 'rock' && input2 === 'paper'){
            j++;
             if(count < 7){
                score2.textContent = j;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = ''; 
            }if(count === 7){
                score2.textContent = j;
                winner();
            }
        }else if(input1 === 'paper' && input2 === 'rock'){
            i++;
            if(count < 7){
                score1.textContent = i;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = ''; 
            }if(count === 7){
                score1.textContent = i;
                winner();
            }
        }else if(input1 === 'paper' && input2 === 'scissor'){
            j++;
            if(count < 7){
                score2.textContent = j;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = ''; 
            }
            if(count === 7){
                score2.textContent = j;
                winner();
            }
        }else if(input1 === 'scissor' && input2 === 'paper'){
            i++;
            if(count < 7){
                score1.textContent = i;
                count++;
                nextPlayer();
                document.querySelector('#player-1-input').value = '';
                document.querySelector('#secondInput').value = ''; 
            }if(count === 7){
                score1.textContent = i;
                winner();
            }
        }else{
            alert('Dismissed round, Try again!')
            nextPlayer();
            document.querySelector('#player-1-input').value = '';
            document.querySelector('#secondInput').value = ''; 
        }
    }

    const winner = () => {
        if(i > j){
            document.querySelector('#name-0').textContent = 'WINNER';
            document.querySelector('#name-0').classList.add('win');
            document.querySelector('#name-1').textContent = 'YOU LOSE';
            document.querySelector('.parent-1').classList.add('winPlayer');
        }else{
            document.querySelector('#name-0').textContent = 'YOU LOSE';
            document.querySelector('#name-1').textContent = 'WINNER';
            document.querySelector('#name-1').classList.add('win');
            document.querySelector('.parent-2').classList.add('winPlayer');
            
        }
        document.querySelector('#player-1-input').setAttribute("disabled","true");
        document.querySelector('.submittedAnswer').setAttribute("disabled","true");
        document.querySelector('#secondInput').setAttribute("disabled", "true");
        document.querySelector('.submitChoice').setAttribute("disabled","true");
        gamePlaying = false;
        document.querySelector('.parent-1').classList.remove('active');
        document.querySelector('.parent-2').classList.remove('active');
    }
    
}
const init = () => {
    gamePlaying = true;
    document.querySelector('#player-1-input').removeAttribute("disabled");
    document.querySelector('.submittedAnswer').removeAttribute("disabled");
    document.querySelector('#secondInput').setAttribute("disabled", "true");
    document.querySelector('.submitChoice').setAttribute("disabled","true");
    document.querySelector('.parent-1').classList.remove("active");
    document.querySelector('.parent-2').classList.remove("active");
    document.querySelector('#name-0').classList.remove('win');
    document.querySelector('#name-1').classList.remove('win');
    document.querySelector('.parent-1').classList.add("active");
    document.querySelector('.parent-1').classList.remove('winPlayer');
    document.querySelector('.parent-2').classList.remove('winPlayer');
    document.querySelector('.bindableAns').textContent = '';
    document.querySelector('.selectedAnswer').textContent = '';
    
}