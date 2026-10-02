// ================================
// 1. TAG SELECTOR
// ================================

let h2 = document.getElementsByTagName("h2");

console.log(h2);
// Returns HTMLCollection

console.log(h2[0]);
console.log(h2[1]);


// ================================
// 2. CLASS SELECTOR
// ================================

// Your HTML has class="c e"
let classElement = document.getElementsByClassName("c");

console.log(classElement);
// Returns HTMLCollection

console.log(classElement[0]);


// ================================
// 3. ID SELECTOR
// ================================

// There is currently NO element with an id in your HTML.
// Example:
//
// <h1 id="heading">Learning JS</h1>
//
// Then:
//
// let heading = document.getElementById("heading");
// console.log(heading);


// ================================
// 4. QUERY SELECTOR
// ================================

let h1 = document.querySelector("h1");

console.log(h1);
// Returns the FIRST <h1>


// ================================
// 5. QUERY SELECTOR ALL
// ================================

let allH1 = document.querySelectorAll("h1");

console.log(allH1);
// Returns NodeList

console.log(allH1[0]);
console.log(allH1[1]);


// ================================
// 6. CLASS WITH QUERY SELECTOR
// ================================

let mydata = document.querySelectorAll(".c");

console.log(mydata);

// NodeList is array-like,
// but it is NOT a normal Array.

console.log(mydata[0]);


// ================================
// 7. READ / WRITE
// ================================

console.log(mydata[0].textContent);

// Changing text
mydata[0].textContent = "Hello World";


// ================================
// 8. STYLING
// ================================

let mynode = document.querySelector("h1");

mynode.style.color = "red";
mynode.style.backgroundColor = "yellow";


// ================================
// 9. CLASSLIST
// ================================

// Add class
mynode.classList.add("myclass");

console.log(mynode.classList);

// Remove class
mynode.classList.remove("myclass");

// Toggle class
mynode.classList.toggle("myclass");


// ================================
// 10. ARRAY EXAMPLE
// ================================

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];


// for loop
for (let i = 0; i < arr2.length; i++) {
    console.log("Index:", i, "Value:", arr2[i]);
}


// ================================
// 11. MAP
// ================================

const newArr = arr2.map((currentValue, index) => {

    console.log(
        "Map Index:",
        index,
        "Value:",
        currentValue
    );

    return currentValue * 2;
});

console.log(newArr);


// ================================
// 12. FILTER
// ================================

const evenArr = arr2.filter((currentValue, index) => {

    return currentValue % 2 === 0;

});

console.log(evenArr);