// const game_state_parameters = { is_vs_mode: false, select_left_keycode: -1, select_right_keycode: -1, name_left: "", name_right: "", is_signup_succeeded: false, game_state_parameters: false, count_click_key_bord: 0, interval_countdown: "" };

class FightGame {
    constructor(isVsMood, nameOne, nameTwo, selectFirstFighter, selectSecondFighter) {
        this.isVsMood = isVsMood;
        this.nameFirstFighter = nameOne;
        this.nameSecondFighter = nameTwo;
        this.selectFirstFighter = selectFirstFighter;
        this.selectSecondFighter = selectSecondFighter;
    }

    get firstFighterName(){
        return this.nameFirstFighter
    }
    get secondFighterName(){
        return this.nameSecondFighter
    }
    get firstFighterSelect(){
        return this.selectFirstFighter
    }
    get secondFighterSelect(){
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

     

    startOver(isVsMood, nameOne, nameTwo, selectFirstFighter, selectSecondFighter) {
        this.isVsMood = isVsMood;
        this.nameFirstFighter = nameOne;
        this.nameSecondFighter = nameTwo;
        this.selectFirstFighter = selectFirstFighter;
        this.selectSecondFighter = selectSecondFighter;
    }

}

// const fightGameSps = new FightGame(false, "", "", -1, -1);

// fightGameSps.firstFighterName = "yoav"
// fightGameSps.selectSecondFighter = 2;
// console.log(fightGameSps.nameFirstFighter + "" + fightGameSps.selectSecondFighter)