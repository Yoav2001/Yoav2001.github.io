//game_second_part(...)
//function that create a canvas game with 2 component
// GET function : paremter for the canvas view and for the component settings
// count crash -how many crash untul the game over 

function game_second_part(left_comp_width, left_comp_height, right_comp_width, right_comp_height, img_src_left, img_src_right, velocity_comp, count_comp_crash) {
    const image_left = new Image();
    image_left.src = img_src_left;
    const image_right = new Image();
    image_right.src = img_src_right;

    const left_piece_width = left_comp_width;
    const left_piece_height = left_comp_height;
    const right_piece_width = right_comp_width;
    const right_piece_height = right_comp_height;

    const canvasWidth = window.innerWidth * 0.65;
    const canvasHeight = window.innerHeight * 0.65;

    const x_left_start = canvasWidth * 0.1;
    const y_left_start = canvasHeight / 2;

    const x_right_start = canvasWidth * 0.9;
    const y_right_start = canvasHeight / 2;

    const myGamePiece_left = new component(left_piece_width, left_piece_height, true, x_left_start, y_left_start, "red");
    const myGamePiece_right = new component(right_piece_width, right_piece_height, false, x_right_start, y_right_start, "green");
    const velocity = velocity_comp;

    const crash_parameters = { count: count_comp_crash, is_crash: false }; //crash with canvs/each other


    const myGameArea = {

        canvas: document.createElement("canvas"),
        start: function() { //קורה פעם אחת בהתחלת המשחק
            this.canvas.width = canvasWidth;
            this.canvas.height = canvasHeight;
            this.context = this.canvas.getContext("2d");


            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 1);
            this.keyMap = [];


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

        myGamePiece_left.x = x_left_start;
        myGamePiece_left.y = y_left_start;
        myGamePiece_left.speedX = 0;
        myGamePiece_left.speedY - 0;

        myGamePiece_right.x = x_right_start;
        myGamePiece_right.y = y_right_start;
        myGamePiece_right.speedX = 0;
        myGamePiece_right.speedY - 0;

        myGameArea.keyMap = [];

        myGameArea.interval = setInterval(updateGameArea, 1);

    }

    function component(width, height, isLeft, x, y, color) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

            if (isLeft) {
                myGameArea.context.drawImage(image_left, this.x, this.y, this.width, this.height);
            } else {
                myGameArea.context.drawImage(image_right, this.x, this.y, this.width, this.height);
            }
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        this.crashWith = function(otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;
            if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                crash = false;
            }
            return crash;
        }
    }

    function key(x) {
        return (myGameArea.keyMap.includes(x));
    }


    //הפעולה מעדכנת את מצב המצב 
    // הפעולה בודקת :אם יש מפגש בין 2 הצורות מפסיקה את המספקה ואת הפעולה 
    // אחרת מנקרה את המצב הקודם ומעדכנת את מיקום האובייקטים(בתנאי שלא הגיעו לגבולות)
    function updateGameArea() {

        //מאפס את המהירות שלא ימשיך לגלוש   גם אחרי שעוזב את המקש
        myGamePiece_right.speedX = 0;
        myGamePiece_right.speedY = 0;
        myGamePiece_left.speedY = 0;
        myGamePiece_left.speedX = 0;

        if (crash_parameters.count == 0) {
            myGameArea.stop();
            return;
        }
        if (myGamePiece_left.crashWith(myGamePiece_right)) {
            crash_parameters.is_crash = true;

        } else {
            myGameArea.clear(); //חייב שהמיקום הקודם של האובייקטים ימחק 
            if (!isMoveable(myGamePiece_right.x, myGamePiece_right.y, myGamePiece_right.width, myGamePiece_right.height)) {
                //left
                if (key(37)) {
                    myGamePiece_right.speedX = -velocity;
                }
                //up
                if (key(38)) {
                    myGamePiece_right.speedY = -velocity;
                }
                //right
                if (key(39)) {
                    myGamePiece_right.speedX = velocity;
                }
                //down
                if (key(40)) {
                    myGamePiece_right.speedY = velocity;
                }

            } else {
                crash_parameters.is_crash = true;

            }

            if (!isMoveable(myGamePiece_left.x, myGamePiece_left.y, myGamePiece_left.width, myGamePiece_left.height)) {
                if (key(65)) {
                    myGamePiece_left.speedX = -velocity;
                }
                if (key(87)) {
                    myGamePiece_left.speedY = -velocity;
                }
                if (key(68)) {
                    myGamePiece_left.speedX = velocity;
                }
                if (key(83)) {
                    myGamePiece_left.speedY = velocity;
                }

            } else {
                crash_parameters.is_crash = true;
            }

            myGamePiece_right.newPos();
            myGamePiece_right.update();

            myGamePiece_left.newPos();
            myGamePiece_left.update();

        }

        if (crash_parameters.is_crash) {
            myGameArea.stop();
            restart_round();
            crash_parameters.count--;
            crash_parameters.is_crash = false;

        }

    }

    function isMoveable(x_comp, y_comp, width_comp, height_comp) {
        x_comp = parseInt(x_comp);
        y_comp = parseInt(y_comp);
        // console.log(`the comp ${0} +the cmnavas {}`)
        // console.log((" " + x_comp + width_comp))
        return (x_comp == 0 || y_comp == 0 || (x_comp + width_comp) == parseInt(canvasWidth) || (y_comp + height_comp) == parseInt(canvasHeight));
    }

}