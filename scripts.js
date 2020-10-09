/*$$$$$$$                /$$                     /$$                                                
| $$__  $$              |__/                    | $$                                                
| $$  \ $$    /$$$$$$    /$$   /$$$$$$$     /$$$$$$$  /$$ $$$$$   /$$$$$$$    /$$$$$$$    /$$$$$$$$
| $$$$$$$/   |____  $$  | $$  | $$__  $$   /$$__  $$  \ $$$_  $$ | $$__  $$  | $$__  $$  | $$_____/
| $$_ $$/     /$$$$$$$  | $$  | $$  \ $$  | $$  | $$  | $$  \__/ | $$  \ $$  | $$  \ $$  |  $$$$$$ 
| $$ \ $$    /$$__  $$  | $$  | $$  | $$  | $$  | $$  | $$       | $$  | $$  | $$  | $$   \____  $$
| $$  \ $$  |  $$$$$$$  | $$  | $$  | $$  |  $$$$$$$  | $$       |  $$$$$$/  | $$$$$$$/   /$$$$$$$/
|__/   \_/   \_______/  |__/  |__/  |__/   \_______/  |__/        \______/   | $$____/   |_______/ 
 ___________________________________________________________________________ | $$ _________________                
/___________________________________________________________________________ | $$ _______________*/
console.log("Let's count the raindrops as they pour:"); //                   |__/
console.log("One million, two million, three million, four.");

/*$$$$$$$  /$$                               /$$                       /$$
| $$__  $$| $$                              |__/                      | $$
| $$  \ $$| $$  /$$$$$$  /$$$$$$$  /$$$$$$$  /$$ /$$$$$$$   /$$$$$$   | $$
| $$$$$$$/| $$ |____  $$| $$__  $$| $$__  $$| $$| $$__  $$ /$$__  $$  | $$
| $$____/ | $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$  |__/
| $$      | $$ /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$    
| $$      | $$|  $$$$$$$| $$  | $$| $$  | $$| $$| $$  | $$|  $$$$$$$   /$$
|__/      |__/ \_______/|__/  |__/|__/  |__/|__/|__/  |__/ \____  $$  |__/
 ________________________________________________________  /$$  \ $$ _____    
/________________________________________________________ |  $$$$$$/_____/    
                                                           \_____*/

// [*COMPLETED*] HURDLE NUMERO UNO:  GET THE KEYBOARD INPUT WORKING!!!  VERY IMPORTANT!!!
// [*COMPLETED*]ALSO: MAKE SURE INPUT IS STABLE AND CONSISTENT!!

// Probably will want to store the list of strings for the PROMPT object in a separate file of some sort.  Make sure to ask Tosin about it.

// THE TIMER!  MAKE SURE TO LEARN HOW TO IMPLEMENT A ROUND TIMER!!

// VERY IMPORTANT NOTE ABOUT THE KEYBOARD LISTENER!!!  IMPLEMENT A FUNCTION TO CLEAR THE PRIMARY INPUT ARRAY AND CALL IT AT ALL GAMESTATE CHANGES!!

//___________________________________________________________________________________________________________________
//<!--*** UNCHANGING OBJECTS ***-->

//<!--TITLE-->
//<!--FOOTER-->

const screens = document.querySelectorAll(".screen");

// NOTE TO SELF ABOUT SCREENS ARRAY:
// INDEX ZERO - WELCOME SCREEN
// INDEX ONE -- INGAME SCREEN
// INDEX TWO -- ENDGAME SCREEN
// INDEX THREE- RULES SCREEN
// INDEX FOUR - HIGHSCORES SCREEN
console.log(screens); // KEEP THIS LOGGER AROUND IN CASE YOU NEED TO CHECK THE SCREENS ARRAY LATER

//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: WELCOME SCREEN ***-->

//<!--BUTTON: NEW GAME-->
//<!--BUTTON: HOW TO PLAY-->
//<!--BUTTON: HIGH SCORES-->

const buttNew = document.querySelector(".buttNew");
const buttRules = document.querySelector(".buttRules");
const buttScores = document.querySelector(".buttScores");

console.log(buttNew); // TEST LOGGER
console.log(buttRules); // TEST LOGGER
console.log(buttScores); // TEST LOGGER

// STATECHANGE BUTTONS LETS GET IT
buttNew.addEventListener("click", gotoGame);
function gotoGame() {
  console.log("FIRED! function gotoGame"); // TEST LOGGER
  screens[1].classList.remove("hidden");
  screens[0].classList.add("hidden");
  newGame(); // NOTE TO SELF:  DECLARE NEWGAME FUNCTION!!
}

