
//Initiate the document:
$(document).ready(function() {

  //assign variable to select which defintion to display by counting:
  var guessCount = 0;
  //assign var to count correct answers:
  var correctCount = 0;
  //assign var to count total answers:
  var totalCount = 0;
  var timeUp;
  //create array "words" of objects containing defintions with matching words:
  var words = [
      {"word":"Zombie", "definition":"A human corpse that comes back to life after death, eats human flesh, and will infect you with a single bite"},
      {"word":"Cyclops", "definition":"The one-eyed monster that made an appearance in The Odyssey"},
      {"word":"T-Rex", "definition":"A terrifying dinosaur from the pre-historic era, huge teeth, carnivor, with little arms"},
      {"word":"Yeti", "definition":"Beware of the ice monster and watch out for blizzards"},
      {"word":"ManBearPig", "definition":"a scary monster which is 'half man, half bear and half pig' and roams the Earth attacking humans for no reason at all. He also demands throughout the episode that people take him 'cereal', which he cannot distinguish from the correct use of the word 'seriously.' "},
  ];


  //hide goku:
  $("#goku").hide();
  $("#zombieBob").hide();
  $("#scaredBob").hide();
  $('#winnerGif').hide();
    alert('It is up to YOU, to escourt Spongebob safely back to his pineapple in Bikini Bottoms UNSCATHED. There will be zombies along your journey. Use your "KAMEHAMEHAMEHA" on the zombies BEFORE they get to Spongebob by typing in the word that matches the shown definition and PRESS ENTER.')

  //call function to display defintions using counter:
  displayDefinition(words, guessCount);


  //detect when instructions buttin clicked and show instructions
  $('#instructions').click(function(){
    alert('It is up to YOU, to escourt Spongebob safely back to his pineapple in Bikini Bottoms UNSCATHED. There will be zombies along your journey. Use your "KAMEHAMEHAMEHA" on the zombies BEFORE they get to Spongebob by typing in the word that matches the shown definition and PRESS ENTER.');
  });

  //detect reset button clicked and reload the page:
  $('#reset').click(function() {
    location.reload();
  });

  //detect when the enter key is pressed:
  $(document).keypress(function(e) {
    if(e.which == 13) {
      //prevent enter form from reloading the page:
      e.preventDefault();
      clearTimeout(timeUp);
      $("#sideWalk").clearQueue();
      evaluateAnswer();
    }
  });

// establish function for displaying definitions:
function displayDefinition(words, guessCount) {
  if (correctCount < totalCount) {
    $("#normalBob").hide();
    $("#zombieBob").show();
  }
  $("#sideWalk").css({
    "left": 0,
  });
  $('#sideWalk').show();
  $('#defDisplay').html('Definition: ' + words[guessCount].definition);
  
  $("#sideWalk").animate({
    "left": $('#animationBox').width() - $('#sideWalk').width(),
   }, 9000, function() {
   } );
  timeUp = setTimeout(evaluateAnswer, 9000);

  // moveDiv();
  }


//establish a function to calculate percentage scored:
function calculatePercentage(correctCount, totalCount) {
  $('#percentScoreBox').html(correctCount + '/' + totalCount);
}

//   $('#percentScoreBox').html(correctCount/totalCount*100 + '%   A.K.A.  ' + correctCount + '/' + totalCount );
// }

function evaluateAnswer() {
    var userEntry = $('#userEntry').val();
    //fetch the matching word:
    var answer = words[guessCount].word;
    $("#sideWalk").css({
      "left": 0,
      });
    //check to see if userEntry equals answer:
    if (userEntry.toLowerCase() === answer.toLowerCase()) {
       alert("(PRESS ENTER NOW TO SUMMON KAMEHAMEHAMEHA)");
      $("#sideWalk").stop();
      $("#goku").show();
      window.setTimeout(function() {
      $("#sideWalk").hide();
      $("#goku").hide();
     
      
      }, 1350);

      // $("#sideWalk").hide();
      // window.setTimeout(function() {
      // $("#sideWalk").show();
      // }, 1350);


      
      //appear goku, blast zombie
      // $("images/goku.gif").show();
      //then zombie dissapear
      
      //then goku disappear
      //tally one correct answer:
      correctCount++;
      totalCount++;
      }else{

      $('#feedback').html('You have failed to rescue our beloved friend Spongebob from the infection. The only known cure is back at the start of the game, click "antidote" to save him, then make it through with no mistakes to keep our friend alive!');

      //tally one wrong answer:
      totalCount++;
    }
        //call function to display percentage correct
    calculatePercentage(correctCount, totalCount);
    document.getElementById('userEntry').value='';
    
    if (guessCount === 4) {
      if (correctCount === totalCount) {

      $('#feedback').html('Congratulations! You have successfully protected Spongebob from the outbreak, and back to Bikini Bottoms!');

      $("#goku").hide();
      $("#zombieBob").hide();
      $("#scaredBob").hide();
      $('#animationBox').hide();
      $('#userEntry').hide();
      $('#title').hide();
      $('#winnerGif').show();

      } else {
      alert("You made it to the END!....unfortunately you've been bitten and only have a matter of time before you will turn into a zombie as well.....Try again to see if you can make it through untouched...if you dare...");
    }
    } else {

      window.setTimeout(function() {
      // prepare counter to cycle to the next defintion:
      guessCount++;
      // display next definition in list:
      displayDefinition(words, guessCount); 
      }, 1500); 
    } 
  }
});