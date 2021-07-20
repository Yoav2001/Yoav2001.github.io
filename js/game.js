let select_left_keycode = -1; //key code  של השחקן השמאלי 
let select_right_keycode = -1; // KEY CODE של השחקן הימיני
let name_left; //שם השחקן השמאלי
let name_right; //שם השחקן הימיני
let count_click_key_bord = 0; // כמות הפעמים שלחצו על  המקלדת במהלך משחק אחד -כאשר שווה ל2 מחשב =מי ניצח 
let is_signup_succeeded = false;
let key_value; //key value of key enter on key bord 

const arr_key_fight = [87, 83, 68, 74, 75, 76]; //     [87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]
let check_key_fight; // משתנה עם ערך בוליאני , אמת=המקש שלחצו במקלדת הוא חלק מהמקשים המותרת

let rndInt; //random nuber for the computer mood

const stone_src = "../images//imagefight/stoneEmoji.png";
const paper_src = "../images//imagefight/paperEmoji.png";
const scissors_src = "../images/imagefight/ScissorsEmoji.png";
const arr_src = [stone_src, paper_src, scissors_src];
let i_left; //index of the code fight left in the arr_src
let i_right; //index of the code fight right in the arr_src
let elem_left; //left html elemt  - emoji 
let elem_right; //right html elemt  - emoji 
let elem_name_winner;
let countDown = 5;

let interval_countdown;
//שלב א 
function start_over_click() {

    select_left_keycode = -1;
    select_right_keycode = -1;
    name_left = "";
    name_right = "";
    is_signup_succeeded = false;
    count_click_key_bord = 0;


    clear_elment();

    // document.getElementById("div_emoji").visible = false;

    // elem_left.style.visible = false
    // elem_right.style.visible = false;


    // const canvas_game = document.getElementsByTagName(".canvas");
    // // canvas_game.className = "canvas_none";

    // canvas_game.style.visibility = "collapse";



    // location.reload();
}


function clear_elment() {


    let emoji_l = document.getElementById("left_img_emoji");
    let emoji_r = document.getElementById("right_img_emoji");
    let txt_winner = document.getElementById("title_fight");
    let div_count_down = document.getElementById("div_count_down");

    emoji_l.className = "display_none";
    emoji_r.className = "display_none";
    emoji_l.src = "";
    emoji_r.src = "";
    txt_winner.className = "display_none"

    div_count_down.className = "display_none";


    let btn_mood_computer = document.getElementById("btn_computer");
    btn_mood_computer.disabled = false;
    let btn_mood_vs = document.getElementById("btn_vs_two");
    btn_mood_vs.disabled = false;

    document.body.childNodes[0].remove(); // canvas.className = "display_none";

    countDown = 5;

    // elem_left.className = "emoji_display_none";
    // elem_right.className = "emoji_display_none";
    // elem_left.src = "";
    // elem_left.src = "";

}
// לחיצה על כפתור מצב נגד המחשב כלומר צריך לבקש רק פרטים של שם אחד 
//נגד המחשב 
function computer_mood_click() {


    // mood = false; //מגדיר למקרה שיבחרו אחד נגד השני ואז ישנו את הבחירה

    enter_detilasFighter(false);

    if (!is_signup_succeeded) {
        return alert("error pleade refresh the page ")
    } else {
        name_right = "computer"
        rndInt = Math.floor(Math.random() * 3) + 3;
        select_right_keycode = [rndInt - 2];
        count_click_key_bord = 1; //כאלו משהו לחץ
    }





}

// זוג -אחד נגד השני 
function vsTwo_mood_click() {

    // mood = true;
    enter_detilasFighter(true);
    count_click_key_bord = 0;

}

// םעולה המקלבת את מצב המשחק נגד המחשב או אחג נגד השני
// לפי מצב המשחק יודעת אם לבקש שם אחד או שנייים
// או ולידציה פשוטה אם הזינו שם 
function enter_detilasFighter(mood) {
    let text_signUp; // sign up -טקסטס הודעה האם ההזנה של שמות המשתתפים למשחק הצליחה
    name_left = prompt("Please enter your name -fighter one:", "");
    name_right = "";
    // two fighter mood

    while ((name_left == null || name_left == "")) {
        name_left = prompt("Please enter your name -fighter one:", "");

    }

    if (mood) {
        while ((name_right == null || name_right == "")) {
            name_right = prompt("Please enter your name -fighter two:", "");
        }

    }

    // if ((name_left == null || name_left == "") || (mood && (name_right == null || name_right == ""))) {
    //     text_signUp = "User cancelled the prompt.";
    //     is_signup_succeeded = false;

    // } 
    let btn_mood_computer = document.getElementById("btn_computer");
    btn_mood_computer.disabled = true;
    let btn_mood_vs = document.getElementById("btn_vs_two");
    btn_mood_vs.disabled = true;



    text_signUp = "let start the game ";
    is_signup_succeeded = true;





    alert(text_signUp);


}


// שלב א של המשחק 

// key bord for the game


//LISTNER-בעת חיצה על המקלדת 

