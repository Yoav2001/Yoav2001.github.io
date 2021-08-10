function getPlayerSideAndChooseByKeyCode(keyCode) {
    const mapKeyBord = new Map(); //[87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]
    mapKeyBord.set(87, 1);
    mapKeyBord.set(83, 2);
    mapKeyBord.set(68, 3);
    mapKeyBord.set(74, 1);
    mapKeyBord.set(75, 2);
    mapKeyBord.set(76, 3);
    // const a = new Map()//לנסות להגדיר את המפ בשורה אחת


    const selectPlayerByMap = mapKeyBord.get(keyCode);

    if ([87, 83, 68].includes(keyCode)) {
        return { selectPlayerValue: selectPlayerByMap, sidePlayer: "left" }

    } else if ([74, 75, 76].includes(keyCode)) {
        return { selectPlayerValue: selectPlayerByMap, sidePlayer: "right" }
    }
    return { selectPlayerValue: -1, sidePlayer: "" }

}

function randomPcSelection() {
    const selectComputer = Math.floor(Math.random() * 3);
    return selectComputer + 1;
}