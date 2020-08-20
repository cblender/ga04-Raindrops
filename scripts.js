 /*$$$$$$            /$$                 /$$                                        
| $$__  $$          |__/                | $$                                        
| $$  \ $$  /$$$$$$  /$$ /$$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
| $$$$$$$/ |____  $$| $$| $$__  $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/
| $$__  $$  /$$$$$$$| $$| $$  \ $$| $$  | $$| $$  \__/| $$  \ $$| $$  \ $$|  $$$$$$ 
| $$  \ $$ /$$__  $$| $$| $$  | $$| $$  | $$| $$      | $$  | $$| $$  | $$ \____  $$
| $$  | $$|  $$$$$$$| $$| $$  | $$|  $$$$$$$| $$      |  $$$$$$/| $$$$$$$/ /$$$$$$$/
|__/  |__/ \_______/|__/|__/  |__/ \_______/|__/       \______/ | $$____/ |_______/ 
________________________________________________________________| $$__________________                
                                                                | $$                
*/ console.log("Hello, world.");  //  Start small.  Grow tall.  |__/              





 /*$$$$$$  /$$                               /$$                       /$$
| $$__  $$| $$                              |__/                      | $$
| $$  \ $$| $$  /$$$$$$  /$$$$$$$  /$$$$$$$  /$$ /$$$$$$$   /$$$$$$   | $$
| $$$$$$$/| $$ |____  $$| $$__  $$| $$__  $$| $$| $$__  $$ /$$__  $$  | $$
| $$____/ | $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$  |__/
| $$      | $$ /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$    
| $$      | $$|  $$$$$$$| $$  | $$| $$  | $$| $$| $$  | $$|  $$$$$$$   /$$
|__/      |__/ \_______/|__/  |__/|__/  |__/|__/|__/  |__/ \____  $$  |__/
___________________________________________________________/$$  \ $$________    
                                                          |  $$$$$$/    
                                                           \_____*/     

// HUDLE NUMERO UNO:  GET THE KEYBOARD INPUT WORKING!!!  VERY IMPORTANT!!!
// ALSO: MAKE SURE INPUT IS STABLE AND CONSISTENT!!

// Probably will want to store the list of strings for the PROMPT object in a separate file of some sort.  Make sure to ask Tosin about it.

// THE TIMER!  MAKE SURE TO LEARN HOW TO IMPLEMENT A ROUND TIMER!!

// VERY IMPORTANT NOTE ABOUT THE KEYBOARD LISTENER!!!  IMPLEMENT A FUNCTION TO CLEAR THE PRIMARY INPUT ARRAY AND CALL IT AT ALL GAMESTATE CHANGES!!


//___________________________________________________________________________________________________________________
//<!--*** UNCHANGING OBJECTS ***-->

    //<!--TITLE--> 
    //<!--FOOTER-->


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: WELCOME SCREEN ***-->

    //<!--BUTTON: NEW GAME-->
    //<!--BUTTON: HOW TO PLAY-->
    //<!--BUTTON: HIGH SCORES-->


//___________________________________________________________________________________________________________________
//<!--*** CONTAINER: GAME SCREEN ***-->

    //<!--TIMER-->
    //<!--PROMPT-->
    //<!--PRIMARY INPUT-->


    let test = document.querySelector(".buttNew")
let input = [];

document.addEventListener('keydown', function (event) {             // TEST KEYBOARD LISTENER
    if (event.key === "Backspace") {
        input.pop();
    }
    else if (event.key === "Enter") {
        console.log(input.join(''));
        input = [];
    }
    else if (event.key === "Space") {

    }
    else {
        input.push(event.key);
    }                                    
    test.innerText = input.join('');
    console.log(event.key);
});
    
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