window.addEventListener("keydown", function(event) {

    // this.alert(count_click_key_bord)
    check_key_fight = false;
    // let fight = { side: , value: };
    if (is_signup_succeeded && (count_click_key_bord == 0 || count_click_key_bord == 1)) { //אם שניהם לא בחרו עדיין

        key_value = event.keyCode;
        arr_key_fight.map((currElement, index) => {
            if (key_value == currElement) {
                if (index < 3 && select_left_keycode == -1) {
                    select_left_keycode = index + 1; //INDEX 0,1,2=בגלל זה מוסיף אחד
                    check_key_fight = true;
                    count_click_key_bord++;
                    // this.alert(count_click_key_bord)
                } else if (index < 3 && select_left_keycode != -1) {
                    check_key_fight = false;
                }
                if (index > 2 && select_right_keycode == -1) {
                    select_right_keycode = index - 2; //index --3,4,5=-2=1,2,3
                    check_key_fight = true;
                    count_click_key_bord++;

                } else if (index > 2 && select_right_keycode != -1) {
                    check_key_fight = false;
                }


            }

        });
        if (!check_key_fight) {
            alert("you choose inccort key bord /one side choose more than on time")
        }

    }


    if (count_click_key_bord == 2) {
        // this.alert(`fighter one  ${name_left} : ${select_left_keycode}fighter two  ${name_right} : ${select_right_keycode}`)
        fightClickCalck();
        // alert("restart the game /go to fight ")
        count_click_key_bord++;


        // clacl who is the winner can use the nexy fin
    }

    // this.alert(check_key_fight)
});





function fightClickCalck() {

    // window.addEventListener("keydown", function(event) {
    //     const p = document.createElement("p");
    //     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    //     document.getElementById("output").appendChild(p);
    // }, true);
    const res_game = game(name_left, select_left_keycode, name_right, select_right_keycode);
    let name_winner = res_game.winner.name;
    // if (!res_game.is_teko)
    //     alert(` condtration ${res_game.winner.name} you Win!!!! you choose  `);


    // else
    //     alert("teko")




    if (res_game.sideWin == "left") {
        i_left = res_game.winner.chooseCode - 1;
        i_right = res_game.loser.chooseCode - 1;


    } else { //teko  יכנס גם פה
        i_right = res_game.winner.chooseCode - 1;
        i_left = res_game.loser.chooseCode - 1;
    }
    // alert(res_game.sideWin)
    // alert(`${i_left} sdsd${i_right}`)
    // alert(arr_src[i_left])

    console.log(name_winner)
    emoji_style_winner("left_img_emoji", arr_src[i_left], "right_img_emoji", arr_src[i_right], name_winner)

    document.getElementById("countDown").style.visibility = "visible";
    document.getElementById("startGame_text").style.visibility = "visible";
}






//function that get two img element and two src img
// the fun link the src to the element ,add a css class animation to the img 
function emoji_style_winner(id_left, src_left, id_right, src_right, namewinner) {
    debugger;

    // const result_game = game(name_left, select_left_keycode, nameright, select_right_keycode);
    elem_left = document.getElementById(id_left);
    elem_right = document.getElementById(id_right);
    elem_name_winner = document.getElementById("title_fight");

    // elem_name_winner.classList.add('text_winner');
    elem_name_winner.classList.remove('display_none');
    elem_name_winner.className += " text_winner"; //חשוב לשים רווח בהתחלה כדי שיצליח להוסיף את ה class
    //text winner
    if (namewinner == "teko")
        elem_name_winner.innerHTML = `${namewinner} `;
    else
        elem_name_winner.innerHTML = `${namewinner} winner `;





    //src the photo
    elem_left.src = src_left;
    elem_right.src = src_right;

    //link the css class
    elem_left.classList.remove("display_none");
    elem_right.classList.remove("display_none");
    elem_left.className += " emoji_left";
    elem_right.className += " emoji_right";

    let count_down_div = document.getElementById("div_count_down");
    // document.getElementById("div_count_down").style.visibility = "visible";

    count_down_div.className = "count_down_block";
    document.getElementById("startGame_text").style.visibility = "visible";


    //display
    // elem_left.style.display = "block";
    // elem_left.style.display = "block"
}

function start_game_canvas() {


    elem_left.className = "emoji_display_startCanvas";
    elem_right.className = "emoji_display_startCanvas";



    interval_countdown = setInterval(count_down_circle, 1000);

}

function count_down_circle() {

    if (countDown > 0) {
        document.getElementById("startGame_text").innerText = countDown;
        document.getElementById("startGame_text").style.visibility = "visible";
    } else if (countDown == 0) {
        document.getElementById("startGame_text").innerHTML = "GO!";
        game_second_part(30, 30, 30, 30, elem_left.src, elem_right.src, 1.2, 3, "title_fight");

    } else {
        clearInterval(interval_countdown)
        document.getElementById("startGame_text").style.visibility = "collapse";


        // clearInterval(myGameArea.interval);
        // gameInterval = setInterval(updateGameArea, 20);
        // aiInterval = setInterval(aiMovement, 650);
    }
    countDown--;

}