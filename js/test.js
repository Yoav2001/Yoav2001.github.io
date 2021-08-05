// function that get string for alert
// the function return the asyan alert





// function that get two prarmeter

function index_map_in_map(number, map_numbers) {



}


yourchoice = false;
switch (yourchoice) {
    case true:
        console.log("trueddd");
        break;
    case false:
        console.log("falsedd");
        break;
}

let rndInt = Math.floor(Math.random() * 3) + 3;










// function isPlayerSelect() {
//     const leftPlayerChoose = fightGameSps.firstFighterName;
//     const rightPlayerChoose = fightGameSps.secondFighterName;
//     if (leftPlayerChoose != -1 && rightPlayerChoose != -1)
//         return true;
//     return false;

// }
// שלב א של המשחק 
// key bord for the game
//LISTNER-בעת חיצה על המקלדת 

// window.addEventListener("keydown", function(event) {
//     // this.alert(game_state_parameters.count_click_key_bord)
//     // משתנה עם ערך בוליאני , אמת=המקש שלחצו במקלדת הוא חלק מהמקשים המותרת
//     let key_value
//         // let fight = { side: , value: };
//     if (game_state_parameters.is_signup_succeeded && (game_state_parameters.count_click_key_bord == 0 || game_state_parameters.count_click_key_bord == 1)) { //אם שניהם לא בחרו עדיין
//         key_value = event.keyCode; //key value of key enter on key bord
//         arr_key_fight.map((currElement, index) => {
//             is_key_code_correct(key_value, currElement, index);
//         });

//         if (!game_state_parameters.check_key_bord_fight) {
//             alert("you choose inccort key bord /one side choose more than on time")
//         }
//     }
//     if (game_state_parameters.count_click_key_bord == 2) {
//         fightClickCalck();
//         game_state_parameters.count_click_key_bord++;
//     }
// });


// function is_key_code_correct(key_value, currElement, index) {
//     if (key_value == currElement) {
//         if (index < 3 && game_state_parameters.select_left_keycode == -1) {
//             game_state_parameters.select_left_keycode = index + 1; //INDEX 0,1,2=בגלל זה מוסיף אחד
//             game_state_parameters.check_key_bord_fight = true;
//             game_state_parameters.count_click_key_bord++;
//         } else if (index < 3 && game_state_parameters.select_left_keycode != -1) {
//             game_state_parameters.check_key_bord_fight = false;
//         }
//         if (index > 2 && game_state_parameters.select_right_keycode == -1) {
//             game_state_parameters.select_right_keycode = index - 2; //index --3,4,5=-2=1,2,3
//             game_state_parameters.check_key_bord_fight = true;
//             game_state_parameters.count_click_key_bord++;
//         } else if (index > 2 && game_state_parameters.select_right_keycode != -1) {
//             game_state_parameters.check_key_bord_fight = false;
//         }

//     }



// }

const canvasEleme= document.getElementsByTagName("canvas")[0];
if(canvasEleme!=null)
    canvasEleme.remove();