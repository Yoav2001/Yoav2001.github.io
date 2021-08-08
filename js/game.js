const fightGameSps = new FightGame(false, "", "", -1, -1, false);
const intervalObj = { funName: "", ms: 0, interval: null };



// כתובת תמונות אימוגי =אבן/נייר/מספרים
const stone_src = "../images//imagefight/stoneEmoji.png";
const paper_src = "../images//imagefight/paperEmoji.png";
const scissors_src = "../images/imagefight/ScissorsEmoji.png";

// מערך של כתובת התמונות 
const arr_src = [stone_src, paper_src, scissors_src];

// לעבור לדרך הזו במקום הConst
// import stoneSrc from "../images//imagefight/stoneEmoji.png"
// import paperSrc from "../images//imagefight/paperEmoji.png"
// import scissorsSrc from "../images/imagefight/ScissorsEmoji.png";
// const mapSrc = new Map();

// mapSrc.set(stoneSrc, 1);
// mapSrc.set(paperSrc, 2);
// mapSrc.set(scissorsSrc, 3);

// אלמנטים שמשתמש בהם במהךף המשחק
const imgLeftPlayerChoose = document.getElementById("left_img_emoji"); //left html elemt  - emoji 
const imgRightPlayerChoose = document.getElementById("right_img_emoji"); //right html elemt  - emoji 
const elemTitle = document.getElementById("title_fight");;

// אובייקטים ואלמנטים מסויימים לחלק ב של המשחק
const elemBtnCountDown = document.getElementById("btnCountDown");
const elem_span_count_down = document.getElementById("spanCountDown");
const divCountDown = document.getElementById("divCountDown");
const countDownObj = { count: 5, text: "" };

const btnModeComputer = document.getElementById("btn_computer");
const btnModeVs = document.getElementById("btn_vs_two");
const btnStartOver = document.getElementById("btn_start_over");


const imgKeybordLeft = document.getElementById("imgKeyBordLeft");
const imgKeybordRight = document.getElementById("imgKeyBordright");

//שלב א 

function start_over_click() {
    fightGameSps.startOver(false, "", "", -1, -1);
    clear_elment();
}



function clear_elment() {
    imgLeftPlayerChoose.className = "display_none";
    imgRightPlayerChoose.className = "display_none";
    imgLeftPlayerChoose.src = "";
    imgRightPlayerChoose.src = "";
    elemTitle.className = "display_none"
    elemTitle = ""
    btnModeComputer.disabled = false;
    btnModeVs.disabled = false;
    imgKeybordLeft.classList.remove("img_key_bord_left");
    imgKeybordLeft.classList.add("display_none");
    imgKeybordRight.classList.remove("img_key_bord_right");
    imgKeybordRight.classList.add("display_none");
    divCountDown.className = "display_none";
    elemBtnCountDown.disabled = false;

    const canvasEleme = document.getElementsByTagName("canvas")[0];
    if (canvasEleme != null)
        canvasEleme.remove();
    countDownObj.count = 5;
    elemBtnCountDown.innerHTML = "Start Fight";

    clearInterval(intervalObj.interval);
}

function computerPcModeClick() {
    fightGameSps.isVsMood = false;
    enter_detilasFighter(false);
    fightGameSps.selectSecondFighter = [randomPcSelection()];
}

function vsModeClick() {
    fightGameSps.isVsMood = true;
    enter_detilasFighter(true);
}

function enter_detilasFighter(isVsMode) {

    const namePlayers = { namePlayerLeft: "", namePlayerRight: "" };
    const resNames = getPlayersNames(isVsMode, "Please enter your name -fighter ");
    namePlayers.namePlayerLeft = resNames.PlayerLeftName;
    namePlayers.namePlayerRight = resNames.playerRightName;
    fightGameSps.firstFighterName = namePlayers.namePlayerLeft;
    fightGameSps.secondFighterName = namePlayers.namePlayerRight;
    VisibilityAfterSignUp(isVsMode, namePlayers);
}


function VisibilityAfterSignUp(mode, namePlayers) {

    const textSignUp = "let start the game ";
    alert(textSignUp);
    btnModeComputer.disabled = true;
    btnModeVs.disabled = true;
}




window.addEventListener("keydown", function(event) {

    const keyCode = event.keyCode;
    if (fightGameSps.firstFighterSelect === -1 || fightGameSps.secondFighterSelect === -1) {
        preCalckChoose(keyCode);
        if (fightGameSps.firstFighterSelect !== -1 && fightGameSps.secondFighterSelect !== -1)
            fightClickCalck();
    }
});