buttRules.addEventListener("click", gotoRules);
function gotoRules() {
  console.log("FIRED! function gotoRules"); // TEST LOGGER
  screens[3].classList.remove("hidden");
  screens[0].classList.add("hidden");
}

buttScores.addEventListener("click", gotoScores);
function gotoScores() {
  console.log("FIRED! function gotoScores"); // TEST LOGGER
  screens[4].classList.remove("hidden");
  screens[0].classList.add("hidden");
}

//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: INGAME SCREEN ***-->

//<!--TIMER-->
//<!--PROMPT-->
//<!--PRIMARY INPUT-->
//<!--BUTTON: BEGIN GAME-->
//<!--BUTTON: LEAVE GAME-->

//<!--OBJECT: INPUT HISTORY-->
//<!--Sub-Objects: Each word entered, in historical order.-->

//<!--OBJECT: CATEGORIES-->
//<!--Sub-Objects: 3 Letters, 4 Letters, 5 Letters, 6 Letters, 7 Letters, 8 Letters, 9 Letters, 10 Letters, 11 Letters, 12+ Letters-->
//<!--Sub-Objects: Quantities for each category-->

/*$$$$$$$$ /$$                                   /$$  /$$$$$$ /$$    /$$
|__  $$__/|__/                                  | $$ |__ $$_/| $$$  /$$$
   | $$    /$$ /$$$$$$/$$$$   /$$$$$$ /$$ $$$$$ | $$   | $$  | $$ $/$ $$
   | $$   | $$| $$_  $$_  $$ /$$__  $$\ $$$_  $$| $$   | $$  | $$\ $/|$$
   | $$   | $$| $$ \ $$ \ $$| $$$$$$$$| $$  \__/|__/   |__/  |__/ \/ |_/
   | $$   | $$| $$ | $$ | $$| $$_____/| $$                              
   | $$   | $$| $$ | $$ | $$|  $$$$$$$| $$       /$$                    
   |__/   |__/|__/ |__/ |__/ \_______/|__/      |__/                    
 _______________________________________________________________________
/_____________________________________________________________________*/

const buttStart = document.querySelector(".buttStart");

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var bigTimer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(bigTimer);
      if (isGameActive) {
        gotoEndgame();
        game.entriesToButtons();
      } else if (!isGameActive) {
        clearHistory();
      }
      game.endGame();
    }
  }, 1000);
}

buttStart.addEventListener("click", function () {
  if (!isGameActive) {
    var timeLimit = 30,
      display = document.querySelector(".timer");
    startTimer(timeLimit, display);
    game.startGame();
  }
});
//________________________________________________________________________________________
// END OF "TIMER!" SCRIPT

/*$$   /$$                     /$$       /$$             /$$     /$$  /$$$$$$ /$$    /$$
| $$  /$$/                    | $$      |__/            | $$    | $$ |__ $$_/| $$$  /$$$
| $$ /$$/   /$$$$$$  /$$   /$$| $$       /$$  /$$$$$$$ /$$$$$$  | $$   | $$  | $$ $/$ $$
| $$$$$/   /$$__  $$| $$  | $$| $$      | $$ /$$_____/|_  $$_/  | $$   | $$  | $$\ $/|$$
| $$  $$  | $$$$$$$$| $$  | $$| $$      | $$|  $$$$$$   | $$    |__/   |__/  |__/ \/ |_/
| $$\  $$ | $$_____/| $$  | $$| $$      | $$ \____  $$  | $$ /$$                        
| $$ \  $$|  $$$$$$$|  $$$$$$$| $$$$$$$$| $$ /$$$$$$$/  |  $$$$/ /$$                    
|__/  \__/ \_______/ \____  $$|________/|__/|_______/    \___/  |__/                    
 ___________________ /$$  | $$ _________________________________________________________
/__________________ |  $$$$$$/_________________________________________________________/
                     \_____*/

let testIn = document.querySelector(".testInput");
let mainIn = document.querySelector(".input");
console.log(testIn.innerText);
let input = [];

