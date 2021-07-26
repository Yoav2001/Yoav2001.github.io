//אובייקט של פרמטרים של המשחק :שם של שחקן בצד שמאל/ימין +הבחירה  שלו  ,האם ההרשמה של השחקנים למשחק הצליחה
//key code = הערך של הלחצן במקלדת שנלחץ
// המשתנה האחרון באובייקט הזה count click keybord - הוא כמות הפעמים שלחצו על המקלדת במהלך משחק בודד בחלק הראשון (מקסימום 1 כל צד )
//count_click_key_bord = 0  כמות הפעמים שלחצו על  המקלדת במהלך משחק אחד -כאשר שווה ל2 מחשב =מי ניצח
const game_state_parameters = { is_vs_mood: false, select_left_keycode: -1, select_right_keycode: -1, name_left: "", name_right: "", is_signup_succeeded: false, game_state_parameters: false, count_click_key_bord: 0, interval_countdown: "" };
const arr_key_fight = [87, 83, 68, 74, 75, 76]; //     [87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]

// כתובת תמונות אימוגי =אבן/נייר/מספרים
const stone_src = "../images//imagefight/stoneEmoji.png";
const paper_src = "../images//imagefight/paperEmoji.png";
const scissors_src = "../images/imagefight/ScissorsEmoji.png";

// מערך של כתובת התמונות 
const arr_src = [stone_src, paper_src, scissors_src];

const prompt_txt = "Please enter your name -fighter ";

// אלמנטים שמשתמש בהם במהךף המשחק
const elem_left = document.getElementById("left_img_emoji"); //left html elemt  - emoji 
const elem_right = document.getElementById("right_img_emoji"); //right html elemt  - emoji 
const elem_name_winner = document.getElementById("title_fight");;

// אובייקטים ואלמנטים מסויימים לחלק ב של המשחק
const elem_txt_count_down = document.getElementById("startGame_text");
const elem_span_count_down = document.getElementById("countDown");
const div_count_down = document.getElementById("div_count_down");
const countDown = { count: 5, text: "" };

const btn_mood_computer = document.getElementById("btn_computer");
const btn_mood_vs = document.getElementById("btn_vs_two");

const img_keybord_left = document.getElementById("imgKeyBordLeft");
const img_keybord_right = document.getElementById("imgKeyBordright");


// אינטרבל של השעון שסופר 5,,4,3,2,1 =מתחיל מערך countDown.count ההתחלתי למעלה
// let interval_countdown;


//שלב א 


// משחק חוזר 
// ברגע שנלחץ נגיע להתחלת המשחק (בין אם זה בשלב א או ב )
function start_over_click() {

    game_state_parameters.select_left_keycode = -1;
    game_state_parameters.select_right_keycode = -1;
    game_state_parameters.name_left = "";
    game_state_parameters.name_right = "";
    game_state_parameters.is_signup_succeeded = false;
    game_state_parameters.count_click_key_bord = 0;

    clear_elment();
}

// פעולת עזר שמשתמשים ב restart
// הפעולה הזו מנקה את כל האלמנטים על המסך ,מאפסת משתנים וכו לצורך משחק חדש

function clear_elment() {
    //התסרת אלמנט של תמונות ועוד
    elem_left.className = "display_none";
    elem_right.className = "display_none";
    elem_left.src = "";
    elem_right.src = "";
    elem_name_winner.className = "display_none"
    btn_mood_computer.disabled = false;
    btn_mood_vs.disabled = false;
    img_keybord_left.classList.remove("img_key_bord_left");
    img_keybord_left.classList.add("display_none");
    img_keybord_right.classList.remove("img_key_bord_right");
    img_keybord_right.classList.add("display_none");
    div_count_down.className = "display_none";
    document.body.childNodes[0].remove(); // canvas.className = "display_none";
    // השמה לערך התחלתי של משתנים 
    countDown.count = 5;
    elem_txt_count_down.innerHTML = "Start Fight";
    //  הפסקה של אינטרבל-במקרה שבו עשו משחק חוזר לפני שהספירה לאחור הפסיקה
    clearInterval(game_state_parameters.interval_countdown);

}
// לחיצה על כפתור מצב נגד המחשב כלומר צריך לבקש רק פרטים של שם אחד 
//נגד המחשב 
function computer_mood_click() {
    game_state_parameters.is_vs_mood = false;
    enter_detilasFighter(game_state_parameters.is_vs_mood);

    if (!game_state_parameters.is_signup_succeeded) {
        return alert("error pleade refresh the page ")
    } else {
        game_state_parameters.name_right = "computer"
        let rndInt = Math.floor(Math.random() * 3) + 3; //random nuber for the computer mood
        game_state_parameters.select_right_keycode = [rndInt - 2];
        game_state_parameters.count_click_key_bord = 1; //כאלו משהו לחץ
    }
}

