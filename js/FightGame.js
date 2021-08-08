class FightGame {
    constructor(isVsMood, nameOne, nameTwo, selectFirstFighter, selectSecondFighter) {
        this.isVsMood = isVsMood;
        this.nameFirstFighter = nameOne;
        this.nameSecondFighter = nameTwo;
        this.selectFirstFighter = selectFirstFighter;
        this.selectSecondFighter = selectSecondFighter;
        this.isFirstPlayerWinner = false;
    }

    get firstFighterName() {
        return this.nameFirstFighter
    }
    get secondFighterName() {
        return this.nameSecondFighter
    }
    get firstFighterSelect() {
        return this.selectFirstFighter
    }
    get secondFighterSelect() {
        return this.selectSecondFighter
    }

    set firstFighterName(nameOne) {
        this.nameFirstFighter = nameOne;
    }
    set secondFighterName(nameTwo) {
        this.nameSecondFighter = nameTwo;
    }
    set firstFighterSelect(newSelection) {
        this.selectFirstFighter = newSelection;
    }
    set secondFighterSelect(newSelection) {
        this.selectSecondFighter = newSelection;
    }
    get isFirstPlayerIsWinner() {
        return this.isFirstPlayerWinner;
    }
    set isFirstPlayerIsWinner(isPlayerOneWinner) {
        this.isFirstPlayerWinner = isPlayerOneWinner;
    }


    startOver() {
        this.isVsMood = 0;
        this.nameFirstFighter = "";
        this.nameSecondFighter = "";
        this.selectFirstFighter = -1;
        this.selectSecondFighter = -1;
    }

    calckGameResult(nameleft, codeleft, nameright, coderight) {

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
}