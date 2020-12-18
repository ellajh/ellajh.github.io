
// Getting and assigning my sidebar element to variable "sidebar"
let sidebar = document.getElementsByClassName("feed")[0];
// Getting and assigning my feed element to variable "feed"
let feedObjects = document.getElementsByClassName("image-and-caption");

// Creating an master object containing all the items that I want to add to my feed as child objects
let sidebarObject = [
    generateSpotifyObject('<iframe src="https://open.spotify.com/embed/track/0lwkL0G07NYtLrQCugi8lX" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', "Can't get enough of Blue Lab Beats!"),
    generateImageObject("./resources/images/shche_-team-Gl695fYRRH8-unsplash.jpg", 
                        "My image caption goes here"),
    generateSpotifyObject('<iframe src="https://open.spotify.com/embed/album/7s5HYHvCsWsbLFsr3smBiQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', 'Always one of my favourite peaceful electronic albums to work to'),
]

console.log(sidebarObject);



// CODE FOR TAKING A LINK TO AN RESOURCE AND RETURNING AN OBJECT CONTAINING ALL THE INFO NEEDED TO ADD IT TO MY WEBSITE FEED

// Generate Spotify object from an Embed Link 
function generateSpotifyObject(embedLink, caption) {
    const srcRegex = embedLink.match(/src="[^"]+"/)[0];
    const frameborderRegex = embedLink.match(/frameborder="[^"]+"/)[0];
    const allowtransparencyRegex = embedLink.match(/allowtransparency="[^"]+"/)[0];
    const allowRegex = embedLink.match(/allow="[^"]+"/)[0];

    let object = {
        type: "spotify",
        address: srcRegex.substring(5, srcRegex.length - 1),
        frameborder: frameborderRegex.substring(13, frameborderRegex.length -1),
        allowtransparency: allowtransparencyRegex.substring(19, allowtransparencyRegex.length -1),
        allow: allowRegex.substring(7, allowRegex.length - 1),
        caption: caption

    }
    return object;
}

// Generate image object given an image location
function generateImageObject(imageLocation, caption, link=0) {
    let object = {
        type: "image",
        address: imageLocation,
        caption: caption,
        link: link

    }
    return object;
}

// CODE FOR ADDING THE MASTER OBJECT TO MY FEED

// Loops through the master object and adds each object to my feed, 
function addDictToFeed(feedObjects) {
    for (i = 0; i < feedObjects.length; i++) {
        let newImageCaptionDiv = document.createElement("div");
        newImageCaptionDiv.classList.add("image-and-caption");

        let caption = document.createElement("p");
        let captionTextNode = document.createTextNode(feedObjects[i].caption);
        caption.appendChild(captionTextNode);
        newImageCaptionDiv.appendChild(caption);
    
        if (feedObjects[i].type == "image") {
            let image = document.createElement("img");
            image.classList.add("feed-styling");
            image.src = feedObjects[i].address;
            newImageCaptionDiv.appendChild(image);
        } else if (feedObjects[i].type == "spotify") {
            let iframe = document.createElement("iframe");
            iframe.classList.add("feed-styling");
            iframe.src = feedObjects[i].address;
            iframe.frameborder = feedObjects[i].frameborder;
            iframe.allowtransparency = feedObjects[i].allowtransparency;
            iframe.allow = feedObjects[i].allow;
            newImageCaptionDiv.appendChild(iframe);
        } else {
            console.warn("object type is not correctly assigned or handled")
        }

        sidebar.appendChild(newImageCaptionDiv);
    }
}

addDictToFeed(sidebarObject);

// CODE FOR MAKING THE CAPTIONS VISIBLE WHEN OBJECTS ARE HOVERED OVER

// Function to hide the sibling of the hovered over element - here the sibling is the accompanying caption
function hideCaption(event) {
    let parent = event.target.parentElement;
    let para = parent.getElementsByTagName("p");
    para[0].style.visibility = "hidden";
    console.log("event triggered");
}

// Function to show the sibling of the hovered over element - here the sibling is the accompayning caption
function showCaption(event) {
    let parent = event.target.parentElement;
    let para = parent.getElementsByTagName("p");
    para[0].style.visibility = "visible";
    console.log("event triggered");
}

// Loop over the objects in the master object container, identify the image/visual element, and assing the functions to the mouse events
for (i = 0; i < feedObjects.length; i++) {
    let targetObject;
    if (feedObjects[i].querySelector("h1") != null) {
        targetObject = querySelector("h1");
    } else if (feedObjects[i].querySelector("img") != null) {
        targetObject = feedObjects[i].querySelector("img");
    } else if (feedObjects[i].querySelector("iframe") != null) {
        targetObject = feedObjects[i].querySelector("iframe");
    } else if (feedObjects[i].querySelector(".instagram-embed") != null) {
        targetObject = feedObjects[i].querySelector(".instagram-embed");
    }

    targetObject.addEventListener("mouseover", function (event) {
        showCaption(event); })
    targetObject.addEventListener("mouseout", function (event) {
        hideCaption(event); })
}






// Just some stuff to check I am correctly selecting elements
function testElement(element) {
    element.style.backgroundColor = "red";
}
sidebar.addEventListener("click", function () {
    testElement(sidebar);
})

// Just checking the JS has loaded
window.onload = () => {console.log("js loaded")};


// instead of adding to feed one at a time, make a list of dictionaries, then add to feed in one go