document.addEventListener("keydown", function (event) {
  if (event.keyCode <= 90 && event.keyCode >= 65) {
    input.push(event.key);
  } else if (event.keyCode === 32) {
    input.push(" ");
  } else if (event.key === "Backspace") {
    if (event.ctrlKey) {
      if (input[input.length - 1] === " ") {
        while (input[input.length - 1] === " ") {
          input.pop();
        }
        let last = input.lastIndexOf(" ");
        input.splice(last - input.length + 1);
      } else {
        let last = input.lastIndexOf(" ");
        input.splice(last - input.length + 1);
      }
    } else {
      input.pop();
    }
  } else if (event.key === "Enter") {
    if (isGameActive) {
      game.sendInput(input); // NOTE TO SELF:  DECLARE FUNCTION "SENDINPUT"
    } else {
      console.log(input.join("")); // TEST LOGGER
    }
    input = [];
  }
  testIn.innerText = input.join("");
  if (isGameActive) {
    mainIn.innerText = input.join("");
  }
  console.log(event.keyCode);
});
//________________________________________________________________________________________
// END OF "KEYLIST!" SCRIPT

/*$$$$$                                   
 /$$__  $$                                  
| $$  \__/  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
| $$ /$$$$ |____  $$| $$_  $$_  $$ /$$__  $$
| $$|_  $$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$
| $$  \ $$ /$$__  $$| $$ | $$ | $$| $$_____/
|  $$$$$$/|  $$$$$$$| $$ | $$ | $$|  $$$$$$$
 \______/  \_______/|__/ |__/ |__/ \_______/
 ___________________________________________                                          
/_________________________________________*/

//======================================================================================================================================
// BEHOLD THE MIGHTY ARRAY OF VARIOUS LETTERS:
var prompts = [
  "he",
  "po",
  "bu",
  "wo",
  "hi",
  "am",
  "il",
  "ob",
  "os",
  "le",
  "sc",
  "dr",
  "in",
  "ger",
  "com",
  "lit",
  "sou",
  "ent",
  "den",
  "sle",
  "car",
  "alt",
  "fra",
  "mea",
  "pre",
  "par",
  "con",
  "com",
  "str",
];
//======================================================================================================================================

//======================================================================================================================================
let game; // MASTER GAME OBJECT VARIABLE
//======================================================================================================================================

//======================================================================================================================================
//    var log = document.querySelectorAll(".history")                // DISPLAY TARGET FOR ALL INPUT ITEMS
//======================================================================================================================================

//======================================================================================================================================
let isGameActive = false; // MASTER GAMESTATE CONTROL VARIABLE
//======================================================================================================================================

class Game {
  constructor(array) {
    this.prompt = array[Math.floor(Math.random() * array.length)];
    console.log(this.prompt); // TEST LOGGER
    this.history = [];
    this.keeplist = [];
    this.player = "";
    this.finished = false;
  }

  sendInput(array) {
    for (i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        array.splice(i, 1);
      }
    }
    this.history.push(array.join(""));
    this.keeplist.push(true);

    // APPEND NEW this.history[end] item to HISTORY DOM OBJECT
    let node = document.createElement("p");
    node.classList.add("entry");
    let textnode = document.createTextNode(
      String(this.history[this.history.length - 1] + ", ")
    );
    node.appendChild(textnode);

    var target = document.getElementsByClassName("history");
    console.log(target); // TEST LOGGER
    // NOTE TO SELF: REPLACE THIS JANK WITH A PROPER FOR LOOP FOR THE TARGET ARRAY
    target[0].appendChild(node);
    target[1].appendChild(node);

    console.log(this.history[this.history.length - 1], " was entered!");
    console.log(
      "History: ",
      this.history.length,
      " entries.  Keeplist: ",
      this.keeplist.length,
      " entries."
    );
  }

  rmInput(n) {}

  startGame() {
    isGameActive = true;
    console.log("FIRED! class function Game.startGame"); // TEST LOGGER
    mainIn.innerText = "Start Typing!";
    document.querySelector(".prompt").innerText = game.prompt;
    document.querySelector(".buttStart").classList.add("hidden");
  }

  endGame() {
    isGameActive = false;
    console.log("FIRED! class function Game.endGame"); // TEST LOGGER
    document.querySelector(".buttStart").classList.remove("hidden");
  }

  entriesToButtons() {
    let entries = document.getElementsByClassName("entry");
    console.log("FIRED: entriesToButtons: ");
    console.log(entries);
    for (i = 0; i < entries.length; i++) {
      let numClass = "entry" + String(i + 1);
      entries[i].classList.add(numClass);
      entries[i].addEventListener("click", function () {
        console.log("FIRED! function removeEntry for item " + i);
        let numClass = "entry" + String(i + 1);
        console.log("HISTORY: " + this.history);
        //   this.history.splice(i, 1);
        let entry = document.querySelector(numClass);
        console.log(entry);
        entry.classList.add("hidden");
      });
    }
  }
}

