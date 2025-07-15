console.log("I'm playing a TIC TAC TOE Game.");
let boxes= document.querySelectorAll(".box");
let resetBtn= document.getElementById("reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8] 
];
const resetGame=()=>{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("BOX is clicked.");
        if(turn0){
            //player0
            box.innerText="O";
            turn0=false;
        }
        else{
            //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disablebox=()=>{
    for(let box of boxes){
         box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; // There is still an empty box
        }
    }
    msg.innerText='This Match is a Draw.';
    msgcontainer.classList.remove("hide"); 
    disablebox(); 
    return true; // All boxes are filled
}
const showWinner=(winner)=>{
    msg.innerText='Congratulations, Winner is '+winner;
    msgcontainer.classList.remove("hide"); 
    disablebox(); 
}
/*const checkdraw=()=>{
    let count= box.addEventListener("click");
    if(click===9){
        msg.innerText="This Game is Draw.";
        msgcontainer.classList.remove("hide");
    }
    showWinner();
}*/
const checkwinner=()=>{
    for(let pattern of winpatterns){    
    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;  

   if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
        showWinner(p1);
    }
}
}
if (checkDraw()) {
        msg.innerText = 'This Match is a Draw.';
        msgcontainer.classList.remove("hide");
        disablebox();
    }
};
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
/*

if(p4!=""&& p5!=""&& p6!=""){
    if(p4===p5 && p5===p6){
        console.log("WINNER");
    }
}
if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
    }
}
if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
    }
}
if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
    }
}
if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
    }
}
if(p1!=""&& p2!=""&& p3!=""){
    if(p1===p2 && p2===p3){
        console.log("WINNER");
    }
}*/ 
/* let p4=boxes[pattern[0]].innerText;
    let p5=boxes[pattern[3]].innerText;
    let p6=boxes[pattern[6]].innerText;

    let p7=boxes[pattern[0]].innerText;
    let p8=boxes[pattern[4]].innerText;
    let p9=boxes[pattern[8]].innerText;

    let p11=boxes[pattern[1]].innerText;
    let p12=boxes[pattern[4]].innerText;
    let p33=boxes[pattern[7]].innerText;

    let p44=boxes[pattern[2]].innerText;
    let p55=boxes[pattern[5]].innerText;
    let p66=boxes[pattern[8]].innerText;

    let p77=boxes[pattern[3]].innerText;
    let p88=boxes[pattern[4]].innerText;
    let p68=boxes[pattern[5]].innerText;

    let p41=boxes[pattern[6]].innerText;
    let p52=boxes[pattern[7]].innerText;
    let p61=boxes[pattern[8]].innerText;*/
