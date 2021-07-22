function game(nameleft, codeleft, nameright, coderight) {
    const stone = { nameFight: "stone", code: 1 };
    const paper = { nameFight: "paper", code: 2 };
    const scissors = { nameFight: "scissors", code: 3 };

    const x = {
        a: 1,
        b: 2
    }

    const y = {
        ...x,
        b: 3
    }


    const player_left = { name: nameleft, chooseCode: codeleft, iswinner: false };
    const player_right = { name: nameright, chooseCode: coderight, iswinner: false };

    const player_teko = { name: "teko", chooseCode: null };
    console.log(player_teko)
    const result = { winner: player_teko, loser: player_teko, sideWin: null, is_teko: false };

    if (codeleft === coderight) {
        result.is_teko = true;
        result.winner.chooseCode = codeleft; //זה לא משנה יכלתי להשוות לימיני
        console.log(player_teko)

    }
    if (codeleft === 1 && coderight === 2) {
        return {}
    }

    if (codeleft === 1 && coderight === 3) {
        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";
    }

    if (codeleft === 2 && coderight === 1) {

        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";

    }

    if (codeleft === 2 && coderight === 3) {

        result.winner = player_right;
        result.loser = player_left;
        result.sideWin = "right";
    }

    if (codeleft === 3 && coderight === 1) {


        result.winner = player_right;
        result.loser = player_left;
        result.sideWin = "right";

    }

    if (codeleft === 3 && coderight === 2) {

        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";
    }

    console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
    if (!result.teko)
        console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

    else
        console.log("teko")

    console.log("dasdsa")
    console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
    if (!result.teko)
        console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

    else
        console.log("teko")
    return result;


}

function is_key_code_correct(key_value, currElement, index) {
    if (key_value == currElement) {
        if (index < 3 && game_state_parameters.select_left_keycode === -1) {
            game_state_parameters.select_left_keycode = index + 1; //INDEX 0,1,2=בגלל זה מוסיף אחד
            game_state_parameters.check_key_bord_fight = true;
            game_state_parameters.count_click_key_bord++;
        } else if (index < 3 && game_state_parameters.select_left_keycode != -1) {
            game_state_parameters.check_key_bord_fight = false;
        }
        if (index > 2 && game_state_parameters.select_right_keycode === -1) {
            game_state_parameters.select_right_keycode = index - 2; //index --3,4,5=-2=1,2,3
            game_state_parameters.check_key_bord_fight = true;
            game_state_parameters.count_click_key_bord++;
        } else if (index > 2 && game_state_parameters.select_right_keycode != -1) {
            game_state_parameters.check_key_bord_fight = false;
        }

    }
}