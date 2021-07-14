// game("yoav", 1, "lilius", 2)


function calculateResult(nameleft, codeleft, nameright, coderight) {


    const stone = { nameFight: "stone", code: 1 };
    const paper = { nameFight: "paper", code: 2 };
    const scissors = { nameFight: "scissors", code: 3 };


    const player_left = { name: nameleft, choosetiCode: codeleft, iswinner: false };
    const player_right = { name: nameright, chooseCode: coderight, iswinner: false };

    const player_teko = { name: "teko", chooseCode: null };


    if (gameparams.player1win) return {
        winner: 1
    }

}


// function from game demo beacuse i cant export and import
// function game(nameleft, codeleft, nameright, coderight) {


//     const result = Object.freeze(calculateResult({}))

//     if (result.something) console.log(confet)

//     if (codeleft == coderight) {
//         result.is_teko = true;
//         result.winner.chooseCode = codeleft; //זה לא משנה יכלתי להשוות לימיני
//     }


//     if (codeleft == 1 && coderight == 2) {
//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";

//     }




//     if (codeleft == 1 && coderight == 3) {
//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";


//     }


//     if (codeleft == 2 && coderight == 1) {

//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";

//     }




//     if (codeleft == 2 && coderight == 3) {

//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";


//     }




//     if (codeleft == 3 && coderight == 1) {


//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";

//     }





//     if (codeleft == 3 && coderight == 2) {

//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";
//     }

//     console.log("dasdsa")
//     console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
//     if (!result.teko)
//         console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

//     else
//         console.log("teko")

//     console.log("dasdsa")
//     console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
//     if (!result.teko)
//         console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

//     else
//         console.log("teko")
//     return result;
// }
// // לימיני יש נייר ולשמאלי אבן 
// switch (coderight , codeleft) {
//     case 1, 1:
//         console.log("teko");
//         break;
//     case 1, 2:
//         winner = player_right;
//         console.log(player_right.name)
//         break;

//     default:
//         console.log("defualt");
//         break;
// }


// if (choose_left == '1' && choosr_right == '2') {
//     winnner_name = player_right_name;
// }

//  function computer_mood_click() {
//      alert("asdasdasd")
//      enter_detilasFighter(mood);
//  }

//  function vsTwo_mood_click() {
//      alert("asdasdasd")

//      mood = true;
//      enter_detilasFighter(mood);
//  }


// function d() {


//     alert("sadsadsad")
// }


function game(nameleft, codeleft, nameright, coderight) {
    const stone = { nameFight: "stone", code: 1 };
    const paper = { nameFight: "paper", code: 2 };
    const scissors = { nameFight: "scissors", code: 3 };


    const player_left = { name: nameleft, chooseCode: codeleft, iswinner: false };
    const player_right = { name: nameright, chooseCode: coderight, iswinner: false };

    const player_teko = { name: "teko", chooseCode: null };

    const result = { winner: player_teko, loser: player_teko, sideWin: null, is_teko: false };

    if (codeleft == coderight) {
        result.is_teko = true;
        result.winner.chooseCode = codeleft; //זה לא משנה יכלתי להשוות לימיני
    }


    if (codeleft == 1 && coderight == 2) {
        result.winner = player_right;
        result.loser = player_left;
        result.sideWin = "right";

    }




    if (codeleft == 1 && coderight == 3) {
        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";


    }


    if (codeleft == 2 && coderight == 1) {

        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";

    }




    if (codeleft == 2 && coderight == 3) {

        result.winner = player_right;
        result.loser = player_left;
        result.sideWin = "right";


    }




    if (codeleft == 3 && coderight == 1) {


        result.winner = player_right;
        result.loser = player_left;
        result.sideWin = "right";

    }





    if (codeleft == 3 && coderight == 2) {

        result.winner = player_left;
        result.loser = player_right;
        result.sideWin = "left";
    }

    console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
    if (!result.teko)
        console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

    else
        console.log("teko")

    console.log("dasdsa")
    console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
    if (!result.teko)
        console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

    else
        console.log("teko")
    return result;


}





// function from game demo beacuse i cant export and import
// function game(nameleft, codeleft, nameright, coderight) {
//     const stone = { nameFight: "stone", code: 1 };
//     const paper = { nameFight: "paper", code: 2 };
//     const scissors = { nameFight: "scissors", code: 3 };


//     const player_left = { name: nameleft, chooseCode: codeleft, iswinner: false };
//     const player_right = { name: nameright, chooseCode: coderight, iswinner: false };

//     const player_teko = { name: "teko", chooseCode: null };

//     const result = { winner: player_teko, loser: player_teko, sideWin: null, is_teko: false };

//     if (codeleft == coderight) {
//         result.is_teko = true;
//         result.winner.chooseCode = codeleft; //זה לא משנה יכלתי להשוות לימיני
//     }


//     if (codeleft == 1 && coderight == 2) {
//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";

//     }




//     if (codeleft == 1 && coderight == 3) {
//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";


//     }


//     if (codeleft == 2 && coderight == 1) {

//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";

//     }




//     if (codeleft == 2 && coderight == 3) {

//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";


//     }




//     if (codeleft == 3 && coderight == 1) {


//         result.winner = player_right;
//         result.loser = player_left;
//         result.sideWin = "right";

//     }





//     if (codeleft == 3 && coderight == 2) {

//         result.winner = player_left;
//         result.loser = player_right;
//         result.sideWin = "left";
//     }

//     // console.log("dasdsa")
//     // console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
//     // if (!result.teko)
//     //     console.log(`name winner ${result.winner.name}name loser ${result.loser.name}`);

//     // else
//     //     console.log("teko")


//     return result;
// }