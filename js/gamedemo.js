 export function game(nameright, coderight, nameright, codeleft) {
     const stone = { nameFight: "stone", code: 1 };
     const paper = { nameFight: "paper", code: 2 };
     const scissors = { nameFight: "scissors", code: 3 };

     let player_left = { name: nameleft, chooseCode: codeleft, iswinner: false };
     let player_right = { name: nameright, chooseCode: 2, iswinner: false };

     codeleft = player_left.chooseCode;
     coderight = player_right.chooseCode;
     let winner = { name: "teko", chooseCode: 4, whoWin: "none" };

     if (codeleft == coderight)
         winner = { name: "teko", chooseCode: 4 };;
     if (codeleft == 1 && coderight == 2) {
         winner = player_right;
         winner.whoWin = "right";
     }

     if (codeleft == 1 && coderight == 3) {
         winner = player_left;
         winner.whoWin = "left";

     }

     if (codeleft == 2 && coderight == 1) {

         winner = player_left;
         winner.whoWin = "left";

     }

     if (codeleft == 2 && coderight == 3) {
         winner = player_right;
         winner.whoWin = "right";
     }


     if (codeleft == 3 && coderight == 1) {
         winner = player_right
         winner.whoWin = "right";

     }


     if (codeleft == 3 && coderight == 2) {
         winner = player_left;
         winner.whoWin = "left";
     }
     console.log("dasdsa")
     console.log(`player one ${player_left.name} choose ${player_left.chooseCode} player two ${player_right.name} choose ${player_right.chooseCode}  `)
     console.log(`name winner ${winner.name}`);


     return winner;
 }

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

 function computer_mood_click() {
     alert("asdasdasd")
     enter_detilasFighter(mood);
 }

 function vsTwo_mood_click() {
     alert("asdasdasd")

     mood = true;
     enter_detilasFighter(mood);
 }