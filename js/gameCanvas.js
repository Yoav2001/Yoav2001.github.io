let stone_src = "../images//imagefight/stoneEmoji.png";
let paper_src = "../images//imagefight/paperEmoji.png";
let scissors_src = "../images/imagefight/ScissorsEmoji.png";


const image_left = new Image();
image_left.src = paper_src;
const image_right = new Image();
image_right.src = stone_src;

const left_piece_width = 30;
const left_piece_height = 30;
const right_piece_width = 30;
const right_piece_height = 30;

const canvasWidth = window.innerWidth * 0.75;
const canvasHeight = window.innerHeight * 0.75;

let myGamePiece_left;
let myGamePiece_right;
const velocity = 0.7;
const count_crash = 0;;
// let mySound;
//strat game 
//מגדיר את שני המשתנים של האבן /נייר/ מספריים
function startGame() {
    // canvasWidth * 0.1, canvasHeight / 2
    myGamePiece_left = new component(left_piece_width, left_piece_height, true, canvasWidth * 0.1, canvasHeight / 2, "red");
    myGamePiece_right = new component(right_piece_width, right_piece_height, false, canvasWidth * 0.9, canvasHeight / 2, "green");
    // mySound = new sound("../sounds/JavaScript_SoundEffects_Death.mp3");
    // mySound.play();
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
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
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop: function() {
        clearInterval(this.interval);
    }
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

function updateGameArea() {
    // myGamePiece_right.speedX = 0;
    // myGamePiece_right.speedY = 0;



    if (myGamePiece_left.crashWith(myGamePiece_right)) {
        // mySound.play();

        myGameArea.stop();
        return;
    } else {
        myGameArea.clear(); //חייב שהמיקום הקודם של האובייקטים ימחק 
        // myGamePiece_right.update();
        // myGamePiece_left.x += myGamePiece_left.speedX;
        // myGamePiece_left.y += myGamePiece_left.speedY;
        // myGamePiece_left.update();
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

        } else

        {
            myGamePiece_right.speedY = 0;
            myGamePiece_right.speedX = 0;


        }

        // function sound(src) {
        //     this.sound = document.createElement("audio");
        //     this.sound.src = src;
        //     this.sound.setAttribute("preload", "auto");
        //     this.sound.setAttribute("controls", "none");
        //     this.sound.style.display = "none";
        //     document.body.appendChild(this.sound);
        //     this.play = function() {
        //         this.sound.play();
        //     }
        //     this.stop = function() {
        //         this.sound.pause();
        //     }
        // }

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



        } else

        {


            myGamePiece_left.speedY = 0;
            myGamePiece_left.speedX = 0;


        }

        myGamePiece_right.newPos();
        myGamePiece_right.update();

        myGamePiece_left.newPos();
        myGamePiece_left.update();

    }


    // alert(myGamePiece_right.x);



    // למטה ימינה לחא עובד

    function isMoveable(x_comp, y_comp, width_comp, height_comp) {
        x_comp = parseInt(x_comp);
        y_comp = parseInt(y_comp);
        console.log((x_comp - width_comp))
        return (x_comp == 0 || y_comp == 0 || (x_comp - width_comp) == canvasWidth || (y_comp - height_comp) == canvasHeight);
    }
}