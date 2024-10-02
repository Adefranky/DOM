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