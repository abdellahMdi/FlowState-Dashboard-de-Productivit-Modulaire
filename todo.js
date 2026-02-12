export function creatingTasks(){
let Enregistrer = document.getElementById("Enregistrer");
let taskcontainr = document.getElementById("taskcontainer");
let tasktitle = document.getElementById("Titre");
let Nofrounds = document.getElementById("rounds")
Enregistrer.addEventListener("click",() => {
    let mynewcard = document.createElement('div');
    mynewcard.classList.add('flex w-full h-22 rounded-3xl border-3 mb-2');
    mynewcard.innerHTML = "";
    mynewcard.innerHTML += `
                        <div class="flex justify-center items-center text-4xl w-[15%] h-full border-1">
                            <i class="ri-play-large-fill"></i>
                        </div>
                        <div class=" relative flex justify-center items-center h-full w-[58%] border-1 overflow-hidden">
                            <div class="flex items-center h-[100%] w-100">
                                  <h3 class=" text-2xl ">${tasktitle}</h3>
                            </div>
                              
                        </div>
                        <div class="flex justify-center items-center h-full w-[14%] border-1">
                            <div class="flex justify-center rounded-3xl border-1 h-8 w-8">
                                 <h3 class="text-2xl">${Nofrounds}</h3>
                            </div>
                        </div>
                        <div class="flex justify-center items-center h-full w-[14%] border-1 text-4xl">
                            <i class="ri-more-2-fill"></i>
                        </div>
                        `;
    taskcontainr.append(mynewcard);
})
}