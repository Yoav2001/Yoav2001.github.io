const fightGameSps = new FightGame(false, "", "", -1, -1, false);
const intervalObj = { funName: "", ms: 0, interval: null };

// כתובת תמונות אימוגי =אבן/נייר/מספרים
const STONE_SRC = "../images//imagefight/stoneEmoji.png";
const PAPER_SRC = "../images//imagefight/paperEmoji.png";
const SCISSORS_SRC = "../images/imagefight/ScissorsEmoji.png";

const mapSrcByChoose = new Map();
mapSrcByChoose.set(1, STONE_SRC);
mapSrcByChoose.set(2, PAPER_SRC);
mapSrcByChoose.set(3, SCISSORS_SRC);

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
    fightGameSps.startOver();
    clear_elment();
}

function clear_elment() {
    imgLeftPlayerChoose.className = "display_none";
    imgRightPlayerChoose.className = "display_none";
    imgLeftPlayerChoose.src = "";
    imgRightPlayerChoose.src = "";
    elemTitle.className = "display_none"
    elemTitle.innerHTML = ""
    btnModeComputer.disabled = false;
    btnModeVs.disabled = false;
    imgKeybordLeft.classList.remove("img_key_bord_left");
    imgKeybordLeft.classList.add("display_none");
    imgKeybordRight.classList.remove("img_key_bord_right");
    imgKeybordRight.classList.add("display_none");
    divCountDown.className = "display_none";
    elemBtnCountDown.disabled = false;
    countDownObj.count = 5;
    elemBtnCountDown.innerHTML = "Start Fight";
    const canvasEleme = document.getElementsByTagName("canvas")[0];
    if (canvasEleme !== null)
        canvasEleme.remove();

    clearInterval(intervalObj.interval);
}

function computerPcModeClick() {
    fightGameSps.isVsMood = false;
    enter_detilasFighter(false);
    fightGameSps.selectSecondFighter = randomPcSelection();
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
        updatePlayerChoose(keyCode);
        if (fightGameSps.firstFighterSelect !== -1 && fightGameSps.secondFighterSelect !== -1)
            calculationResultOfFirstPartGame();
    }
});


function updatePlayerChoose(keyCode) {
    const resChoose = getPlayerSideAndChooseByKeyCode(keyCode);

    if (resChoose.sidePlayer == "left")
        fightGameSps.selectFirstFighter = resChoose.selectPlayerValue;

    else if (resChoose.sidePlayer == "right")
        fightGameSps.selectSecondFighter = resChoose.selectPlayerValue;
}

function getPlayerSideAndChooseByKeyCode(keyCode) {
    const mapKeyBord = new Map(); //[87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]
    mapKeyBord.set(87, 1);
    mapKeyBord.set(83, 2);
    mapKeyBord.set(68, 3);
    mapKeyBord.set(74, 1);
    mapKeyBord.set(75, 2);
    mapKeyBord.set(76, 3);
    const valueKeyMap = mapKeyBord.get(keyCode);

    if ([87, 83, 68].includes(keyCode)) {
        return { selectPlayerValue: valueKeyMap, sidePlayer: "left" }

    } else if ([74, 75, 76].includes(keyCode)) {
        return { selectPlayerValue: valueKeyMap, sidePlayer: "right" }
    }
    return { selectPlayerValue: -1, sidePlayer: "" }

}

function calculationResultOfFirstPartGame() {
    let i_left;
    let i_right;
    const res_game = calckGameResult(fightGameSps.firstFighterName, fightGameSps.firstFighterSelect, fightGameSps.secondFighterName, fightGameSps.secondFighterSelect);
    let name_winner = res_game.winner.name;
    if (res_game.sideWin == "left") {
        i_left = res_game.winner.chooseCode;
        i_right = res_game.loser.chooseCode;
        fightGameSps.isFirstPlayerIsWinner = true;

    } else {
        i_right = res_game.winner.chooseCode;
        i_left = res_game.loser.chooseCode;
        fightGameSps.isFirstPlayerIsWinner = false;

    }
    cssAfterFirstPartGame(mapSrcByChoose.get(i_left), mapSrcByChoose.get(i_right), name_winner)

    elem_span_count_down.style.visibility = "visible";
    elemBtnCountDown.style.visibility = "visible";
}



function cssAfterFirstPartGame(src_left, src_right, namewinner) {

    elemTitle.classList.remove('display_none');
    elemTitle.className += " text_winner";
    if (namewinner === "teko")
        elemTitle.innerHTML = `${namewinner} `;

    if (!fightGameSps.isVsMood)
        elemTitle.innerHTML = `${namewinner} winner `;

    imgLeftPlayerChoose.src = src_left;
    imgRightPlayerChoose.src = src_right;

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
    divCountDown.className = "count_down_block";
    elemBtnCountDown.style.visibility = "visible";
    imgKeybordLeft.classList.remove("display_none");
    imgKeybordLeft.classList.add("img_key_bord_left");
    imgKeybordRight.classList.remove("display_none");
    imgKeybordRight.classList.add("img_key_bord_right");
}


function start_game_canvas() {
    imgLeftPlayerChoose.className = "emoji_display_startCanvas";
    imgRightPlayerChoose.className = "emoji_display_startCanvas";
    elemBtnCountDown.disabled = true;
    intervalObj.interval = setInterval(count_down_circle, 1000);
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
        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 1.6, 3, elemTitle, false);
        alert(`${fightGameSps.nameFirstFighter} you need to catch ${fightGameSps.secondFighterName} 3 times  without crash the frame`)
    } else {
        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 1.6, 3, elemTitle, true);
    }

}