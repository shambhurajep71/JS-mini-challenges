let diceROll = document.querySelector(".dice_roll");
let dice_container = document.querySelector(".dice_container");
let dice = document.querySelector(".dice");

function createDice(number) {
    const dotPositionMatrix = {
        1: [[50, 50]],
        2: [
            [20, 20],
            [80, 80],
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80],
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80],
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80],
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80],
        ],
    };
    let dice = document.createElement("div");
    dice.classList.add("dice");
    for (let dotPosition of dotPositionMatrix[number]) {
        let dot = document.createElement("div");
        dot.classList.add("dice_dot");
        dot.style.setProperty('--top', `${dotPosition[0]}%`);
        dot.style.setProperty('--left', `${dotPosition[1]}%`);
        dice.appendChild(dot);
    }
    return dice;

}

function randomizeDice(dice_container) {
    dice_container.innerHTML = '';
    let number = Math.floor(Math.random() * 6 + 1);
    let dice = createDice(number);
    dice_container.appendChild(dice);
}
diceROll.addEventListener("click", () => {
    const interval = setInterval(() => {
        randomizeDice(dice_container);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
})