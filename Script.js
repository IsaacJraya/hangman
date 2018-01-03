var word = " ";
var words = ["team", "doctor", "doughnut"];
var guessedLetters = [];
var guesses = 6;

function startGame(){
    guessedLetters = [];
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    printWord();
    console.log(guesses);
}

function printWord(){
    var returnWord = " ";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) === -1){
            returnWord += " _ ";
        }else {
            returnWord += word[i];
        }
    }
    document.getElementById("guess").innerHTML = returnWord;
    return returnWord;

}

function guessLetter(){
    var scherman = " ";
    var win = " ";
    var letter = document.getElementById("letter").value;
    var checker = checkGuess(letter);
    if(checker) {
        guessedLetters.push(letter);
        var underscoreWord = printWord();
        if (underscoreWord.indexOf("_") === -1) {
            win += "Good Dub.";
        }
        document.getElementById("win").innerHTML = win;
        someGuesses(letter);
        document.getElementById("guessedOnes").innerHTML = scherman + "Guessed Letters: " + guessedLetters;
        document.getElementById("badguess").innerHTML = "";
    } else {
        someGuesses(letter);
    }

}

function someGuesses(letter){
    var L = " ";
    var printGuesses = "";
    if(word.indexOf(letter) === -1){
        guesses--;
    }
    document.getElementById("guesses").innerHTML = printGuesses + "Guesses left: " + guesses;
    if(guesses === 0){
        L += "Good L... Better luck next time";
    }
    document.getElementById("cousin").innerHTML = L;
}

function checkGuess(letter){
    var error = " ";
    if(guessedLetters.indexOf(letter) !== -1){
        error += "Stop -- you've already inquired if that number was existent";
        document.getElementById("badGuess").innerHTML = error;
        return false;
    } else {
        return true;
    }
}