function cssAfterFirstPartGame(src_left, src_right, namewinner, isVsMood) {

    elemTitle.classList.remove('display_none');
    elemTitle.className += " text_winner";
    if (namewinner === "teko")
        elemTitle.innerHTML = `${namewinner} `;
    else
        elemTitle.innerHTML = `${namewinner} winner `;

    imgLeftPlayerChoose.src = src_left;
    imgRightPlayerChoose.src = src_right;

    imgLeftPlayerChoose.classList.remove("display_none");
    imgRightPlayerChoose.classList.remove("display_none");
    imgLeftPlayerChoose.className += " emoji_left";
    imgRightPlayerChoose.className += " emoji_right";

    // elem_span_count_down.style.visibility = "visible";
    // elemBtnCountDown.style.visibility = "visible";
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


function clear_elment() {
    imgLeftPlayerChoose.className = "display_none";
    imgRightPlayerChoose.className = "display_none";
    imgLeftPlayerChoose.src = "";
    imgRightPlayerChoose.src = "";
    elemTitle.className = "display_none"
    elemTitle.innerHTML = ""
    btnModeComputer.disabled = false;
    btnModeVs.disabled = false;
    imgKeybordLeft.classList.remove("img_key_bord_left");
    imgKeybordLeft.classList.add("display_none");
    imgKeybordRight.classList.remove("img_key_bord_right");
    imgKeybordRight.classList.add("display_none");
    divCountDown.className = "display_none";
    elemBtnCountDown.disabled = false;
    countDownObj.count = 5;
    elemBtnCountDown.innerHTML = "Start Fight";
    const canvasEleme = document.getElementsByTagName("canvas")[0];
    if (canvasEleme != null)
        canvasEleme.remove();

}