// זוג -אחד נגד השני 
function vsTwo_mood_click() {
    // is_vs_mood = true;
    game_state_parameters.is_vs_mood = true;
    enter_detilasFighter(game_state_parameters.is_vs_mood);

    game_state_parameters.count_click_key_bord = 0;

}

// םעולה המקלבת את מצב המשחק נגד המחשב או אחג נגד השני
// לפי מצב המשחק יודעת אם לבקש שם אחד או שנייים
// או ולידציה פשוטה אם הזינו שם 
// function enter_detilasFighter(is_vs_mood) {
//     let text_signUp; // sign up -טקסט הודעה האם ההזנה של שמות המשתתפים למשחק הצליחה
//     game_state_parameters.name_left = prompt(`${prompt_txt}one:`, "");
//     game_state_parameters.name_right = "";
//     // two fighter is_vs_mood
//     while ((game_state_parameters.name_left == null || game_state_parameters.name_left == "")) {
//         game_state_parameters.name_left = prompt(`${prompt_txt}one:`, "");
//     }

//     if (is_vs_mood) {
//         while ((game_state_parameters.name_right == null || game_state_parameters.name_right == "")) {
//             game_state_parameters.name_right = prompt(`${prompt_txt}two:`, "");
//         }

//     }
//     btn_mood_computer.disabled = true;
//     btn_mood_vs.disabled = true;
//     text_signUp = "let start the game ";
//     game_state_parameters.is_signup_succeeded = true;
//     alert(text_signUp);


// }


// function enter_detilasFighter(is_vs_mood) {

//     const fightersNames = new Map();
//     if (!is_vs_mood) {
//         const resOneFighter = promptFighterName(`${prompt_txt}one:`)
//         if (resOneFighter.isPromptSucceed) {
//             fightersNames.set('nameFighterLeft', resOneFighter.nameFighter);
//         }
//     } else {

//         const resOneFighter = promptFighterName(`${prompt_txt}one:`)
//         const resSecondFighter = promptFighterName(`${prompt_txt}two:`)
//         if (resOneFighter.isPromptSucceed && resSecondFighter.isPromptSucceed) {
//             fightersNames.set('nameFighterLeft', resOneFighter.nameFighter);
//             fightersNames.set('nameFighterRight', resSecondFighter.nameFighter);
//         }
//     }

//     whenSignUpSucceed(fightersNames)


// }

function enter_detilasFighter(is_vs_mood) {

    if (!is_vs_mood)
        enterDetailsComputer();

    else
        enterDetailsVs();

    if (game_state_parameters.select_left_keycode != "")
        whenSignUpSucceed();

}



function enterDetailsComputer() {
    const resOneFighter = promptFighterName(`${prompt_txt}one:`)
    if (resOneFighter.isPromptSucceed) {
        game_state_parameters.select_left_keycode = resOneFighter.nameFighter;
    }

}

function enterDetailsVs() {
    const resOneFighter = promptFighterName(`${prompt_txt}one:`)
    const resSecondFighter = promptFighterName(`${prompt_txt}two:`)
    if (resOneFighter.isPromptSucceed || resSecondFighter.isPromptSucceed) {
        game_state_parameters.select_left_keycode = resOneFighter.nameFighter;
        game_state_parameters.select_right_keycode = resSecondFighter.nameFighter;
    }
}



function promptFighterName(text_alert) {
    const resPrompt = prompt(text_alert);

    if (resPrompt === "" || resPrompt === NaN || resPrompt === null) {
        alert("User cancelled  -please choose the mood : computer / vs  ")
        return { nameFighter: resPrompt, isPromptSucceed: false }

    } else
        return { nameFighter: resPrompt, isPromptSucceed: true };



}

function whenSignUpSucceed(mapNames) {
    const textSignUp = "let start the game ";
    alert(textSignUp);
    btn_mood_computer.disabled = true;
    btn_mood_vs.disabled = true;
    game_state_parameters.is_signup_succeeded = true;

}

// שלב א של המשחק 
// key bord for the game
//LISTNER-בעת חיצה על המקלדת 

window.addEventListener("keydown", function(event) {
    // this.alert(game_state_parameters.count_click_key_bord)
    // משתנה עם ערך בוליאני , אמת=המקש שלחצו במקלדת הוא חלק מהמקשים המותרת
    let key_value
        // let fight = { side: , value: };
    if (game_state_parameters.is_signup_succeeded && (game_state_parameters.count_click_key_bord == 0 || game_state_parameters.count_click_key_bord == 1)) { //אם שניהם לא בחרו עדיין
        key_value = event.keyCode; //key value of key enter on key bord
        arr_key_fight.map((currElement, index) => {
            is_key_code_correct(key_value, currElement, index);
        });

        if (!game_state_parameters.check_key_bord_fight) {
            alert("you choose inccort key bord /one side choose more than on time")
        }
    }
    if (game_state_parameters.count_click_key_bord == 2) {
        fightClickCalck();
        game_state_parameters.count_click_key_bord++;
    }
});


