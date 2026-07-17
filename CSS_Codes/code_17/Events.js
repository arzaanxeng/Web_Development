const el = document.getElementById("header");
el.addEventListener("click" , ()=>{
    el.textContent = "Well , u can definitely see the text has changed!";
})

el.addEventListener("click" , ()=>{
    el.style.backgroundColor = "green";
})

const element = document.getElementById("parent");
console.dir(element.children); // We have three children

for(let child of element.children){
    child.addEventListener("click" , ()=>{
    child.textContent = "Well , u can definitely see the text has changed!";
})
}
