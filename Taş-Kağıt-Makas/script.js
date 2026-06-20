const stone = document.getElementById("stone-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const result = document.getElementById("result-text");

const tools = ["stone", "paper", "scissors"];

function getComputerChoice() {
    const randomGame = Math.floor(Math.random() * tools.length);
    return tools[randomGame];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    document.getElementById("computer-choice").textContent = "Bilgisayar:" + computerChoice;
    if(userChoice === "stone" && computerChoice === "scissors") {
    result.textContent = "Kazandın! Taş Makası kırar."
        }   else if (userChoice === "stone" && computerChoice === "paper") {
            result.textContent = "Kaybettin! Kağıt Taşı Sarmalar."
            } else if(userChoice === "paper" && computerChoice === "scissors") {
            result.textContent = "Kaybettin! Makas Kağıdı keser."
        } else if (userChoice === "paper" && computerChoice === "stone") {
            result.textContent = "Kazandın! Kağıt Taşı Sarmalar."
        } else if (userChoice === "scissors" && computerChoice === "stone") {
            result.textContent = "Kaybettin! Taş Makası Kırar."
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            result.textContent = "Kazandın! Makas Kağıdı keser."
        } else {result.textContent = "Berabere!"
    }
}
    stone.addEventListener("click", () => playGame("stone"));
    paper.addEventListener("click", () => playGame("paper"));
    scissors.addEventListener("click", () => playGame("stone"));

