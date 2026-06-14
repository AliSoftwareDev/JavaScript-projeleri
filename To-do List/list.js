const addBtn = document.getElementById("add-btn");
const inputField = document.getElementById("inputField");
const todoContainer = document.getElementById("todo-container");

addBtn.addEventListener("click", ()=> {
    let paragraph = document.createElement("li");
    paragraph.innerHTML = inputField.value;
    todoContainer.appendChild(paragraph);
})

inputField.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        let paragraph = document.createElement("li");
        paragraph.innerHTML = inputField.value;
        todoContainer.appendChild(paragraph);
    }
})
