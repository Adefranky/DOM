// console.log(document);
// console.dir(document);
console.log(document.head);
console.log(document.documentURI);


// 1.Getting Elements By TagNage

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// getElementById
console.log(document.getElementById("main"));

// getElementByClassName
console.log(document.getElementsByClassName("cls"));

// QuerrySelector
console.log(document.querySelector(".cls")); // selects one object at a time


// class=> .cls,  id=> #cls, tagName => h1

// querySelectorAll()

console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));

const h4 = document.getElementsByTagName("h4")
console.log(h4);


// Creating element and apending it in the dom
// Creating element
 const h1 =document.createElement("h1")
//  h1.textContent = "Hello World";
 h1.classList.add("greetings");

//  hi.classList.remove("greetings")
//  console.log(h1.textContent);
console.log(h1);

// Appending the child element
body.appendChild(h1);


// insert before
const firstLi = document.querySelector("li")
// selector insertBefore (what where)
URL.insertBefore(newLi, firstLi)

// Insert Adjacent
const firstP = document.querySelector("p")
const i = document.createElement("i")
i.innerText= "Im italics"
i.style.color = "skyblue"
firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);

// append and prepend

let section = document.querySelector("section")
const l = document.createElement("l");
L.innerText= "Im italics";
L.style.color = "skyblue";

section.append(l);

const h3 = document.createElement("h3")
h3.innerText = "Frank"
h3.style.color = "crimson"

section.append(l,h4);
section.prepend(l,h4); // start/beginning

// Removechild and remove
const newList = document.querySelector('.new-list')
const fourth = document.querySelector('.fourth')
newList.removeChild("fourth")
newList.remove() // removes all

// Events and eventListener

const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function(){
    console.log("Frank")
}

const best = document.querySelector('.best')
best.addEventListener("click", function() {
    console.log("Hello World");
});

// arrow function
best.addEventListener("click",() =>{
    console.log("Yellow");
})

// Event object
const para = document.querySelector('.para')
para.addEventListener('click', (event) =>{
    console.log(event)
})

const form = document.querySelector("form");
const input = input.querySelector("input");

form.addEventListener("submit", (event) =>{
    console.log(input.value);
});

// Keyboard Events

// const put = document.querySelector("put");
// put.addEventListener("keypress", ()=>{
//     console.log("keypress");
// })

// const put = document.querySelector("put");
// put.addEventListener("keyup", ()=>{
//     console.log("keyup");
// });

const put = document.querySelector("put");
put.addEventListener("keydown", ()=>{
    console.log("keydown");
});

