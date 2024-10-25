let gameSeq=[];
let userSeq= [];

let btn = ["red", "yellow", "green","purple" ];

let started= false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener ("click", function(){
    if( started== false){
        console.log("game is started");
        started = true;

        levelUp();
        
    }
    
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout (function(){
        btn.classList.remove("gameflash");
    } , 250);
}
// userflash
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout (function(){
        btn.classList.remove("userflash");
    } , 250);
}

function levelUp(){
    userSeq=[];
    level ++;
    h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random()*4);
let randcolor = btn[randIdx];
let randBtn=document.querySelector(`.${randcolor}`);
gameSeq.push(randcolor);
console.log(gameSeq);

// console.log(randIdx);
// console.log(randcolor);
// console.log(randBtn);

    gameflash(randBtn);
}


function checkAns(idx){

    if (userSeq[idx]===gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
        
    }else{
        h2.innerHTML = `Game over ! Your score was <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150)

       
        reset();
    }
    
}


 function btnPress() {
    // console.log(this);
    
    let btn= this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
    
 }

 let allBtns =document.querySelectorAll(".btn");
 for(button of allBtns){
    button.addEventListener("click", btnPress);
 }
 
 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

 }







