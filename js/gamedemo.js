function randomPcSelection() {
    const selectComputer = Math.floor(Math.random() * 3);
    return selectComputer + 1;
}

function getPlayersNames(isVsMood, alertText) {
    if (!isVsMood)
        return getNamesPcMode(alertText)

    return getNamesVsMode(alertText);
}

function getNamesPcMode(alertText) {

    const resLeftFighter = promptFighterName(`${alertText}one:`)
    if (resLeftFighter.isPromptSucceed) {
        return { PlayerLeftName: resLeftFighter.nameFighter, playerRightName: "PC" }
    }

}

function getNamesVsMode(alertText) {
    const resLeftFighter = promptFighterName(`${alertText}one:`)
    if (resLeftFighter.isPromptSucceed) {
        const resRightFighter = promptFighterName(`${alertText}two:`)
        if (resRightFighter.isPromptSucceed) {
            return {
                PlayerLeftName: resLeftFighter.nameFighter,
                playerRightName: resRightFighter.nameFighter
            }
        }
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

function calckGameResult(nameleft, codeleft, nameright, coderight) {

    const PLAYER_LEFT = { name: nameleft, chooseCode: codeleft, iswinner: false };
    const PLAYER_RIGHT = { name: nameright, chooseCode: coderight, iswinner: false };
    const PLAYER_TEKO = { name: "teko", chooseCode: codeleft };

    if (codeleft == coderight) {
        return { winner: PLAYER_TEKO, loser: PLAYER_TEKO, sideWin: null }

    } else if (codeleft == 1 && coderight == 2) {
        return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

    } else if (codeleft == 1 && coderight == 3) {
        return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

    } else if (codeleft == 2 && coderight == 1) {
        return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

    } else if (codeleft == 2 && coderight == 3) {
        return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

    } else if (codeleft == 3 && coderight == 1) {
        return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

    } else if (codeleft == 3 && coderight == 2) {

        return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

    }
}

function setCssClassToElment(nameClass, arrElement) {
    arrElement.forEach(element => element.className = nameClass);
}