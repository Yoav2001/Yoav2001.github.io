function getPlayerSideAndChooseByKeyCode(keyCode) {
    const mapKeyBord = new Map(); //[87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]
    mapKeyBord.set(87, { selectPlayerValue: 1, sidePlayer: "left" });
    mapKeyBord.set(83, { selectPlayerValue: 2, sidePlayer: "left" });
    mapKeyBord.set(68, { selectPlayerValue: 3, sidePlayer: "left" });
    mapKeyBord.set(74, { selectPlayerValue: 1, sidePlayer: "right" });
    mapKeyBord.set(75, { selectPlayerValue: 2, sidePlayer: "right" });
    mapKeyBord.set(76, { selectPlayerValue: 3, sidePlayer: "right" });
    // ? אומר אם הוא לא מצא את הקוד במאפ
    return mapKeyBord.get(keyCode) ? mapKeyBord.get(keyCode) : { selectPlayerValue: -1, sidePlayer: "" }
}

function randomPcSelection() {
    const selectComputer = Math.floor(Math.random() * 3);
    return selectComputer + 1;
}