function newGame() {
  console.log("FIRED! function newGame");
  game = new Game(prompts);
  mainIn.innerText = "Hit 'Start Game' when you're ready!";

  // PASS PROMPT TO HTML DISPLAY ELEMENT:
  document.querySelector(".prompt").innerText =
    "Your prompt for this round is: " + game.prompt;
}

// GOTO ENDGAME SCREEN (AT END OF GAME DUH)
function gotoEndgame() {
  console.log("FIRED! function gotoEndgame"); // TEST LOGGER
  screens[2].classList.remove("hidden");
  screens[1].classList.add("hidden");
}

function clearHistory() {
  console.log("FIRED! function clearHistory");
}

/*

|$$$$$                  $$
|$$ |$$ /$$$$   $$$$, $$$$$$
|$$$$$ |$$ |$$  \$\     $$
|$$    |$$ |$$    \$\   $$
|$$     \$$$$  '$$$$$    $$$

*/

//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: POSTGAME SCREEN ***-->

//<!--BUTTONS!!  SO MANY BUTTONS!!-->
//<!--Sub-Objects: Each entry from the INPUT HISTORY object in the GAME screen becomes its own button.-->

//<!--BUTTON: "SUBMIT"-->
//<!--TOTAL SCORE-->

//<!--OBJECT: CATEGORIES-->
//<!--Sub-Objects: 3 Letters, 4 Letters, 5 Letters, 6 Letters, 7 Letters, 8 Letters, 9 Letters, 10 Letters, 11 Letters, 12+ Letters-->
//<!--Sub-Objects: Quantities for each category-->

// NOTE TO SELF: FIX RELATIONSHIP BETWEEN GAME.HISTORY, GAME.KEEPLIST, AND DOM "ENTRY" OBJECTS
// ALSO:  Ask Tosin for help on preserving the ability to manipulate individual entries.

// NOTES FROM TOSIN:
// Instead of just pushing the INPUT to a new HISTORY index,
// Instead push OBJECTS  with a property "isRight" set to TRUE when constructed.
/*
arrayOfWords.forEach(word => {
    //display word
    document.querySelector(".class").innerHTML = word.value
    button.addEventListener('click', () => {
        word.isRight = false
    })
})

*/

const buttSubmit = document.querySelector(".buttSubmit");

buttSubmit.addEventListener("click", submitScore);

function submitScore() {
  console.log("FIRED! function submitScore"); // TEST LOGGER
  console.log("HISTORY: " + game.history); // TEST LOGGER
  if (!game.finished) {
    let sum = 0;
    for (i = 0; i < game.history.length; i++) {
      // ADDS AN INTEGER EQUAL TO THE LENGTH OF THE ENTRY TO "SUM"
      console.log(game.history[i].length); // TEST LOGGER
      sum += game.history[i].length;
    }
    let total = document.querySelector(".totalScore");
    let node = document.createElement("h3");
    let textnode = document.createTextNode("Your total score is " + sum + "!");
    node.appendChild(textnode);
    total.appendChild(node);
    game.finished = true;
  }
}

//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: HOW TO PLAY SCREEN-->

//<!--RULES TEXT-->

//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: HIGH SCORES SCREEN ***-->

//<!--OBJECT: GAME RECORD-->
//<!--Sub-Object: PLAYER NAME-->
//<!--Sub-Object: PROMPT & DIFFICULTY-->
//<!--Sub-Object: TOTAL SCORE-->

/*$$                                              
| $$                                              
| $$        /$$$$$$   /$$$$$$  /$$    /$$ /$$$$$$ 
| $$       /$$__  $$ |____  $$|  $$  /$$//$$__  $$
| $$      | $$$$$$$$  /$$$$$$$ \  $$/$$/| $$$$$$$$
| $$      | $$_____/ /$$__  $$  \  $$$/ | $$_____/  /$$
| $$$$$$$$|  $$$$$$$|  $$$$$$$   \  $/  |  $$$$$$$ | $$
|________/ \_______/ \_______/    \_/    \_______/ |_*/
// STATECHANGE BUTTONS LETS GET IT

let backButts = document.querySelectorAll(".buttBack");

for (i = 0; i < backButts.length; i++) {
  backButts[i].addEventListener("click", gotoWelcome);
}

function gotoWelcome() {
  console.log("FIRED! function gotoWelcome"); // TEST LOGGER
  for (i = 1; i < screens.length; i++) {
    screens[i].classList.add("hidden");
  }
  screens[0].classList.remove("hidden");
  game.endGame(); // NOTE TO SELF: DEFINE ENDGAME FUNCTION!!!
}
