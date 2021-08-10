function game_second_part(oneCompWidth, oneCompHeight, secondCompWidth, secondCompHeight, imgSrcLeft, imgSrcRight, velocityComp, countCompCrash, elemTitleRound, isFirstPlayerWinner) {
    const IMAGE_LEFT = new Image();
    IMAGE_LEFT.src = imgSrcLeft;
    const IMAGE_RIGHT = new Image();
    IMAGE_RIGHT.src = imgSrcRight;

    const CANVAS_WIDTH = window.innerWidth * 0.65;
    const CANVAS_HEIGHT = window.innerHeight * 0.65;

    const ONE_COMP_X_START = CANVAS_WIDTH * 0.1;
    const ONE_COMP_Y_START = CANVAS_HEIGHT / 2;

    const SECOND_COMP_X_START = CANVAS_WIDTH * 0.9;
    const SECOND_COMP_Y_START = CANVAS_HEIGHT / 2;

    const firstGamePiece = new component(oneCompWidth, oneCompHeight, true, ONE_COMP_X_START, ONE_COMP_Y_START);
    const secondGamePiece = new component(secondCompWidth, secondCompHeight, false, SECOND_COMP_X_START, SECOND_COMP_Y_START);
    const VELOCITY = velocityComp;
    const crashParameters = { round: 1, is_crash: false }; //crash with canvs/each other
    const myGameArea = {
        canvas: document.createElement("canvas"),
        start: function() { //קורה פעם אחת בהתחלת המשחק
            this.canvas.width = CANVAS_WIDTH;
            this.canvas.height = CANVAS_HEIGHT;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 1);
            this.keyMap = [];
            elemTitleRound.innerHTML = "Round 1";

            window.addEventListener('keydown', (e) => {
                if (!this.keyMap.includes(e.keyCode)) {
                    this.keyMap.push(e.keyCode);
                }
            })

            window.addEventListener('keyup', (e) => {
                if (this.keyMap.includes(e.keyCode)) {
                    this.keyMap.splice(this.keyMap.indexOf(e.keyCode), 1);
                }
            })
        },
        clear: function() { //קורה כל כמה מאיוצ שנייה כדי למחוק את המיקום הקודם 
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function() { //כאשר יש מפגש
            clearInterval(this.interval);
        }
    }

    function startGame() {
        myGameArea.start();
    }
    startGame();

    function restart_round() {
        firstGamePiece.x = ONE_COMP_X_START;
        firstGamePiece.y = ONE_COMP_Y_START;
        firstGamePiece.speedX = 0;
        firstGamePiece.speedY = 0;

        secondGamePiece.x = SECOND_COMP_X_START;
        secondGamePiece.y = SECOND_COMP_Y_START;
        secondGamePiece.speedX = 0;
        secondGamePiece.speedY = 0;

        myGameArea.keyMap = [];
        myGameArea.interval = setInterval(updateGameArea, 1);
        if (crashParameters.round < 4) {
            const round = crashParameters.round;
            const textRound = `Round  ${round} `
            elemTitleRound.innerHTML = textRound;
        }
    }

    function component(width, height, isLeft, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;

        this.update = function() {
            ctx = myGameArea.context;

            ctx.fillRect(this.x, this.y, this.width, this.height);

            if (isLeft) {
                if (isFirstPlayerWinner) {
                    myGameArea.context.drawImage(IMAGE_LEFT, this.x, this.y, this.width, this.height);
                    ctx.fillStyle = "green";
                } else {
                    myGameArea.context.drawImage(IMAGE_LEFT, this.x, this.y, this.width, this.height);
                    ctx.fillStyle = "red";
                }

            } else {
                if (!isFirstPlayerWinner) {
                    myGameArea.context.drawImage(IMAGE_RIGHT, this.x, this.y, this.width, this.height);
                    ctx.fillStyle = "green";
                } else {
                    myGameArea.context.drawImage(IMAGE_RIGHT, this.x, this.y, this.width, this.height);
                    ctx.fillStyle = "red";
                }
            }
        }

        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        this.crashWith = function(otherobj) {
            const myleft = this.x;
            const myright = this.x + (this.width);
            const mytop = this.y;
            const mybottom = this.y + (this.height);
            const otherleft = otherobj.x;
            const otherright = otherobj.x + (otherobj.width);
            const othertop = otherobj.y;
            const otherbottom = otherobj.y + (otherobj.height);
            let crash = true;

            if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                crash = false;
            }

            return crash;
        }
    }

    function key(x) {
        return (myGameArea.keyMap.includes(x));
    }

    function updateGameArea() {

        if (crashParameters.round == countCompCrash + 1) {
            myGameArea.stop();
            crashParameters.is_crash = false
            return;
        }
        if (isAllCompCanMove()) {
            myGameArea.clear();
            updateGamePieceVelocity();

        } else {
            crashParameters.is_crash = true;
        }

        firstGamePiece.newPos();
        firstGamePiece.update();
        secondGamePiece.newPos();
        secondGamePiece.update();

        if (crashParameters.is_crash) {
            console.log(crashParameters.round)
            debugger;
            myGameArea.stop();

            crashParameters.round++;
            restart_round();
            crashParameters.is_crash = false;
        }
    }

    function isAllCompCanMove() {
        const oneCompCanMove = !isNotMoveAble(firstGamePiece.x, firstGamePiece.y, firstGamePiece.width, firstGamePiece.height)
        const secondCompCanMove = !isNotMoveAble(secondGamePiece.x, secondGamePiece.y, secondGamePiece.width, secondGamePiece.height)
        const isCompCrash = firstGamePiece.crashWith(secondGamePiece);

        if (oneCompCanMove && secondCompCanMove && !isCompCrash)
            return true;
        else
            return false;

    }

    function isNotMoveAble(x_comp, y_comp, width_comp, height_comp) {

        console.log(parseInt(x_comp + width_comp))
        console.log(parseInt(CANVAS_WIDTH))
        return (parseInt(x_comp) <= 0 || parseInt(y_comp) <= 0 || parseInt(x_comp + width_comp) >= parseInt(CANVAS_WIDTH) || parseInt(y_comp + height_comp) >= parseInt(CANVAS_HEIGHT));
    }



    function updateGamePieceVelocity() {
        const leftOneCompnnet = key(65);
        const upOneCompnnet = key(87);
        const rightOneCompnnet = key(68);
        const downOneCompnnet = key(83);

        const leftSecondCompnnet = key(37);
        const upSecondCompnnet = key(38);
        const rightSecondCompnnet = key(39);
        const downSecondCompnnet = key(40);

        if (leftOneCompnnet) {
            firstGamePiece.speedX = -VELOCITY;

        } else if (upOneCompnnet) {
            firstGamePiece.speedY = -VELOCITY;

        } else if (rightOneCompnnet) {
            firstGamePiece.speedX = VELOCITY;

        } else if (downOneCompnnet) {

            firstGamePiece.speedY = VELOCITY;

        } else if (leftSecondCompnnet) {
            secondGamePiece.speedX = -VELOCITY;
            console.log("the second comp")

        } else if (upSecondCompnnet) {
            secondGamePiece.speedY = -VELOCITY;

        } else if (rightSecondCompnnet) {
            secondGamePiece.speedX = VELOCITY;


        } else if (downSecondCompnnet) {
            secondGamePiece.speedY = VELOCITY;

        }
    }


}