function is_key_code_correct(key_value, currElement, index) {
    if (key_value == currElement) {
        if (index < 3 && game_state_parameters.select_left_keycode == -1) {
            game_state_parameters.select_left_keycode = index + 1; //INDEX 0,1,2=בגלל זה מוסיף אחד
            game_state_parameters.check_key_bord_fight = true;
            game_state_parameters.count_click_key_bord++;
        } else if (index < 3 && game_state_parameters.select_left_keycode != -1) {
            game_state_parameters.check_key_bord_fight = false;
        }
        if (index > 2 && game_state_parameters.select_right_keycode == -1) {
            game_state_parameters.select_right_keycode = index - 2; //index --3,4,5=-2=1,2,3
            game_state_parameters.check_key_bord_fight = true;
            game_state_parameters.count_click_key_bord++;
        } else if (index > 2 && game_state_parameters.select_right_keycode != -1) {
            game_state_parameters.check_key_bord_fight = false;
        }

    }



}


function fightClickCalck() {

    let i_left; //index of the code fight left in the arr_src
    let i_right; //index of the code fight right in the arr_src
    const res_game = game(game_state_parameters.name_left, game_state_parameters.select_left_keycode, game_state_parameters.name_right, game_state_parameters.select_right_keycode);
    let name_winner = res_game.winner.name;
    if (res_game.sideWin == "left") {
        i_left = res_game.winner.chooseCode - 1;
        i_right = res_game.loser.chooseCode - 1;


    } else { //teko  יכנס גם פה
        i_right = res_game.winner.chooseCode - 1;
        i_left = res_game.loser.chooseCode - 1;
    }
    console.log(name_winner)
    emoji_style_winner(arr_src[i_left], arr_src[i_right], name_winner)

    elem_span_count_down.style.visibility = "visible";
    elem_txt_count_down.style.visibility = "visible";
}


//function that get two img element and two src img
// the fun link the src to the element ,add a css class animation to the img 
function emoji_style_winner(src_left, src_right, namewinner) {

    elem_name_winner.classList.remove('display_none');
    elem_name_winner.className += " text_winner"; //חשוב לשים רווח בהתחלה כדי שיצליח להוסיף את ה class
    //text winner
    if (namewinner === "teko") {

        elem_name_winner.innerHTML = `${namewinner} `;

    }


    if (!game_state_parameters.is_vs_mood) {
        elem_name_winner.innerHTML = `${namewinner} winner `;

    }


    //src the photo
    elem_left.src = src_left;
    elem_right.src = src_right;

    //link the css class
    elem_left.classList.remove("display_none");
    elem_right.classList.remove("display_none");
    elem_left.className += " emoji_left";
    elem_right.className += " emoji_right";

    if (namewinner != "teko" && game_state_parameters.is_vs_mood) {


        elem_name_winner.innerHTML = `${namewinner} winner `;
        //count down for start cnavas
        div_count_down.className = "count_down_block";
        elem_txt_count_down.style.visibility = "visible";
        // key bord for the canvas game
        img_keybord_left.classList.remove("display_none");
        img_keybord_left.classList.add("img_key_bord_left");

        img_keybord_right.classList.remove("display_none");
        img_keybord_right.classList.add("img_key_bord_right");


    }

}


//התחלת חלק ב של המשחק 
// לא יקרה במקרה שיש תיקו או שהמשחק נג המחשב
function start_game_canvas() {
    elem_left.className = "emoji_display_startCanvas";
    elem_right.className = "emoji_display_startCanvas";
    game_state_parameters.interval_countdown = setInterval(count_down_circle, 1000);
}

function count_down_circle() {

    if (countDown.count > 0) {
        elem_txt_count_down.innerText = countDown.count;
        elem_txt_count_down.style.visibility = "visible";
    } else if (countDown.count == 0) {
        countDown.text = "GO"
        elem_txt_count_down.innerHTML = countDown.text;
        game_second_part(30, 30, 30, 30, elem_left.src, elem_right.src, 1.2, 3, "title_fight");

    } else {
        clearInterval(game_state_parameters.interval_countdown)
        elem_txt_count_down.style.visibility = "collapse";
        elem_span_count_down.style.visibility = "collapse";
    }
    countDown.count--;

}