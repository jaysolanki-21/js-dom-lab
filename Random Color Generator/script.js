let main = document.querySelector(".main");
let box = document.querySelector(".box");
let color = document.querySelector(".color span");
let btn = document.querySelector(".btn");

function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        main.style.backgroundColor = "#" + randomColor;
        color.textContent = "#" + randomColor;
        box.style.boxShadow = "0px 0px 10px 0px #"+randomColor;
}


btn.addEventListener("click", () => {
        randomColor();       
    }
);

randomColor();





