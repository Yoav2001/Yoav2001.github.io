const fightGameSps = new FightGame(false, "", "", -1, -1, false);
const intervalObj = { funName: "", ms: 0, interval: null };

// כתובת תמונות אימוגי =אבן/נייר/מספרים
const STONE_SRC = "../images/imagefight/stoneEmoji.png";
const PAPER_SRC = "../images/imagefight/paperEmoji.png";
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


function introGame(isVsMode) {

    fightGameSps.isVsMode = isVsMode;
    if (!isVsMode)
        fightGameSps.selectSecondFighter = randomPcSelection();

    const resNames = getPlayersNames(isVsMode, "Please enter your name -fighter ");
    fightGameSps.firstFighterName = resNames.PlayerLeftName;
    fightGameSps.secondFighterName = resNames.playerRightName;
    VisibilityAfterSignUp();

    selectionPlayers()
}



function selectionPlayers() {

    window.addEventListener("keydown", function(event) {

        const keyCode = event.keyCode;
        if (fightGameSps.firstFighterSelect === -1 || fightGameSps.secondFighterSelect === -1) {
            const resChoose = getPlayerSideAndChooseByKeyCode(keyCode);
            fightGameSps.updatePlayerChoose(resChoose);
            if (fightGameSps.firstFighterSelect !== -1 && fightGameSps.secondFighterSelect !== -1) {
                endFirstPartGame()
            }
        }
    });
}



function endFirstPartGame() {

    const resultgame = fightGameSps.calckGameResult();
    fightGameSps.updateSideWin(resultgame)
    const nameWinner = resultgame.winner.name;
    const srcLeft = mapSrcByChoose.get(fightGameSps.firstFighterSelect);
    const srcRight = mapSrcByChoose.get(fightGameSps.secondFighterSelect)
    cssAfterFirstPartGame(srcLeft, srcRight, nameWinner, fightGameSps.isVsMode);

    if (nameWinner != "teko" && fightGameSps.isVsMode) {
        styleElmentBeforeCanvas(nameWinner);
    } else {
        setTimeout(() => {
            startOverGame();
        }, 3000);
    }
}

function startOverGame() {
    fightGameSps.startOver();
    clear_elment();
    clearInterval(intervalObj.interval);

}

function startGameCanvas() {
    imgLeftPlayerChoose.className = "emoji_display_startCanvas";
    imgRightPlayerChoose.className = "emoji_display_startCanvas";
    elemBtnCountDown.disabled = true;
    intervalObj.interval = setInterval(countDownCircle, 1000);
    clearCountDown()
    setTimeout(() => {
        startCanvas()
    }, 1000);
}

function clearCountDown() {
    clearInterval(intervalObj.interval);
    elemBtnCountDown.style.visibility = "collapse";
    elem_span_count_down.style.visibility = "collapse";
}

function startCanvas() {
    if (fightGameSps.isFirstPlayerIsWinner === true) {
        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 2, 3, elemTitle, false);
        alert(`${fightGameSps.nameFirstFighter} you need to catch ${fightGameSps.secondFighterName} 3 times  without crash the frame`)
    } else {
        game_second_part(30, 30, 30, 30, imgLeftPlayerChoose.src, imgRightPlayerChoose.src, 2, 3, elemTitle, true);
    }
}




// function updatePlayerChoose(keyCode) {
//     const resChoose = getPlayerSideAndChooseByKeyCode(keyCode);

//     if (resChoose.sidePlayer == "left")
//         fightGameSps.selectFirstFighter = resChoose.selectPlayerValue;

//     else if (resChoose.sidePlayer == "right")
//         fightGameSps.selectSecondFighter = resChoose.selectPlayerValue;
// }

// function updateSideWin(resGameResult) {

//     if (resGameResult.sideWin == "left")
//         fightGameSps.isFirstPlayerIsWinner = true;
//     else
//         fightGameSps.isFirstPlayerIsWinner = false;

// }