const el1 = document.getElementById("first");
const el2 = document.createElement("h2");

el2.id = "second";
el2.textContent = "Yo what's up folks";
el1.after(el2);

const el3 = document.createElement("h3");
el3.id = "third";
el3.textContent = "This is the list of cars";
el3.style.backgroundColor = "crimson";
el2.after(el3);

const el4 = document.getElementById("fourth");
const el5 = document.createElement("li");
el5.textContent = "BMW";

const el6 = document.createElement("li");
el6.textContent = "AUDI";

const el7 = document.createElement("li");
el7.textContent = "FERRARI";

const el8 = document.createElement("li");
el8.textContent = "LAMBORGHINI";

el4.append(el5,el6);
el4.prepend(el7);
el4.children[1].after(el8); // This is when u wanna append among other items in the unordered list !

const el9 = document.getElementById("sixth");
const arr = ["Butter Chicken" , "Korma" , "Paneer" , "Dal-Makhni"];
const fragement = document.createDocumentFragment();
// for(let i of arr){
//     const list = document.createElement("li");
//     list.textContent = i;
//     el9.append(list);
//  This is not optimal approach as load on UI would be very high in case of large number of items!

for(let i of arr){
    const list = document.createElement("li");
    list.textContent = i;
    fragement.append(list);
};

el9.append(fragement); // very Optimal Appproach to append the items in the UI at one shot

// Alert : Always display user data using textContent not innerHTML as u would get the user hacked my boi!!