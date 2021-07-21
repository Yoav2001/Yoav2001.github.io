// let stone_src = "../images//imagefight/stoneEmoji.png";
// let paper_src = "../images//imagefight/paperEmoji.png";
// let scissors_src = "../images/imagefight/ScissorsEmoji.png";



// game_second_part(30, 30, 30, 30, stone_src, scissors_src, 0.7, 3);


// let mySound;
//strat game 
//מגדיר את שני המשתנים של האבן /נייר/ מספריים


function game_second_part(left_comp_width, left_comp_height, right_comp_width, right_comp_height, img_src_left, img_src_right, velocity_comp, count_comp_crash, id_ele_round) {
    // console.log(left_comp_width);
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

    let myGamePiece_left;
    let myGamePiece_right;
    const velocity = velocity_comp;
    // const count_crash = parseInt(document.getElementById("elem_count_rounds"));
    let count_crash = count_comp_crash;
    let is_crash = false; //crash with canvs/each other

    const myGameArea = {
        canvas: document.createElement("canvas"),
        start: function() { //קורה פעם אחת בהתחלת המשחק
            this.canvas.width = canvasWidth;
            this.canvas.height = canvasHeight;
            this.context = this.canvas.getContext("2d");
            // this.context.drawImage(image_left, 200, 200, 200, 200)
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
        // canvasWidth * 0.1, canvasHeight / 2
        myGamePiece_left = new component(left_piece_width, left_piece_height, true, x_left_start, y_left_start, "red");
        myGamePiece_right = new component(right_piece_width, right_piece_height, false, x_right_start, y_right_start, "green");
        // mySound = new sound("../sounds/JavaScript_SoundEffects_Death.mp3");
        // mySound.play();

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

    function restart_game() {


    }



    // function make_base(src_img) {
    //     base_image = new Image();
    //     base_image.src = src_img;
    //     base_image.onload = function() {
    //         context.drawImage(base_image, 0, 0);
    //     }
    // }


    function component(width, height, isLeft, x, y, color) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;

        // make_base(img_src);
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
        let ele = document.getElementById(toString(id_ele_round));
        // ele.innerHTML = count_crash;

        //מאפס את המהירות שלא ימשיך לגלוש   גם אחרי שעוזב את המקש
        myGamePiece_right.speedX = 0;
        myGamePiece_right.speedY = 0;
        myGamePiece_left.speedY = 0;
        myGamePiece_left.speedX = 0;

        if (count_crash == 0) {
            myGameArea.stop();
            // document.removeChild(myGameArea.canvas)
            // myGameArea.context.clearRect(0, 0, canvasWidth, canvasHeight);
            return;

        }
        if (myGamePiece_left.crashWith(myGamePiece_right)) {
            // mySound.play();
            is_crash = true;

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
                is_crash = true;

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
                is_crash = true;
            }

            myGamePiece_right.newPos();
            myGamePiece_right.update();

            myGamePiece_left.newPos();
            myGamePiece_left.update();

        }


        if (is_crash) {
            myGameArea.stop();
            restart_round();
            count_crash--;
            is_crash = false;

        }

        // alert(myGamePiece_right.x);



        // למטה ימינה לחא עובד



    }

    function isMoveable(x_comp, y_comp, width_comp, height_comp) {
        x_comp = parseInt(x_comp);
        y_comp = parseInt(y_comp);
        // console.log(`the comp ${0} +the cmnavas {}`)
        // console.log((" " + x_comp + width_comp))
        return (x_comp == 0 || y_comp == 0 || (x_comp + width_comp) == parseInt(canvasWidth) || (y_comp + height_comp) == parseInt(canvasHeight));
    }

}