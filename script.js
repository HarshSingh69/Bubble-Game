function makeBubble(){
    var createbubble = "";

    for(var i=1; i<=108; i++){
        var randomnumber = Math.floor(Math.random()*10);
        createbubble += `<div class="bubble">${randomnumber}</div>`;
    }

    document.querySelector('#panelbottom').innerHTML = createbubble;
}
var timer = 60;
function runTimer(){
    var timerinterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;   
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#panelbottom").innerHTML = `<h1>Game Over<\h1>`;
        }
    },1000);
}
var hitrn ;
function getHits(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#panelbottom")
.addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getHits();
    }
});

runTimer();
makeBubble();
getHits();
/* Event Bubbling - jisper click karoge us element pr event raise hoga, 
aur event listner na milne par vo event element ke parent par listner dhundhega,
aur agar vaha bhi na mile to parent k parent pr event listner search karega */
