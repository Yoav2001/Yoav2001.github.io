// function enter_detilasFighter(isVsMode) {

//     const namePlayers = { namePlayerLeft: "", namePlayerRight: "" };
//     const resNames = getPlayersNames(isVsMode, "Please enter your name -fighter ");
//     namePlayers.namePlayerLeft = resNames.PlayerLeftName;
//     namePlayers.namePlayerRight = resNames.playerRightName;
//     fightGameSps.firstFighterName = namePlayers.namePlayerLeft;
//     fightGameSps.secondFighterName = namePlayers.namePlayerRight;
//     VisibilityAfterSignUp(isVsMode, namePlayers);
// }

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

function VisibilityAfterSignUp() {

    const textSignUp = "let start the game ";
    alert(textSignUp);
    btnModeComputer.disabled = true;
    btnModeVs.disabled = true;
}