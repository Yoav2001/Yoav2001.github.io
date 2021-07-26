//אובייקט של פרמטרים של המשחק :שם של שחקן בצד שמאל/ימין +הבחירה  שלו  ,האם ההרשמה של השחקנים למשחק הצליחה
//key code = הערך של הלחצן במקלדת שנלחץ
// המשתנה האחרון באובייקט הזה count click keybord - הוא כמות הפעמים שלחצו על המקלדת במהלך משחק בודד בחלק הראשון (מקסימום 1 כל צד )
//count_click_key_bord = 0  כמות הפעמים שלחצו על  המקלדת במהלך משחק אחד -כאשר שווה ל2 מחשב =מי ניצח
const game_state_parameters = { is_vs_mode: false, select_left_keycode: -1, select_right_keycode: -1, name_left: "", name_right: "", is_signup_succeeded: false, game_state_parameters: false, count_click_key_bord: 0, interval_countdown: "" };
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

const btn_mode_computer = document.getElementById("btn_computer");
const btn_mode_vs = document.getElementById("btn_vs_two");
const btnStartOver = document.getElementById("btn_start_over");


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
    btn_mode_computer.disabled = false;
    btn_mode_vs.disabled = false;
    img_keybord_left.classList.remove("img_key_bord_left");
    img_keybord_left.classList.add("display_none");
    img_keybord_right.classList.remove("img_key_bord_right");
    img_keybord_right.classList.add("display_none");
    div_count_down.className = "display_none";

    document.getElementsByTagName("canvas")[0].remove();
    // document.body.childNodes[0].remove(); // canvas.className = "display_none";
    // השמה לערך התחלתי של משתנים 
    countDown.count = 5;
    elem_txt_count_down.innerHTML = "Start Fight";
    //  הפסקה של אינטרבל-במקרה שבו עשו משחק חוזר לפני שהספירה לאחור הפסיקה
    clearInterval(game_state_parameters.interval_countdown);

}
// לחיצה על כפתור מצב נגד המחשב כלומר צריך לבקש רק פרטים של שם אחד 
//נגד המחשב 
function computerPcModeClick() {

    enter_detilasFighter(false);

    if (!game_state_parameters.is_signup_succeeded) {
        return alert("error pleade refresh the page ")
    } else {
        game_state_parameters.name_right = "PC"
        let rndInt = Math.floor(Math.random() * 3) + 3; //random nuber for the computer mode
        game_state_parameters.select_right_keycode = [randomPcSelection()];
        game_state_parameters.count_click_key_bord = 1; //כאלו משהו לחץ
    }
}


// זוג -אחד נגד השני 
function vsModeClick() {

    enter_detilasFighter(true);

    game_state_parameters.count_click_key_bord = 0;

}

function enter_detilasFighter(isVsMode) {
    const namePlayers = { namePlayerLeft: "", namePlayerRight = "" };

    if (!isVsMode) {
        const resNamePc = getNamesPcMode();
        namePlayers.namePlayerLeft = resNamePc.PlayerLeftName;
        namePlayers.namePlayerRight = resNamePc.playerRightName;

    } else {

        const resNamesVs = enterDetailsVs();
        namePlayers.namePlayerLeft = resNamesVs.PlayerLeftName;
        namePlayers.namePlayerRight = resNamesVs.playerRightName;

    }
    if (game_state_parameters.name_left != "") {
        VisibilityAfterSignUp(isVsMode, namePlayers);
    }
    while (!isPlayerSelect()) {

    }
    fightClickCalck(isVsMode, namePlayers);

}




function VisibilityAfterSignUp(mode, namePlayers) {
    const textSignUp = "let start the game ";
    alert(textSignUp);
    btn_mode_computer.disabled = true;
    btn_mode_vs.disabled = true;
    game_state_parameters.is_signup_succeeded = true;

}

function isPlayerSelect() {
    const leftPlayerChoose = game_state_parameters.select_left_keycode;
    const rightPlayerChoose = game_state_parameters.select_right_keycode;
    if (leftPlayerChoose != -1 && rightPlayerChoose != -1)
        return true;
    return false;

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


    if (!game_state_parameters.is_vs_mode) {
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

    if (namewinner != "teko" && game_state_parameters.is_vs_mode) {


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