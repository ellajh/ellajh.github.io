
// SIDEBAR CREATION CODE

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

// CODE FOR TAKING A LINK TO AN RESOURCE AND RETURNING AN OBJECT CONTAINING ALL THE INFO NEEDED TO ADD IT TO MY WEBSITE FEED

// Generate Spotify object from an Embed Link 
// Extracts only the information required from the Embed Link
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

// Generate image object given an image location, caption, and optional hyperlink
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
        newImageCaptionDiv.classList.add("flex-border");

        let caption = document.createElement("p");
        caption.classList.add("caption");
        caption.classList.add("inline-border");
        let captionTextNode = document.createTextNode(feedObjects[i].caption);
        caption.appendChild(captionTextNode);
        newImageCaptionDiv.appendChild(caption);
    
        if (feedObjects[i].type == "image") {
            let image = document.createElement("img");
            image.classList.add("feed-styling");
            image.classList.add("inline-border");
            image.src = feedObjects[i].address;
            newImageCaptionDiv.appendChild(image);
        } else if (feedObjects[i].type == "spotify") {
            let iframe = document.createElement("iframe");
            iframe.classList.add("feed-styling");
            iframe.classList.add("inline-border");
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
    console.log(sidebarElement);
    console.log(sidebarElement.clientWidth);
    if (sidebarElement.clientWidth > 300) {
        console.log("hide event triggered");
        let parent = event.target.parentElement;
        let para = parent.getElementsByTagName("p");
        para[0].style.visibility = "hidden";
    }
    event.target.style.opacity = 0.5;
    event.target.style.backgroundColor = "rgb(100, 100, 100)";
    console.log("hide function event triggered");
    
}

// Function to show the sibling of the hovered over element - here the sibling is the accompayning caption
function showCaption(event) {
    /*if (sidebarElement.width > 300) {*/
    let parent = event.target.parentElement;
    let para = parent.getElementsByTagName("p");
    para[0].style.visibility = "visible";
    event.target.style.opacity = 1;
    event.target.style.backgroundColor = "rgb(100, 100, 100, 0.5)";
    console.log("event triggered");
}

// Loop over the objects in the master object container, identify the image/visual element, and assign the functions to the mouse events
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

// SHOW AND HIDE THE SIDEBAR CODE

let sidebarElement = document.getElementsByClassName("sidebar")[0];
let sidebarShowButton = document.getElementsByClassName("sidebar-show-button")[0];
let sidebarHideButton = document.getElementsByClassName("sidebar-hide-button")[0];
let buttonBox = document.getElementsByClassName("button-box")[0];
let sidebarHeader = document.getElementsByClassName("sidebar-title")[0];
let captions = document.getElementsByClassName("image-and-caption");
console.log(captions);


function showSidebar() {
    sidebarElement.style.visibility = "visible";
    if (sidebarElement.clientWidth < 300) {
        for (i = 0; i < feedObjects.length; i++) {
            let par = feedObjects[i].getElementsByTagName("p")
            console.log(par)
            par[0].style.visibility = "visible";
        }

    }
    
    document.getElementsByClassName("sidebar")[0].style.backgroundColor = "rgb(160, 160, 160)";
    buttonBox.style.opacity = 1;
    buttonBox.style.backgroundColor = "rgb(130, 130, 130)";
    sidebarHeader.style.opacity = 1;
    sidebarHeader.style.backgroundColor = "rgb(130, 130, 130)";
    
    sidebarShowButton.style.display = "none";
    sidebarHideButton.style.display = "block";
}

function hideSidebar() {
    sidebarElement.style.visibility = "hidden";
    for (i = 0; i < feedObjects.length; i++) {
        let par = feedObjects[i].getElementsByTagName("p")
        console.log(par)
        par[0].style.visibility = "hidden";
    }

    document.getElementsByClassName("sidebar")[0].style.backgroundColor = "rgb(182, 184, 182, 0.3)";
    buttonBox.style.opacity = 0.5;
    buttonBox.style.backgroundColor = "rgb(100, 100, 100)";
    sidebarHeader.style.opacity = 0.5;
    sidebarHeader.style.backgroundColor = "rgb(100, 100, 100)";

    sidebarShowButton.style.display = "block";
    sidebarHideButton.style.display = "none";
}


// This function makes sure the sidebar behaves as it should at different screen widths
function sidebarActionsOnResize() {
    if (window.innerWidth == 1400) {
        hideSidebar();
    }

    if (window.innerWidth < 470) {
        let captions = document.getElementsByClassName("caption");
        for (i = 0; i < captions.length; i++) {
            captions[i].style.visibility = "visible";
            captions[i].style.textAlign = "center";
        }
    } else if (window.innerWidth >= 470) {
        let captions = document.getElementsByClassName("caption");
        for (i = 0; i < captions.length; i++) {
            captions[i].style.visibility = "hidden";
        }
    }
}

window.addEventListener("resize", sidebarActionsOnResize);
sidebarShowButton.addEventListener("click", showSidebar);
sidebarHideButton.addEventListener("click", hideSidebar);


