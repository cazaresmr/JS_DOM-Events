console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName("node2");
node2[0].textContent =
  "I used the getElementByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.getElementById("parent");
parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let a = document.createElement("a");
a.textContent = "I am an <a> tag";
a.href = "https://www.google.com";
a.target = "_blank";

// BONUS: Add a link href to the <a>
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let exercise3Container = document.getElementById("exercise-container3");
let oldChildNode = document.getElementById("N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

exercise3Container.replaceChild(newChildNode, oldChildNode);

// TODO: Remove the "New Child Node"

setTimeout(() => {
  newChildNode.remove();
}, 5000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.textContent = list[i];
  // TODO: Append the new list items to the unordered list element
  ul.appendChild(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
let container = document.getElementById("container");
container.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

function show() {
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let closeBtn = document.createElement("button");

  // add content to the modal card
  h2.textContent = "Modal Header";
  p.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  closeBtn.textContent = "Close";

  // add event listener to close the modal when the button is clicked
  closeBtn.addEventListener("click", () => {
    modalContainer.remove();
  });

  modalCard.append(h2, p, closeBtn);
  modalCard.classList.add("modal-card");

  // add the modal card to the modal
  modalContainer.id = "modal";
  modalContainer.appendChild(modalCard);

  // add the modal container to the body
  document.body.appendChild(modalContainer);
} // end of show function

let btn = document.getElementById("btn");
btn.addEventListener("click", show);
