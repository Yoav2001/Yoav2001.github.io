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