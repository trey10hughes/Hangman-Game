var game = {
  stocks: 4,
  characters: ["mario", "luigi", "yoshi", "donkeykong", "link", "samus", "kirby", "fox", "pikachu", "jigglypuff", "captainfalcon", "ness", "peach", "bowser", "drmario", "zelda", "sheik", "ganondorf", "falco", "mewtwo", "pichu", "iceclimbers", "marth", "roy"],
  chosenWord: "",
  displayWord: [],
  guessedLetter: "",
  numBlanks: 99,
  letterFound: false,
  numWins: 0,
  guessedLettersArchive: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
  guessCount: 0, 
  guessedBefore: false,

  chooseWord: function() {

    var randNum = Math.floor(Math.random() * 23);
    console.log("random number: " + randNum);

    this.chosenWord = this.characters[randNum];
    console.log(this.chosenWord);

    this.numBlanks = this.chosenWord.length;
    console.log("number of blanks to fill: " + this.numBlanks);

    var stockCountDisplay = document.getElementById('stockCount');
    console.log("stocks: " + this.stocks);
    stockCountDisplay.innerHTML = this.stocks;

    var displayArea = document.getElementById('display-word-area');
    displayArea.innerHTML = ""

    for(var i = 0; i < this.chosenWord.length; i++){
      this.displayWord[i] = "_";
      console.log(this.displayWord[i]);
      displayArea.innerHTML += '<div class="character-display col-xs-1"></div>';
      var displayCharacter = document.getElementsByClassName("character-display");
      displayCharacter[i].innerHTML = this.displayWord[i];

    }; //makes the displayWord array to be shown in the display area and displays blank slots for letters

  }, //picks a random number 0-23
     //assigns index of characters array at the random number to chosenWord variable
     //initializes displayWord with chosenWord.length number of underscores
     //creates chosenWord.length divs inside the 'display-word-area' div
     //innerHTML for each of those divs is this.displayWord[i] (changed later as people enter characters)
     

  guessLetter: function(x) {
    console.log("guess letter function called");

    this.guessedBefore = false;
    
    for (var i = 0; i < this.guessedLettersArchive.length; i++){
        if (this.guessedLettersArchive[i] === x){
          this.guessedBefore = true;
        }  
    }

    if (this.guessedBefore === true) {
        alert("you already guessed this letter");
    }
    if (this.guessedBefore === false) {
      this.guessedLettersArchive[this.guessCount] = x;
      this.guessCount ++;

      this.letterFound = false;
      for (var i = 0; i < this.chosenWord.length; i++){
      
        if (x === this.chosenWord.charAt(i)) { // if what you input is in the word
          var displayCharacter = document.getElementsByClassName("character-display");
          displayCharacter[i].innerHTML = x;
          this.numBlanks --;
          console.log("number of letters left to find: " + this.numBlanks);
           this.letterFound = true; //notating that it was in the word
        }      
      }
      if (this.letterFound === false) {
        var guessDisplay = document.getElementById('letters-guessed');
        guessDisplay.innerHTML += x + " ";
        console.log("not correct, you entered: " + x);

        //lose a stock on the display
        var stockCountDisplay = document.getElementById('stockCount');
        this.stocks --;
        console.log("stocks: " + this.stocks);
        stockCountDisplay.innerHTML = this.stocks;
      }

    }   
    }, //end of guessLetter
  
  
   //takes the letter you entered and runs through chosenWord using char.at
     //checks for the letters that do match
     //letters that match will replace underscores in the display
     //if the letter doesn't match, take away 1 stock, add their input to letters guessed area

  checkForWinLoss: function() {
    if (this.stocks < 1) {
      alert("you lost all your stocks! Press ok for new game.");
      console.log("stocks left: " + this.stocks);

      var stockCountDisplay = document.getElementById('stockCount');
      this.stocks = 4;
      stockCountDisplay.innerHTML = this.stocks; //resets stock count to 4 and updates display

      var guessDisplay = document.getElementById('letters-guessed');
      guessDisplay.innerHTML = ""; //clears out letters guessed

      this.numBlanks = 99; //resets numBlanks to 99

      this.guessCount = 0;//reset guesscount to 0

      for (var i = 0; i < this.guessedLettersArchive.length; i++){
        this.guessedLettersArchive[i] = " ";
      }//resets guessed letter archive back to blank

      this.chooseWord();

    }
    if (this.numBlanks < 1) {
      this.numWins ++;
      console.log("wins: " + this.numWins);
      alert("you win! Press ok for new game.");
      this.stocks = 4;
      this.numBlanks = 99;

      var stockCountDisplay = document.getElementById('stockCount');
      this.stocks = 4;
      stockCountDisplay.innerHTML = this.stocks; //resets stock count to 4 and updates display

      var guessDisplay = document.getElementById('letters-guessed');
      guessDisplay.innerHTML = ""; //clears out letters guessed

      this.numBlanks = 99; //resets numBlanks to 99

      var winCountDisplay = document.getElementById('numberOfWins');
      winCountDisplay.innerHTML = "Wins: " + this.numWins;

      this.guessCount = 0;//reset guesscount to 0
      for (var i = 0; i < this.guessedLettersArchive.length; i++){
        this.guessedLettersArchive[i] = " ";
      }//resets guessed letter archive back to blank
      this.chooseWord();
    }
  }//end of check for win losss   

  //function to reset stocks to 4, clear letters guessed, and numBlanks to 99.

  }; //end of object
  


game.chooseWord();

document.onkeyup = function(evt) {

  evt = evt || window.event;
  var charCode = evt.which || evt.keyCode;
  var charStr = String.fromCharCode(charCode);
    if (/[a-z]/i.test(charStr)) {

      game.guessLetter(event.key);
      game.checkForWinLoss();

    }
};

//error message for inputting something you've already put before
//put every input into an array
//check the array every time you input something new
//if the item already exists in the array, alert "you already guessed this"







