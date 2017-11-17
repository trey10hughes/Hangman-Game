var game = {
  stocks: 4,
  characters: ["mario", "luigi", "yoshi", "donkeykong", "link", "samus", "kirby", "fox", "pikachu", "jigglypuff", "captainfalcon", "ness", "peach", "bowser", "drmario", "zelda", "sheik", "ganondorf", "falco", "mewtwo", "pichu", "iceclimbers", "marth", "roy"],
  chosenWord: "",
  displayWord: [],
  guessedLetter: "",
  numBlanks: 0,

  chooseWord: function() {
    var randNum = Math.floor(Math.random() * 23);
    console.log("random number: " + randNum);

    this.chosenWord = this.characters[randNum];
    console.log(this.chosenWord);

    var displayArea = document.getElementById('display-word-area');

    for(var i = 0; i < this.chosenWord.length; i++){
      this.displayWord[i] = "_";
      console.log(this.displayWord[i]);
      displayArea.innerHTML += '<div class="character-display"></div>';
      var displayCharacter = document.getElementsByClassName("character-display");
      displayCharacter[i].innerHTML = this.displayWord[i];

    }; //makes the displayWord array to be shown in the display area and displays blank slots for letters

  }, //picks a random number 0-23
     //assigns index of characters array at the random number to chosenWord variable
     //initializes displayWord with chosenWord.length number of underscores
     //creates chosenWord.length divs inside the 'display-word-area' div
     //innerHTML for each of those divs is this.displayWord[i] (changed later as people enter characters)
     

  guessLetter: function(x) {
    // <input type="text" onkeyup="function for taking input and assigning to variable">

    for(var i = 0; i < this.chosenWord.length; i++){
      console.log(x);
      if (x === this.chosenWord.charAt(i)) {
        var displayCharacter = document.getElementsByClassName("character-display");
        displayCharacter[i].innerHTML = x;
      }
    }
  }, //takes the letter you entered and runs through chosenWord using char.at
     //checks for the letters that do match
     //letters that match will replace underscores in the display
     //if the letter doesn't match, take away 1 stock, add their input to letters guessed area

  }; //end of object
  


game.chooseWord();

document.onkeyup = function(event) {
      var letter = String.fromCharCode(event.key).toLowerCase();
      // console.log(choice);
      if (event.key === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"){
      game.guessLetter(event.key);
      }
      else{
        alert("incorrect input");
      }

      };



//take in input to start the game, that input will run the function to choose a word


//take in input again, checks to see if it is correct
//if it is correct it changes it to lowercase and assigns it to a variable
//pass that variable in to the functions where needed



