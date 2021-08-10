function countDownCircle() {

    imgLeftPlayerChoose.className = "emoji_display_startCanvas";
    imgRightPlayerChoose.className = "emoji_display_startCanvas";
    elemBtnCountDown.disabled = true;

    if (countDownObj.count > 0) {
        elemBtnCountDown.innerText = countDownObj.count;
        elemBtnCountDown.style.visibility = "visible";
    } else if (countDownObj.count == 0) {
        countDownObj.text = "GO"
        elemBtnCountDown.innerHTML = countDownObj.text;


    } else {

    }
    countDownObj.count--;
}