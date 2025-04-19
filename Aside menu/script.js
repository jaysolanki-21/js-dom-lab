const menubutton = document.querySelector(".menubtn");
const closmenu = document.querySelector(".closemenu");

menubutton.addEventListener("click", () => {
    document.querySelector(".menus").style.left = "0";
    menubutton.style.display = "none";
});

closmenu.addEventListener("click", () => {
   
    document.querySelector(".menus").style.left = "-20rem";
    setTimeout(() => {
        menubutton.style.display = "block";
    },501);
});