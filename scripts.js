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
console.log(screens);                   // KEEP THIS LOGGER AROUND IN CASE YOU NEED TO CHECK THE SCREENS ARRAY LATER


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: WELCOME SCREEN ***-->

    //<!--BUTTON: NEW GAME-->
    //<!--BUTTON: HOW TO PLAY-->
    //<!--BUTTON: HIGH SCORES-->
    
const buttNew = document.querySelector(".buttNew");
const buttRules = document.querySelector(".buttRules");
const buttScores = document.querySelector(".buttScores");

console.log(buttNew);                                                           // TEST LOGGER
console.log(buttRules);                                                         // TEST LOGGER
console.log(buttScores);                                                        // TEST LOGGER

buttNew.addEventListener("click", gotoGame);
function gotoGame() {
    console.log("FIRED! function gotoGame");                                    // TEST LOGGER
    screens[0].classList.remove("hidden");
    screens[1].classList.add("hidden");                             
}

buttRules.addEventListener("click", gotoRules);
function gotoRules() {
    console.log("FIRED! function gotoRules");                                   // TEST LOGGER
}

buttScores.addEventListener("click", gotoScores);
function gotoScores() {
    console.log("FIRED! function gotoScores");                                  // TEST LOGGER
}


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: INGAME SCREEN ***-->

    //<!--TIMER-->
    //<!--PROMPT-->
    //<!--PRIMARY INPUT-->
    //<!--BUTTON: BEGIN GAME-->

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
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

buttStart.addEventListener("click", function() {
    var timeLimit = 30, // THE SECOND INTEGER REPRESENTS A NUMBER OF
        display = document.querySelector('.timer');
    startTimer(timeLimit, display);
});



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

let test = document.querySelector(".testInput")
console.log(test.innerText);
let input = [];

document.addEventListener('keydown', function (event) {             
    if (event.keyCode <= 90 && event.keyCode >= 65) {
        input.push(event.key);
    }   
    else if (event.keyCode === 32) {
        input.push(" ");
    }
    else if (event.key === "Backspace") {
        if (event.ctrlKey) {
            if (input[(input.length-1)] === " ") {
                while(input[(input.length -1)] === " ") {
                input.pop()
                }
                let last = input.lastIndexOf(" ");
                input.splice((last - input.length + 1));
            }
            else {
                let last = input.lastIndexOf(" ");
                input.splice((last - input.length + 1));
            }
        }
        else {
            input.pop();
        }
    }
    
    else if (event.key === "Enter") {
        console.log(input.join(''));
        input = [];
    }                          
    test.innerText = input.join('');
    console.log(event.keyCode);
});

/* END OF KEYLIST!(TM)
________________________________________________________________________________________
*/


    
    //<!--OBJECT: INPUT HISTORY-->
    //<!--Sub-Objects: Each word entered, in historical order.-->
    
    //<!--OBJECT: CATEGORIES-->
    //<!--Sub-Objects: 3 Letters, 4 Letters, 5 Letters, 6 Letters, 7 Letters, 8 Letters, 9 Letters, 10 Letters, 11 Letters, 12+ Letters-->
    //<!--Sub-Objects: Quantities for each category-->


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: POSTGAME SCREEN ***-->

    //<!--BUTTONS!!  SO MANY BUTTONS!!-->
    //<!--Sub-Objects: Each entry from the INPUT HISTORY object in the GAME screen becomes its own button.-->

    //<!--BUTTON: "SUBMIT"-->
    //<!--TOTAL SCORE-->

    //<!--OBJECT: CATEGORIES-->
    //<!--Sub-Objects: 3 Letters, 4 Letters, 5 Letters, 6 Letters, 7 Letters, 8 Letters, 9 Letters, 10 Letters, 11 Letters, 12+ Letters-->
    //<!--Sub-Objects: Quantities for each category-->


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: HOW TO PLAY SCREEN-->

    //<!--RULES TEXT-->


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: HIGH SCORES SCREEN ***-->

    //<!--OBJECT: GAME RECORD-->
    //<!--Sub-Object: PLAYER NAME-->
    //<!--Sub-Object: PROMPT & DIFFICULTY-->
    //<!--Sub-Object: TOTAL SCORE-->