function preCalckChoose(keyCode) {
    const resChoose = calckPlayerChoose(keyCode);

    if (resChoose.sidePlayer == "left")
        fightGameSps.selectFirstFighter = resChoose.selectPlayerValue;

    else if (resChoose.sidePlayer == "right")
        fightGameSps.selectSecondFighter = resChoose.selectPlayerValue;
}



function fightClickCalck() {
    let i_left; //index of the code fight left in the arr_src
    let i_right; //index of the code fight right in the arr_src
    const res_game = calckGameResult(fightGameSps.firstFighterName, fightGameSps.firstFighterSelect, fightGameSps.secondFighterName, fightGameSps.secondFighterSelect);
    let name_winner = res_game.winner.name;
    if (res_game.sideWin == "left") {
        i_left = res_game.winner.chooseCode - 1;
        i_right = res_game.loser.chooseCode - 1;
        fightGameSps.isFirstPlayerIsWinner = true;

    } else {
        i_right = res_game.winner.chooseCode - 1;
        i_left = res_game.loser.chooseCode - 1;
        fightGameSps.isFirstPlayerIsWinner = false;

    }
    console.log(name_winner)
    emoji_style_winner(arr_src[i_left], arr_src[i_right], name_winner)

    elem_span_count_down.style.visibility = "visible";
    elemBtnCountDown.style.visibility = "visible";
}



function emoji_style_winner(src_left, src_right, namewinner) {

    elemTitle.classList.remove('display_none');
    elemTitle.className += " text_winner"; //חשוב לשים רווח בהתחלה כדי שיצליח להוסיף את ה class
    //text winner
    if (namewinner === "teko")
        elemTitle.innerHTML = `${namewinner} `;

    if (!fightGameSps.isVsMood)
        elemTitle.innerHTML = `${namewinner} winner `;




    //src the photo
    imgLeftPlayerChoose.src = src_left;
    imgRightPlayerChoose.src = src_right;

    //link the css class
    imgLeftPlayerChoose.classList.remove("display_none");
    imgRightPlayerChoose.classList.remove("display_none");
    imgLeftPlayerChoose.className += " emoji_left";
    imgRightPlayerChoose.className += " emoji_right";

    if (namewinner != "teko" && fightGameSps.isVsMood) {
        styleElmentBeforeCanvas(namewinner);
    }

}

function styleElmentBeforeCanvas(namewinner) {
    elemTitle.innerHTML = `${namewinner} winner `;
    //count down for start cnavas
    divCountDown.className = "count_down_block";
    elemBtnCountDown.style.visibility = "visible";
    // key bord for the canvas game
    imgKeybordLeft.classList.remove("display_none");
    imgKeybordLeft.classList.add("img_key_bord_left");

    imgKeybordRight.classList.remove("display_none");
    imgKeybordRight.classList.add("img_key_bord_right");
}


//התחלת חלק ב של המשחק 
// לא יקרה במקרה שיש תיקו או שהמשחק נג המחשב
function start_game_canvas() {
    imgLeftPlayerChoose.className = "emoji_display_startCanvas";
    imgRightPlayerChoose.className = "emoji_display_startCanvas";
    elemBtnCountDown.disabled = true;
    intervalObj.interval = setInterval(count_down_circle, 1000);


    // game_state_parameters.interval_countdown = setInterval(count_down_circle, 1000);
}

function count_down_circle() {

    if (countDownObj.count > 0) {
        elemBtnCountDown.innerText = countDownObj.count;
        elemBtnCountDown.style.visibility = "visible";
    } else if (countDownObj.count == 0) {
        countDownObj.text = "GO"
        elemBtnCountDown.innerHTML = countDownObj.text;


        setTimeout(() => {
            startCanvas()
        }, 1000);

    } else {
        clearInterval(intervalObj.interval);
        elemBtnCountDown.style.visibility = "collapse";
        elem_span_count_down.style.visibility = "collapse";
    }
    countDownObj.count--;

}

function startCanvas() {
    if (fightGameSps.isFirstPlayerIsWinner === true) {
        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 1.2, 3, elemTitle, false);
        alert(`${fightGameSps.nameFirstFighter} you need to catch ${fightGameSps.secondFighterName} 3 times  without crash the frame`)
    } else {

        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 1.2, 3, elemTitle, true);

    }

}