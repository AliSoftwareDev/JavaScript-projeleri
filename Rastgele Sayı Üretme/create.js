const button = document.querySelector(".create-btn");
const minimum = document.getElementById("minValue");
const maximum = document.getElementById("maxValue");

button.addEventListener("click", () =>  {
const result  = Math.floor(Math.random() * (Number(maximum.value) - Number(minimum.value) +1 )) + Number(minimum.value )
document.getElementById("result").innerText = result
})


