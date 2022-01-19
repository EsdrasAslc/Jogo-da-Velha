const player1 = {
    name: "Player 1",
    plays: [],
    wins: 0,
};

const player2 = {
    name: "Player 2",
    plays: [],
    wins: 0,
};

const game = {
    status: "running", // running stop
    round: 1, // 1 ~ 9
    turn: player1, // player1 / player2
    played: [],
};

function optionClick(value) {

    if (game.status === "stop") {
        return restartGame();
    }

    const verPlay = game.played.includes(value);
    // !true  -> false
    if (!verPlay) {

        if (game.turn === player1) {
            playerTurn(player1, value);
            win(player1.plays);

        } else {
            playerTurn(player2, value);
            win(player2.plays);
        }

    } else {
        console.log("jogue um numero que nao foi jogado ainda!");
    }

}

function checkWin(plays) {
    const winConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        [1, 5, 9],
        [3, 5, 7],

    ]

    let validation;
    for (let winCondition of winConditions) {

        if (validation) {
            return true
        }

        for (let field of winCondition) {
            if (plays.includes(field)) {
                validation = true;
            } else {
                validation = false;
                break
            }
        }
    }
}

function createMark(value) {
    const divMarked = document.querySelector('.op-' + value);

    if (game.turn === player1) {
        divMarked.innerHTML = 'X';
    } else {
        divMarked.innerHTML = "O";
    }
}

function playerTurn(player, value) {
    createMark(value);
    player.plays.push(value);
    game.played.push(value);
    game.round++
}

function win(plays) {
    if (checkWin(plays)) {
        game.status = "stop";
    } else if (game.turn === player1) {
        game.turn = player2;
    } else if (game.turn === player2) {
        game.turn = player1;
    }
}

function restartGame() {
    game.turn.wins += 1;
    alert(game.turn.name + " venceu a partida! Agora está com " + game.turn.wins + " Vitoria");

    // reset csa games

    game.status = "running";
    game.played = [];
    game.round = 1;

    //player

    player1.plays = [];
    player2.plays = [];

    // div Otimizar isso aqui!

    const divErase1 = document.querySelector('.op-1');
    const divErase2 = document.querySelector('.op-2');
    const divErase3 = document.querySelector('.op-3');
    const divErase4 = document.querySelector('.op-4');
    const divErase5 = document.querySelector('.op-5');
    const divErase6 = document.querySelector('.op-6');
    const divErase7 = document.querySelector('.op-7');
    const divErase8 = document.querySelector('.op-8');
    const divErase9 = document.querySelector('.op-9');

    divErase1.innerHTML = " ";
    divErase2.innerHTML = " ";
    divErase3.innerHTML = " ";
    divErase4.innerHTML = " ";
    divErase5.innerHTML = " ";
    divErase6.innerHTML = " ";
    divErase7.innerHTML = " ";
    divErase8.innerHTML = " ";
    divErase9.innerHTML = " ";
}