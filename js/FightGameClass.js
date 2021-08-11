class FightGame {
    constructor(isVsMode, nameOne, nameTwo, selectFirstFighter, selectSecondFighter) {
        this.isVsMode = isVsMode;
        this.nameFirstFighter = nameOne;
        this.nameSecondFighter = nameTwo;
        this.selectFirstFighter = selectFirstFighter;
        this.selectSecondFighter = selectSecondFighter;
        this.isFirstPlayerWinner = false;
        this.isIntroSucceeded = false;
    }

    get introIsSucceeded() {
        return this.isIntroSucceeded
    }

    set introIsSucceeded(introSucceeded) {
        this.isIntroSucceeded = introSucceeded;
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

    updateSideWin(resultGameResult) {

        if (resultGameResult.sideWin == "left")
            this.isFirstPlayerIsWinner = true;
        else
            this.isFirstPlayerIsWinner = false;

    }
    updatePlayerChoose(resultChoose) {

        if (resultChoose.sidePlayer == "left")
            this.selectFirstFighter = resultChoose.selectPlayerValue;

        else if (resultChoose.sidePlayer == "right")
            this.selectSecondFighter = resultChoose.selectPlayerValue;
    }


    calckGameResult() {

        const PLAYER_LEFT = { name: this.nameFirstFighter, chooseCode: this.selectFirstFighter, iswinner: false };
        const PLAYER_RIGHT = { name: this.nameSecondFighter, chooseCode: this.selectSecondFighter, iswinner: false };
        const PLAYER_TEKO = { name: "teko", chooseCode: this.selectFirstFighter };

        if (this.selectFirstFighter === this.selectSecondFighter) {
            return { winner: PLAYER_TEKO, loser: PLAYER_TEKO, sideWin: null }

        } else if (this.selectFirstFighter === 1 && this.selectSecondFighter === 2) {
            return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

        } else if (this.selectFirstFighter === 1 && this.selectSecondFighter === 3) {
            return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

        } else if (this.selectFirstFighter === 2 && this.selectSecondFighter === 1) {
            return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

        } else if (this.selectFirstFighter === 2 && this.selectSecondFighter === 3) {
            return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

        } else if (this.selectFirstFighter === 3 && this.selectSecondFighter === 1) {
            return { winner: PLAYER_RIGHT, loser: PLAYER_LEFT, sideWin: "right" }

        } else if (this.selectFirstFighter === 3 && this.selectSecondFighter === 2) {

            return { winner: PLAYER_LEFT, loser: PLAYER_RIGHT, sideWin: "left" }

        }

    }

    startOver() {
        this.isVsMode = 0;
        this.nameFirstFighter = "";
        this.nameSecondFighter = "";
        this.selectFirstFighter = -1;
        this.selectSecondFighter = -1;
    }

    introGameSet(isVsMode, nameOne, nameTwo) {
        this.isVsMode = isVsMode;
        this.nameFirstFighter = nameOne;
        this.nameSecondFighter = nameTwo;
    }











}