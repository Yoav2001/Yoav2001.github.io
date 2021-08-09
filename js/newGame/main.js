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

function introGame(isVsMode) {
    const resNames = getPlayersNames(isVsMode, "Please enter your name -fighter ");
    fightGameSps.firstFighterName = resNames.PlayerLeftName;
    fightGameSps.secondFighterName = resNames.playerRightName;
    VisibilityAfterSignUp(isVsMode, namePlayers);
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
    cssAfterFirstPartGame(srcLeft, srcRight, nameWinner);

    if (nameWinner != "teko" && fightGameSps.isVsMood) {
        styleElmentBeforeCanvas(namewinner);
    } else {
        fightGameSps.startOver();
        clear_elment();
        clearInterval(intervalObj.interval);

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