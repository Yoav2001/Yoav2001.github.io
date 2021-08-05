// function that get string for alert
// the function return the asyan alert





// function that get two prarmeter

function index_map_in_map(number, map_numbers) {



}


yourchoice = false;
switch (yourchoice) {
    case true:
        console.log("trueddd");
        break;
    case false:
        console.log("falsedd");
        break;
}

let rndInt = Math.floor(Math.random() * 3) + 3;










// function isPlayerSelect() {
//     const leftPlayerChoose = fightGameSps.firstFighterName;
//     const rightPlayerChoose = fightGameSps.secondFighterName;
//     if (leftPlayerChoose != -1 && rightPlayerChoose != -1)
//         return true;
//     return false;

// }
// שלב א של המשחק 
// key bord for the game
//LISTNER-בעת חיצה על המקלדת 

// window.addEventListener("keydown", function(event) {
//     // this.alert(game_state_parameters.count_click_key_bord)
//     // משתנה עם ערך בוליאני , אמת=המקש שלחצו במקלדת הוא חלק מהמקשים המותרת
//     let key_value
//         // let fight = { side: , value: };
//     if (game_state_parameters.is_signup_succeeded && (game_state_parameters.count_click_key_bord == 0 || game_state_parameters.count_click_key_bord == 1)) { //אם שניהם לא בחרו עדיין
//         key_value = event.keyCode; //key value of key enter on key bord
//         arr_key_fight.map((currElement, index) => {
//             is_key_code_correct(key_value, currElement, index);
//         });

//         if (!game_state_parameters.check_key_bord_fight) {
//             alert("you choose inccort key bord /one side choose more than on time")
//         }
//     }
//     if (game_state_parameters.count_click_key_bord == 2) {
//         fightClickCalck();
//         game_state_parameters.count_click_key_bord++;
//     }
// });


// function is_key_code_correct(key_value, currElement, index) {
//     if (key_value == currElement) {
//         if (index < 3 && game_state_parameters.select_left_keycode == -1) {
//             game_state_parameters.select_left_keycode = index + 1; //INDEX 0,1,2=בגלל זה מוסיף אחד
//             game_state_parameters.check_key_bord_fight = true;
//             game_state_parameters.count_click_key_bord++;
//         } else if (index < 3 && game_state_parameters.select_left_keycode != -1) {
//             game_state_parameters.check_key_bord_fight = false;
//         }
//         if (index > 2 && game_state_parameters.select_right_keycode == -1) {
//             game_state_parameters.select_right_keycode = index - 2; //index --3,4,5=-2=1,2,3
//             game_state_parameters.check_key_bord_fight = true;
//             game_state_parameters.count_click_key_bord++;
//         } else if (index > 2 && game_state_parameters.select_right_keycode != -1) {
//             game_state_parameters.check_key_bord_fight = false;
//         }

//     }



// }

const canvasEleme= document.getElementsByTagName("canvas")[0];
if(canvasEleme!=null)
    canvasEleme.remove();




////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


function game_second_part(oneCompWidth, oneCompHeight, secondCompWidth, secondCompHeight, imgSrcLeft, imgSrcRight, velocityComp, countCompCrash) {
    const IMAGE_LEFT = new Image();
    IMAGE_LEFT.src = imgSrcLeft;
    const IMAGE_RIGHT = new Image();
    IMAGE_RIGHT.src = imgSrcRight;

    const ONE_COMP_WIDTH = oneCompWidth;
    const ONE_COMP_HEIGHT = oneCompHeight;
    const SECOND_COMP_WIDTH = secondCompWidth;
    const SECOND_COMP_HEIGHT = secondCompHeight;

    // const CANVAS_WIDTH = window.innerWidth * 0.65;
    // const CANVAS_HEIGHT = window.innerHeight * 0.65;
    const CANVAS_WIDTH = window.innerWidth * 0.65;
    const CANVAS_HEIGHT = window.innerHeight * 0.65;

    const ONE_COMP_X_START = CANVAS_WIDTH * 0.1;
    const ONE_COMP_Y_START = CANVAS_HEIGHT / 2;

    const SECOND_COMP_X_START = CANVAS_WIDTH * 0.9;
    const SECOND_COMP_Y_START = CANVAS_HEIGHT / 2;

    const firstGamePiece = new component(ONE_COMP_WIDTH, ONE_COMP_HEIGHT, true, ONE_COMP_X_START, ONE_COMP_Y_START, "red");
    const secondGamePiece = new component(SECOND_COMP_WIDTH, SECOND_COMP_HEIGHT, false, SECOND_COMP_X_START, SECOND_COMP_Y_START, "green");
    const VELOCITY = velocityComp;
    const crashParameters = { count: countCompCrash, is_crash: false }; //crash with canvs/each other
    const myGameArea = {
        canvas: document.createElement("canvas"),
        start: function() { //קורה פעם אחת בהתחלת המשחק
            this.canvas.width = CANVAS_WIDTH;
            this.canvas.height = CANVAS_HEIGHT;
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
        firstGamePiece.x = ONE_COMP_X_START;
        firstGamePiece.y = ONE_COMP_Y_START;
        firstGamePiece.speedX = 0;
        firstGamePiece.speedY =0;

        secondGamePiece.x = SECOND_COMP_X_START;
        secondGamePiece.y = SECOND_COMP_Y_START;
        secondGamePiece.speedX = 0;
        secondGamePiece.speedY =0;

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
                myGameArea.context.drawImage(IMAGE_LEFT, this.x, this.y, this.width, this.height);
            } else {
                myGameArea.context.drawImage(IMAGE_RIGHT, this.x, this.y, this.width, this.height);
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
        
        secondGamePiece.speedX = 0;
        secondGamePiece.speedY = 0;
        firstGamePiece.speedY = 0;
        firstGamePiece.speedX = 0;

        if (crashParameters.count == 0) {
            myGameArea.stop();
            return;
        }
        if (isAllCompCanMove()) {
            myGameArea.clear(); //חייב שהמיקום הקודם של האובייקטים ימחק 
            updateGamePieceVelocity();
            console.log("here")

        } else {
            crashParameters.is_crash = true;

        }

        firstGamePiece.newPos();
        firstGamePiece.update();
        secondGamePiece.newPos();
        secondGamePiece.update();


        if (crashParameters.is_crash) {
            myGameArea.stop();
            restart_round();
            crashParameters.count--;
            crashParameters.is_crash = false;

        }
    }

    function isAllCompCanMove() {
        const oneCompCanMove = !isNotMoveAble(firstGamePiece.x, firstGamePiece.y, firstGamePiece.width, firstGamePiece.height)
        const secondCompCanMove = !isNotMoveAble(secondGamePiece.x, secondGamePiece.y, secondGamePiece.width, secondGamePiece.height)
        const isCompCrash = firstGamePiece.crashWith(secondGamePiece);

        console.log(`  ${oneCompCanMove} fdf${secondCompCanMove}   fdf${ isCompCrash}  `)
        if (oneCompCanMove && secondCompCanMove && !isCompCrash)
            return true;
        else
            return false;

    }

    function isNotMoveAble(x_comp, y_comp, width_comp, height_comp) {
        x_comp = (x_comp);
        y_comp = parseInt(y_comp);
        // console.log(`the comp ${0} +the cmnavas {}`)
        // console.log((" " + x_comp + width_comp))

        return (x_comp === 0 || y_comp === 0 || parseInt(x_comp + width_comp) === parseInt(CANVAS_WIDTH) || parseInt(y_comp + height_comp) === parseInt(CANVAS_HEIGHT));
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