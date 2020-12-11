// I want to be able to point to a link in the javascript
// and supply a caption 
// I want JS functions to return an object containing an image,
// a link, and a caption
// Then add then to my sidebar




// Setting a variable for my Sidebar element
let sidebar = document.getElementsByClassName("feed")[0];
// Setting a variable for my Feed element
let feedObjects = document.getElementsByClassName("image-and-caption");
console.log(sidebar);
console.log(feedObjects);

// CODE FOR ADDING THINGS TO THE SIDEBAR

// Test object
function testForType(link) {
    // I need to write this code 
    
}

// Example object
let objectOne = {
    imageAddress: "link",
    caption: "This is the caption for my image one",
    hyperlink: "hyperlink"
}

// Test object
let objectTwo = {
    imageAddress: "./resources/images/shche_-team-Gl695fYRRH8-unsplash.jpg",
    caption: "My added image"
}
console.log(objectTwo.caption);

//Function to add object to Feed
function addToFeed(object) {
    let newImageCaptionDiv = document.createElement("div");
    newImageCaptionDiv.classList.add("image-and-caption");

    let caption = document.createElement("p");
    let captionTextNode = document.createTextNode(object.caption);
    caption.appendChild(captionTextNode);
    newImageCaptionDiv.appendChild(caption);
    
    let image = document.createElement("img");
    image.src = object.imageAddress;
    newImageCaptionDiv.appendChild(image);

    sidebar.appendChild(newImageCaptionDiv);
}

addToFeed(objectTwo);

// CODE FOR MAKING THE CAPTIONS VISIBLE WHEN IMAGES ARE HOVERED OVER
function hideCaption(event) {
    let parent = event.target.parentElement;
    let para = parent.getElementsByTagName("p");
    para[0].style.visibility = "hidden";
    console.log("event triggered");

}

function showCaption(event) {
    let parent = event.target.parentElement;
    let para = parent.getElementsByTagName("p");
    para[0].style.visibility = "visible";
    console.log("event triggered");
}

for (i = 0; i < feedObjects.length - 1; i++) {
    let children = feedObjects[i].getElementsByTagName("img");
    console.log(children);
    children[0].addEventListener("mouseover", function () {
        showCaption(event); })
    children[0].addEventListener("mouseout", function () {
        hideCaption(event); })

}

// get child nodes
// for every img child node
// add event listener with div[i] passed in
// in function, access div[i].p










// Just some stuff to check I am correctly selecting elements
function testElement(element) {
    element.style.backgroundColor = "red";
}
sidebar.addEventListener("click", function () {
    testElement(sidebar);
})

// Just checking the JS has loaded
window.onload = () => {console.log("js loaded")};
