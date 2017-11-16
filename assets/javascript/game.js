var game = {
  stocks: 4,
  characters: ["mario", "luigi", "yoshi", "donkeykong", "link", "samus", "kirby", "fox", "pikachu", "jigglypuff", "captainfalcon", "ness", "peach", "bowser", "drmario", "zelda", "sheik", "ganondorf", "falco", "mewtwo", "pichu", "iceclimbers", "marth", "roy"],
  chosenWord: "",
  displayWord: [],

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
     //creates display array and initializes it with chosenWord.length number of underscores
     

  guessLetter: function() {

  }, //takes the letter you entered and runs through chosenWord using char.at
     //checks for the letters that do match
     //letters that match will replace underscores in the display
     //if the letter doesn't match, take away 1 stock, add their input to letters guessed area


  incorrectInput: function() {

    alert("incorrect input, please input a character.");

  } //if the user inputs something invalid, an alert will pop up saying it was invalid and it will keep asking for input till they do it right.


};

game.chooseWord();
