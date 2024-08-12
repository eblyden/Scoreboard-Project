let homeTeam="Home"
let guestTeam="Guest"
let homeScore=0
let guestScore=0
let quarter = 1

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let quarterEl = document.getElementById("quarterNum")

function homeOne() {
    homeScore += 1;
    homeScoreEl.innerText = homeScore
    checkWinner()
}
function homeTwo() {
    homeScore += 2;
    homeScoreEl.innerText = homeScore
    checkWinner()
}
function homeThree() {
    homeScore += 3;
    homeScoreEl.innerText = homeScore
    checkWinner()
}
function guestOne() {
    guestScore += 1;
    guestScoreEl.innerText = guestScore
    checkWinner()
}
function guestTwo() {
    guestScore += 2;
    guestScoreEl.innerText = guestScore
    checkWinner()
}
function guestThree() {
    guestScore += 3;
    guestScoreEl.innerText = guestScore
    checkWinner()
}

function resetGame() {
    guestScore = 0
    guestScoreEl.innerText = guestScore
    homeScore = 0
    homeScoreEl.innerText = homeScore
    checkWinner()
    while (quarter != 1){
        previousQuarter();
    }
}

function checkWinner() {
    if (homeScore > guestScore){
        homeScoreEl.style.color = "white"
        guestScoreEl.style.color = "black"
    }else if (homeScore < guestScore){
        homeScoreEl.style.color = "black"
        guestScoreEl.style.color = "white"
    }else {
        homeScoreEl.style.color = "black"
        guestScoreEl.style.color = "black"
    }
}

function nextQuarter() {
    quarter += 1
    if (quarter >= 4) {
         quarter = 4;
    }
    quarterEl.innerText = "Quarter: " + quarter
}

function previousQuarter() {
    quarter -= 1
    if (quarter <= 0){
        quarter = 1;
    }
    quarterEl.innerText = "Quarter: " + quarter
    
}