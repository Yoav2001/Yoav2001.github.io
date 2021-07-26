function game(nameleft, codeleft, nameright, coderight) {
    const PLAYER_LEFT = { name: nameleft, chooseCode: codeleft, iswinner: false };
    const PLAYER_RIGHT = { name: nameright, chooseCode: coderight, iswinner: false };
    const PLAYER_TEKO = { name: "teko", chooseCode: null };

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

function randomPcSelection() {
    const selectComputer = Math.floor(Math.random() * 3);
    return selectComputer + 1;
}

function promptFighterName(text_alert) {
    const resPrompt = prompt(text_alert);

    if (resPrompt === "" || resPrompt === NaN || resPrompt === null) {
        alert("User cancelled  -please choose the mood : computer / vs  ")
        return { nameFighter: resPrompt, isPromptSucceed: false }

    } else
        return { nameFighter: resPrompt, isPromptSucceed: true };
}


function getNamePcMode() {

    const resLeftFighter = promptFighterName(`${prompt_txt}one:`)
    if (resLeftFighter.isPromptSucceed) {
        return { PlayerLeftName: resLeftFighter.nameFighter, playerRightName: "PC" }
    }

}

function enterDetailsVs() {
    const resLeftFighter = promptFighterName(`${prompt_txt}one:`)
    if (resLeftFighter.isPromptSucceed) {
        const resRightFighter = promptFighterName(`${prompt_txt}two:`)
        if (resRightFighter.isPromptSucceed) {
            return {
                PlayerLeftName: resLeftFighter.nameFighter,
                playerRightName: resRightFighter.nameFighter
            }
        }
    }
}