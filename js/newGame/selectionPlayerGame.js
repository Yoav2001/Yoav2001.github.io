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
    // const name_winner = res_game.winner.name;
    // const chooseFighters = { chooseLeft: -1, chooseRight: -1 }

    if (res_game.sideWin == "left") {
        // chooseFighters.chooseLeft = res_game.winner.chooseCode;
        // chooseFighters.chooseRight = res_game.loser.chooseCode;
        fightGameSps.isFirstPlayerIsWinner = true;

    } else {
        // chooseFighters.chooseRight = res_game.winner.chooseCode;
        // chooseFighters.chooseLeft = res_game.loser.chooseCode;
        fightGameSps.isFirstPlayerIsWinner = false;
    }
    const srcLeft = mapSrcByChoose.get(chooseFighters.chooseLeft);
    const srcRight = mapSrcByChoose.get(chooseFighters.chooseRight)
    cssAfterFirstPartGame(srcLeft, srcRight, name_winner);

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