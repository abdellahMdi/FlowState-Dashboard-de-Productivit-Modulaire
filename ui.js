 
export function uiButtons(){
let homebtn = document.getElementById("home");
let timerbtn = document.getElementById("timer");
let cardhome = document.getElementById("cardhome");
let cardtimer = document.getElementById("cardtimer");
let back = document.getElementById("goBack");
let newTask = document.getElementById("addnewtask");
let modal = document.getElementById('modal')
homebtn.addEventListener("click",() => {
    cardhome.style = "";
    cardtimer.style = "display : none;";
})
timerbtn.addEventListener("click",() => {
    cardtimer.style = "";
    cardhome.style = "display : none;";
})
back.addEventListener("click",() => {
    cardhome.style = "";
    cardtimer.style = "display : none;";
})
newTask.addEventListener("click",() => {
    modal.classList.remove('hidden')
})

}