const count = document.getElementById("count");
const btn_counter = document.getElementById("btn-counter");
const btn_pause = document.getElementById("btn-pause");
const watch = document.querySelector(".watch");

let counter;
btn_counter.addEventListener("click", ()=> {
    let giveValue = parseInt(count.value);
    counter =  setInterval(() => {
        giveValue--;
    watch.textContent = giveValue;

    if(giveValue===0) {
        clearInterval(counter);
    }
}, 1000);
})
btn_pause.addEventListener("click", ()=> {
    clearInterval(counter);
});









