const boxEl = document.querySelector(".container1");
console.log(boxEl);
const menuEl = document.getElementById("menu");
console.log(menuEl);
const closeEl = document.getElementById("close");
console.log(closeEl);
const classEl = document.querySelector(".secondclass");
console.log(classEl);

menuEl.addEventListener('click', () => {
if(boxEl.style.display == "none"){
    boxEl.style.display = "flex";
    boxEl.classList.toggle("secondclass");
}
else{
    boxEl.style.display = "none";
}

if(menuEl.style.display == "flex"){
    menuEl.style.display = "none"
}
if(closeEl.style.display == "none"){
    closeEl.style.display = "flex"
}
})
closeEl.addEventListener('click', () => {
if(closeEl.style.display == "flex"){
    closeEl.style.display = "none";
}

if(boxEl.style.display == "flex"){
    boxEl.style.display = "none";
    menuEl.style.display = "flex";
}

})