var scores, roundScore = 0, activePlayer, gamePlaying = true;;

init();
 
document.querySelector('.btn-roll').addEventListener('click', function () {
   if (gamePlaying) {
      //random number
      var dice = Math.floor(Math.random() * 6 + 1);

      //display result
      var diceDOM = document.querySelector('.diceimg');
      diceDOM.style.display = 'block';
      diceDOM.src = 'static/dice-' + dice + '.png';

      //update the random score if the rolled number was not a 1
      if (dice !== 1) {
         //Add Score
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
         //Next Player
         nextPlayer();
      }
   }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
   if (gamePlaying) {
      //Add Curent score to Global score
      scores[activePlayer] += roundScore;

      // Update UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      //Set current score to Zero once get added to Global score
      document.querySelectorAll('.currentscore')[0].innerHTML = 0;
      document.querySelectorAll('.currentscore')[1].innerHTML = 0;
      // Check player won or not

      if (scores[activePlayer] >= 100) {
         document.querySelector('#player-' + activePlayer).textContent = 'WINNER!';
         document.querySelector('.diceimg').style.display = 'none';

         gamePlaying = false;
      } else {
         // Next Player
         nextPlayer();
      }
   }
});

function nextPlayer() {
   //Next Player
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;

   document.querySelector('.player1container').classList.toggle('active');
   document.querySelector('.player2container').classList.toggle('active');
   document.querySelector('.diceimg').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);  //not need () coz it pass as an arg not call

function init() {
   scores = [0, 0];
   roundScore = 0;
   activePlayer = 0;
   gamePlaying = true;
   document.getElementById('score-0').textContent = 0;
   document.getElementById('score-1').textContent = 0;
   document.getElementById('current-0').textContent = 0;
   document.getElementById('current-1').textContent = 0;
   document.getElementById('player-0').textContent = 'PLAYER 1';
   document.getElementById('player-1').textContent = 'PLAYER 2';
   document.querySelector('.diceimg').style.display = 'none';

}

