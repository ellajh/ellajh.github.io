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

/*<iframe src="https://open.spotify.com/embed/track/0lwkL0G07NYtLrQCugi8lX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>*/

let pineapple = {
    imageAddress: 'https://open.spotify.com/embed/track/0lwkL0G07NYtLrQCugi8lX',
    caption: "Cant get enough of this track at the moment",
    width: "250",
    height: "auto",
    frameborder: "0",
    allowtransparency: "true"
    //allow: "encrypted-media"
}

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

//Function to add object to Feed
function addIframeToFeed(object) {
    let newImageCaptionDiv = document.createElement("div");
    newImageCaptionDiv.classList.add("image-and-caption");

    let caption = document.createElement("p");
    let captionTextNode = document.createTextNode(object.caption);
    caption.appendChild(captionTextNode);
    newImageCaptionDiv.appendChild(caption);
    
    let iframe = document.createElement("iframe");
    iframe.src = object.imageAddress;
    iframe.width = object.width;
    /*iframe.height = object.height;*/
    iframe.frameborder = object.frameborder;
    iframe.allowtransparency = object.allowtransparency;
    iframe.allow = object.allow;
    newImageCaptionDiv.appendChild(iframe);

    sidebar.appendChild(newImageCaptionDiv);
}

addToFeed(objectTwo);
addIframeToFeed(pineapple);

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

for (i = 0; i < feedObjects.length; i++) {
    let targetObject;
    if (feedObjects[i].querySelector("h1") != null) {
        targetObject = querySelector("h1");
    } else if (feedObjects[i].querySelector("img") != null) {
        targetObject = feedObjects[i].querySelector("img");
    } else if (feedObjects[i].querySelector("iframe") != null) {
        targetObject = feedObjects[i].querySelector("iframe");
    }

    targetObject.addEventListener("mouseover", function (event) {
        showCaption(event); })
    targetObject.addEventListener("mouseout", function (event) {
        hideCaption(event); })


    /*let children = feedObjects[i].getElementsByTagName("img");
    console.log(children);
    children[0].addEventListener("mouseover", function (event) {
        showCaption(event); })
    children[0].addEventListener("mouseout", function (event) {
        hideCaption(event); })*/
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