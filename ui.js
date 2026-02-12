let homebtn = document.getElementById("home");
let timerbtn = document.getElementById("timer");
let cardhome = document.getElementById("cardhome");
let cardtimer = document.getElementById("cardtimer")
homebtn.addEventListener("click",() => {
    cardhome.classList.remove('hidden')
    cardtimer.classList.add('hidden');
})
timerbtn.addEventListener("click",() => {
    cardtimer.classList.remove('hidden')
    cardhome.add('hidden');
})