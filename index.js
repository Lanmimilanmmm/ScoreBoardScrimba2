let homeScore = 0
let HomeScoreEl = document.getElementById("home_score")

let guestScore = 0
let GuestScoreEl = document.getElementById("guest_score")



function plusOneHome(){
  homeScore +=1
  HomeScoreEl.textContent = homeScore
 
}

function plusTwoHome(){
    homeScore +=2
    HomeScoreEl.textContent = homeScore
}

function plusTreeHome(){
   homeScore +=3
   HomeScoreEl.textContent = homeScore
}


function plusOneGuest(){
    guestScore +=1
    GuestScoreEl.textContent = guestScore
}

function plusTwoGuest(){
    guestScore +=2
    GuestScoreEl.textContent = guestScore
}

function plusTreeGuest(){
    guestScore +=3
    GuestScoreEl.textContent = guestScore
    
}

function startAgain(){
    guestScore = 0
    homeScore = 0 
    GuestScoreEl.textContent = guestScore
    HomeScoreEl.textContent = homeScore
}
    // function ScorPoints(){
    //     if (homeScore < guestScore){
    //         document.body.style.backgroundColor = "#dc143c"
    //         console.log("home players are losing")
    //     } else if (homeScore > guestScore){
    //         console.log("home players are wining")
    //     } else (homeScore = guestScore)
    //         console.log("it is a tie ")
    // }
