
let sidebar = document.getElementsByClassName("sidebar")[0];
console.log(sidebar);
function changeSidebarColor() {
    console.log(sidebar);
    sidebar.style.backgroundColor = "blue";
}
sidebar.addEventListener("click", changeSidebarColor);










window.onload = () => {console.log("js loaded")};
