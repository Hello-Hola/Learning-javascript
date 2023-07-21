
let player1Time = 120;
let player2Time = 150;

function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player2Time;
    } else if ( player1Time = player2Time){
        return player2Time;
    } else {
        return player1Time;
    }
}

let fastestRaceTime = getFastestRaceTime();
console.log(fastestRaceTime);

function totoalRaceTime(){
    return player1Time + player2Time;
}
let saveTotalRaceTime = totoalRaceTime()
console.log(saveTotalRaceTime);