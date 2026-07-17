const grandParent = document.getElementById("grandParent");
grandParent.addEventListener("click" , ()=>{
    console.log("GrandParent was clicked!");
})

const parent = document.getElementById("parent");
parent.addEventListener("click" , ()=>{
    console.log("Parent was clicked!");
})

const child = document.getElementById("child");
child.addEventListener("click" , ()=>{
    console.log("Child was clicked!");
})

